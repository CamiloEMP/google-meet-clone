import { createClient } from '@supabase/supabase-js'
import { REACT_APP_SUPABASE_KEY, REACT_APP_SUPABASE_URL } from './config'

export const supabase = createClient(
  REACT_APP_SUPABASE_URL as string,
  REACT_APP_SUPABASE_KEY as string
)

console.log('hi')
