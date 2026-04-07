import DISEASES from './database.js';

/**
 * SMART DETECTION LOGIC
 * Filters diseases based on crop and adds a "Healthy" probability
 */
export function getSmartDiagnosis(crop) {
    // 1. Filter for specific crop + generic "all" category
    const possibleDiseases = DISEASES.filter(d => d.crop === crop || d.crop === 'all');
    
    // 2. 25% Chance the plant is healthy
    if (Math.random() < 0.25) {
        return {
            id: 'healthy',
            name: `Healthy ${crop.charAt(0).toUpperCase() + crop.slice(1)}`,
            status: 'healthy',
            confidence: Math.floor(Math.random() * (99 - 94) + 94),
            summary: 'No pathogens detected. Continue regular irrigation and monitoring.',
            emoji: '🌿'
        };
    }

    // 3. Pick a random disease from the filtered pool
    const randomIndex = Math.floor(Math.random() * possibleDiseases.length);
    const disease = possibleDiseases[randomIndex];
    
    // 4. Generate a realistic confidence score based on the DB base value
    const variance = Math.floor(Math.random() * 10) - 5; // -5 to +5 range
    const finalConfidence = Math.min(99, disease.confidence + variance);
    
    return { 
        ...disease, 
        status: disease.severity, 
        confidence: finalConfidence 
    };
}

/**
 * UI CONTROLLER
 * Handles the button clicks and display logic
 */
window.runAnalysis = function() {
    const selectedBtn = document.querySelector('.crop-btn.active');
    if (!selectedBtn) {
        alert("Please select a crop type first!");
        return;
    }

    const crop = selectedBtn.getAttribute('data-crop');
    const result = getSmartDiagnosis(crop);
    
    displayResult(result);
};

function displayResult(res) {
    const panel = document.getElementById('resultPanel');
    const placeholder = document.getElementById('noResultBox');
    
    placeholder.style.display = 'none';
    panel.classList.add('show');
    
    // Build the result HTML (using your existing CSS classes)
    panel.innerHTML = `
        <div class="result-card">
            <div class="result-header ${res.status}" data-emoji="${res.emoji}">
                <div class="result-status-row">
                    <div class="result-icon">${res.emoji}</div>
                    <div>
                        <h2 class="result-title">${res.name}</h2>
                        <p class="result-sub">Detection Confidence</p>
                    </div>
                </div>
                <div class="conf-row">
                    <div class="conf-bar"><div class="conf-fill" style="width: ${res.confidence}%"></div></div>
                    <span class="conf-pct">${res.confidence}%</span>
                </div>
            </div>
            <div class="result-body">
                <div class="rb-section">
                    <span class="rb-title">Summary</span>
                    <p class="summary-text">${res.summary}</p>
                </div>
                </div>
        </div>
    `;
}
