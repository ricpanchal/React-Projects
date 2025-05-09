import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://bdfjkfgthytimtyxsllp.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZmprZmd0aHl0aW10eXhzbGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTQ0MzUsImV4cCI6MjA2MDIzMDQzNX0.4hhi1Zp8CkCyRHQmIBvDIrGZkKLV_3uSsl6hfczvhXc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
