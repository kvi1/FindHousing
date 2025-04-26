import {createClient} from '@supabase/supabase-js';

const URL = 'https://bmhlfjeickmfrehmrrub.supabase.co'

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaGxmamVpY2ttZnJlaG1ycnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTE1MzgsImV4cCI6MjA2MTE4NzUzOH0.SH4x0sSeZpoHFLEA3EEbqqMU8Lz_ca7Wiz2wp6FiTqU'

export const supabase = createClient(URL, KEY);
