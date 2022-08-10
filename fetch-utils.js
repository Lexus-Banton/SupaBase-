const SUPABASE_URL = 'https://wyazjbpdnjjaefuknkuk.supabase.co'
const SUPABASE_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YXpqYnBkbmpqYWVmdWtua3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2NDQ5NjQsImV4cCI6MTk3NTIyMDk2NH0.GdzPW67lxss9XDACztMd8rwpaqZfm6BlM8ESbDh5NwY'

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCharacters() {
    
    return Response.data;
}

export async function getCharacter(id) {

    return Response.data;
}