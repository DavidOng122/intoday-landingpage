// Supabase Click Tracking
const SUPABASE_URL = "https://jklllchzcihhofwqppzt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprbGxsY2h6Y2loaG9md3FwcHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDEyNDMsImV4cCI6MjA4ODY3NzI0M30.f5JdyWlRjU7Ci8wfPejKEHZulFW481XJJCwf46XSxds";

// Initialize Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
    // Find all buttons with class 'start-btn'
    const buttons = document.querySelectorAll(".start-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", async (e) => {
            // Check for modifier keys (Ctrl, Shift, Meta) to preserve "open in new tab" behavior
            if (e.button !== 0 || e.ctrlKey || e.shiftKey || e.metaKey) return;
            
            const href = button.getAttribute("href");
            
            // Only intercept if there is a destination
            if (!href || href === "#") return;
            
            e.preventDefault(); // Intercept the navigation
            const buttonId = button.getAttribute("data-i18n") || button.textContent.trim() || "start-btn";
            
            console.log("Tracking click for:", buttonId);
            
            try {
                const { error } = await supabaseClient
                    .from("clicks")
                    .insert([
                        { button_id: buttonId }
                    ]);
                
                if (error) {
                    console.error("Supabase Error logging click:", error);
                } else {
                    console.log("Click logged successfully:", buttonId);
                }
            } catch (err) {
                console.error("Unexpected error logging click:", err);
            } finally {
                // Navigate after attempt (successful or not)
                window.location.href = href;
            }
        });
    });
});
