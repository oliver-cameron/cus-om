///import { createClient } from '@supabase/supabase-js'
//require('dotenv').config();
const supabaseUrl = 'https://hgdmkevumhktasvgqpzr.supabase.co'
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)
