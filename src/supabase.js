import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oabunnptcpwcyfiaturc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hYnVubnB0Y3B3Y3lmaWF0dXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MzM3NTUsImV4cCI6MjAzMTUwOTc1NX0.ubaVtImUcg1SG4f66jIUVljhqupVknpAockq0WcMXD0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
