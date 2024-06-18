import { createClient } from '@supabase/supabase-js'
console.log()
// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')