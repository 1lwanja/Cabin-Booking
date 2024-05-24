/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nweyxmbrzbvoixtyegfx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53ZXl4bWJyemJ2b2l4dHllZ2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODA0MzMsImV4cCI6MjAzMTg1NjQzM30.f6mUR-wozim2YUjDs8As8vpISnkwHtn4g4uS7ISDhng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
