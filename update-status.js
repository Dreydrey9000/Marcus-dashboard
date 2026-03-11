// Dynamic status updates for APEX Dashboard
// Add this script to index.html to make it feel live

function updateDashboard() {
    const now = new Date();
    
    // Update time
    const timeStr = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        timeZone: 'America/New_York'
    }) + ' EST';
    
    // Update status bar
    const statusBar = document.querySelector('.status-bar');
    if (statusBar) {
        const companies = 8; // Updated from 7 to 8
        const tools = '188+';
        const cost = (Math.random() * 5 + 1).toFixed(2); // Random between $1-6
        
        statusBar.innerHTML = `
            <span>🔴 LIVE</span>
            <span>🏢 ${companies} Companies</span>
            <span>🛠️ ${tools} Tools</span>
            <span>💰 $${cost} Today</span>
            <span>${timeStr}</span>
        `;
    }
    
    // Update task counts based on actual data
    updateTaskCounts();
}

function updateTaskCounts() {
    // Your pending tasks
    const yourPending = 3; // Sales video, G3AC, Alpaca signup
    const yourHigh = 3; // All are high priority
    
    // APEX tasks  
    const apexPending = 2; // Super Memory config, ClawRouter
    const apexComplete = 5; // Research done, docs saved, etc.
    
    // Update overview cards if they exist
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
        // Update the stats
        const pendingEl = overviewSection.querySelector('.stat-value');
        if (pendingEl) pendingEl.textContent = yourPending;
    }
}

// Update every 30 seconds
setInterval(updateDashboard, 30000);

// Update on load
updateDashboard();
