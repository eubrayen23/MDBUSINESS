import { supabase } from './supabase';

export type AIAction = 'generate_cv' | 'optimize_section' | 'ats_score' | 'cover_letter' | 'linkedin';

export async function callAI(action: AIAction, data: any) {
  try {
    const { data: response, error } = await supabase.functions.invoke(
      action === 'linkedin' ? 'ai-linkedin' : 'ai-generate',
      {
        body: { action, data: action === 'linkedin' ? undefined : data, profileData: action === 'linkedin' ? data : undefined },
      }
    );

    if (error) throw error;

    let result = response.result;
    if (typeof result === 'string') {
      try {
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          result = JSON.parse(jsonMatch[0]);
        }
      } catch (e) {
        console.error('Failed to parse AI response as JSON', e);
      }
    }

    return result;
  } catch (error) {
    console.error(`AI Error (${action}):`, error);
    throw error;
  }
}
