import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kqpqaocoougwxufbhfzs.supabase.co"; //import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = "sb_publishable_z3Evy7U0obB6UFX0m80ppw_dLQRjqdq"; //import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
