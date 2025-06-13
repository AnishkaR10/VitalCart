// Nutrient and illness database
        const nutrientDatabase = {
            'iron': {
                deficiencyIndicators: ['iron deficiency', 'anemia', 'low iron', 'ferritin low', 'hemoglobin low', 'hematocrit low'],
                symptoms: ['fatigue', 'weakness', 'pale skin', 'shortness of breath'],
                foods: {
                    'Meat & Fish': ['lean beef', 'chicken liver', 'turkey', 'salmon', 'tuna', 'sardines'],
                    'Plant Sources': ['spinach', 'lentils', 'chickpeas', 'quinoa', 'pumpkin seeds', 'dark chocolate'],
                    'Fortified Foods': ['fortified cereals', 'fortified bread', 'fortified pasta']
                },
                illnesses: ['iron deficiency anemia', 'chronic fatigue', 'restless leg syndrome']
                
            },
            'vitamin d': {
                deficiencyIndicators: ['vitamin d deficiency', 'low vitamin d', '25-hydroxyvitamin d low', 'rickets', 'osteomalacia'],
                symptoms: ['bone pain', 'muscle weakness', 'fatigue', 'depression'],
                foods: {
                    'Fish': ['salmon', 'mackerel', 'sardines', 'tuna', 'cod liver oil'],
                    'Fortified Foods': ['fortified milk', 'fortified cereals', 'fortified orange juice'],
                    'Other': ['egg yolks', 'cheese', 'beef liver', 'mushrooms']
                },
                illnesses: ['osteoporosis', 'rickets', 'osteomalacia', 'seasonal affective disorder']
                
            },
            'vitamin b12': {
                deficiencyIndicators: ['b12 deficiency', 'vitamin b12 low', 'cobalamin deficiency', 'pernicious anemia'],
                symptoms: ['fatigue', 'weakness', 'memory problems', 'nerve problems'],
                foods: {
                    'Animal Products': ['beef liver', 'clams', 'fish', 'meat', 'poultry', 'eggs', 'dairy products'],
                    'Fortified Foods': ['nutritional yeast', 'fortified cereals', 'fortified plant milk'],
                    'Supplements': ['b12 supplements', 'multivitamins']
                },
                
                illnesses: ['pernicious anemia', 'neuropathy', 'cognitive decline']
                
            },
            'calcium': {
                deficiencyIndicators: ['calcium deficiency', 'low calcium', 'hypocalcemia', 'osteopenia', 'osteoporosis'],
                symptoms: ['muscle cramps', 'brittle nails', 'dental problems', 'bone pain'],
                foods: {
                    'Dairy': ['milk', 'cheese', 'yogurt', 'kefir'],
                    'Leafy Greens': ['kale', 'collard greens', 'bok choy', 'broccoli'],
                    'Other': ['almonds', 'sesame seeds', 'sardines with bones', 'tofu']
                },
                illnesses: ['osteoporosis', 'rickets', 'osteomalacia', 'tetany']
                
            },
            'magnesium': {
                deficiencyIndicators: ['magnesium deficiency', 'low magnesium', 'hypomagnesemia'],
                symptoms: ['muscle cramps', 'fatigue', 'irregular heartbeat', 'anxiety'],
                foods: {
                    'Nuts & Seeds': ['almonds', 'cashews', 'pumpkin seeds', 'sunflower seeds'],
                    'Leafy Greens': ['spinach', 'swiss chard', 'kale'],
                    'Other': ['dark chocolate', 'avocados', 'black beans', 'quinoa']
                },
                illnesses: ['migraine', 'hypertension', 'cardiovascular disease']
                
            },
            'zinc': {
                deficiencyIndicators: ['zinc deficiency', 'low zinc'],
                symptoms: ['slow wound healing', 'hair loss', 'loss of taste', 'frequent infections'],
                foods: {
                    'Protein': ['oysters', 'beef', 'pork', 'chicken', 'beans', 'nuts'],
                    'Seeds': ['pumpkin seeds', 'sesame seeds', 'hemp seeds'],
                    'Other': ['whole grains', 'dairy products', 'dark chocolate']
                },
                illnesses: ['impaired immune function', 'growth retardation', 'acne']
            },
            'folate': {
                deficiencyIndicators: ['folate deficiency', 'folic acid deficiency', 'low folate', 'megaloblastic anemia'],
                symptoms: ['fatigue', 'weakness', 'pale skin', 'shortness of breath'],
                foods: {
                    'Leafy Greens': ['spinach', 'kale', 'romaine lettuce', 'asparagus'],
                    'Legumes': ['lentils', 'chickpeas', 'black beans', 'pinto beans'],
                    'Fortified Foods': ['fortified cereals', 'fortified bread', 'fortified pasta']
                },
                illnesses: ['neural tube defects', 'megaloblastic anemia', 'cognitive decline']
            },
            'vitamin c': {
        deficiencyIndicators: ['vitamin c deficiency', 'scurvy', 'low vitamin c'],
        symptoms: ['bleeding gums', 'bruising', 'fatigue', 'slow wound healing'],
        foods: {
            'Fruits': ['oranges', 'kiwi', 'strawberries', 'pineapple', 'mango'],
            'Vegetables': ['bell peppers', 'broccoli', 'brussels sprouts', 'tomatoes']
        },
        illnesses: ['scurvy', 'weakened immunity']
       
    },
    'vitamin a': {
        deficiencyIndicators: ['vitamin a deficiency', 'low vitamin a', 'retinol low'],
        symptoms: ['night blindness', 'dry eyes', 'skin issues'],
        foods: {
            'Animal Sources': ['liver', 'egg yolks', 'dairy'],
            'Plant Sources': ['carrots', 'sweet potatoes', 'spinach', 'kale', 'pumpkin']
        },
        illnesses: ['night blindness', 'xerophthalmia', 'dry skin']
    },
    'vitamin e': {
        deficiencyIndicators: ['vitamin e deficiency', 'low vitamin e', 'tocopherol deficiency'],
        symptoms: ['muscle weakness', 'vision problems', 'immune issues'],
        foods: {
            'Nuts & Oils': ['almonds', 'sunflower seeds', 'hazelnuts', 'wheat germ oil'],
            'Vegetables': ['spinach', 'broccoli', 'avocado']
        },
        illnesses: ['neuropathy', 'muscle damage', 'immune dysfunction']
    },
    'vitamin k': {
        deficiencyIndicators: ['vitamin k deficiency', 'low vitamin k'],
        symptoms: ['easy bruising', 'bleeding gums', 'nosebleeds'],
        foods: {
            'Leafy Greens': ['kale', 'spinach', 'collard greens'],
            'Other': ['broccoli', 'brussels sprouts', 'fermented soy (natto)']
        },
        illnesses: ['excessive bleeding', 'bone issues']
       
    },
    'potassium': {
        deficiencyIndicators: ['potassium deficiency', 'low potassium', 'hypokalemia'],
        symptoms: ['muscle weakness', 'irregular heartbeat', 'fatigue'],
        foods: {
            'Fruits': ['bananas', 'oranges', 'apricots'],
            'Other': ['potatoes', 'sweet potatoes', 'spinach', 'white beans']
        },
        illnesses: ['arrhythmia', 'fatigue', 'muscle cramps']
    },
    'iodine': {
        deficiencyIndicators: ['iodine deficiency', 'low iodine', 'goiter'],
        symptoms: ['swollen neck', 'fatigue', 'cold intolerance'],
        foods: {
            'Seafood': ['cod', 'tuna', 'shrimp'],
            'Other': ['iodized salt', 'seaweed', 'dairy products']
        },
        illnesses: ['goiter', 'hypothyroidism']
    },
    'selenium': {
        deficiencyIndicators: ['selenium deficiency', 'low selenium'],
        symptoms: ['fatigue', 'hair loss', 'brain fog'],
        foods: {
            'Protein': ['brazil nuts', 'tuna', 'eggs', 'chicken'],
            'Grains': ['brown rice', 'whole wheat bread']
        },
        illnesses: ['keshan disease', 'weakened immunity']
    },
    'omega 3': {
        deficiencyIndicators: ['omega 3 deficiency', 'low omega 3 fatty acids'],
        symptoms: ['dry skin', 'depression', 'joint pain'],
        foods: {
            'Fish': ['salmon', 'mackerel', 'sardines'],
            'Plant Sources': ['flaxseeds', 'chia seeds', 'walnuts']
        },
        illnesses: ['heart disease', 'joint inflammation', 'cognitive decline']
    }
        };

        let currentResults = {
            nutrients: [],
            illnesses: [],
            extractedText: ''
        };

        // File upload handling
        const uploadSection = document.getElementById('uploadSection');
        const fileInput = document.getElementById('fileInput');
        const progressSection = document.getElementById('progressSection');
        const results = document.getElementById('results');

        // Drag and drop functionality
        uploadSection.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadSection.classList.add('dragover');
        });

        uploadSection.addEventListener('dragleave', () => {
            uploadSection.classList.remove('dragover');
        });

        uploadSection.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadSection.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFile(e.target.files[0]);
            }
        });

        function updateProgress(percentage, status) {
            document.getElementById('progressFill').style.width = percentage + '%';
            document.getElementById('statusText').textContent = status;
        }

        async function handleFile(file) {
            try {
                progressSection.style.display = 'block';
                results.style.display = 'none';
                
                updateProgress(10, 'Reading file...');
                
                let text = '';
                
                if (file.type === 'application/pdf') {
                    text = await extractTextFromPDF(file);
                } else if (file.type.startsWith('image/')) {
                    text = await extractTextFromImage(file);
                } else {
                    throw new Error('Unsupported file type');
                }
                
                updateProgress(60, 'Analyzing content...');
                currentResults.extractedText = text;
                
                // Process the extracted text
                analyzeText(text);
                
                updateProgress(100, 'Analysis complete!');
                
                setTimeout(() => {
                    progressSection.style.display = 'none';
                    displayResults();
                }, 1000);
                
            } catch (error) {
                console.error('Error processing file:', error);
                showError('Error processing file: ' + error.message);
                progressSection.style.display = 'none';
            }
        }

        async function extractTextFromPDF(file) {
            updateProgress(20, 'Processing PDF...');
            
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            let fullText = '';
            
            for (let i = 1; i <= pdf.numPages; i++) {
                updateProgress(20 + (i / pdf.numPages) * 30, `Processing page ${i} of ${pdf.numPages}...`);
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                fullText += pageText + ' ';
            }
            
            return fullText;
        }

        async function extractTextFromImage(file) {
            updateProgress(20, 'Performing OCR...');
            
            const { data: { text } } = await Tesseract.recognize(file, 'eng', {
                logger: m => {
                    if (m.status === 'recognizing text') {
                        updateProgress(20 + (m.progress * 40), 'Recognizing text: ' + Math.round(m.progress * 100) + '%');
                    }
                }
            });
            
            return text;
        }

        function analyzeText(text) {
            const lowerText = text.toLowerCase();
            currentResults.nutrients = [];
            currentResults.illnesses = new Set();

            
            // Check for nutrient deficiencies
            for (const [nutrient, data] of Object.entries(nutrientDatabase)) {
                for (const indicator of data.deficiencyIndicators) {
                    if (lowerText.includes(indicator.toLowerCase())) {
                        currentResults.nutrients.push(nutrient);
                        // Add associated illnesses
                        data.illnesses.forEach(illness => currentResults.illnesses.add(illness));
                        break;
                    }
                }
            }
            
            // Convert Set to Array
        currentResults.illnesses = Array.from(currentResults.illnesses);
        }

        function displayResults() {
            if (currentResults.nutrients.length === 0) {
                showError('No nutrient deficiencies detected in the document. Please ensure the document contains clear medical information.');
                return;
            }
            
            displayNutrients();
            displayIllnesses();
            displayGroceryList();
            
            results.style.display = 'block';
        }

        function displayNutrients() {
            const container = document.getElementById('nutrientResults');
            container.innerHTML = '';
            
            if (currentResults.nutrients.length === 0) {
                container.innerHTML = '<p>No specific nutrient deficiencies detected.</p>';
                return;
            }
            
            currentResults.nutrients.forEach(nutrient => {
                const data = nutrientDatabase[nutrient];
                const div = document.createElement('div');
                div.className = 'nutrient-item';
                div.innerHTML = `
                    <div class="nutrient-name">${nutrient.charAt(0).toUpperCase() + nutrient.slice(1)} Deficiency</div>
                    <div class="nutrient-info">Common symptoms: ${data.symptoms.join(', ')}</div>
                `;
                container.appendChild(div);
            });
        }
function displayIllnesses() {
    const container = document.getElementById('illnessResults');
    container.innerHTML = '';
    
    if (currentResults.illnesses.length === 0) {
        container.innerHTML = '<p>No specific health conditions identified.</p>';
        return;
    }
    
    currentResults.illnesses.forEach(illness => {
        const div = document.createElement('div');
        div.className = 'illness-item';
        div.innerHTML = `
            <div class="illness-name">${illness.charAt(0).toUpperCase() + illness.slice(1)}</div>
            <div class="illness-info">Related to the detected nutrient deficiencies</div>
        `;
        container.appendChild(div);
    });
}

        function displayGroceryList() {
    const container = document.getElementById('groceryResults');
    container.innerHTML = '';
    const baseAmazon = "https://www.amazon.in/s?k=";
    const categoryIcons = {
    "Fish": "🐟",
    "Meat & Fish": "🥩",
    "Meat & Animal Products": "🥩",
    "Animal Products": "🥩",
    "Leafy Greens": "🌿",
    "Plant Sources": "🌱",
    "Dairy": "🥛",
    "Fortified Foods": "🥣",
    "Other": "🧂",
    "Nuts & Seeds": "🥜",
    "Seafood": "🐚",
    "Grains": "🌾",
    "Fruits": "🍓",
    "Supplements": "💊",
    "Protein": "🍗",
    "Oils & Fats": "🌻",
    "Vegetables": "🥦",
    "Legumes": "🌱",
    "Seeds": "🌱"
};
    const allFoods = {};

    // Collect all food recommendations
    currentResults.nutrients.forEach(nutrient => {
        const data = nutrientDatabase[nutrient];
        for (const [category, foods] of Object.entries(data.foods)) {
            if (!allFoods[category]) {
                allFoods[category] = new Set();
            }
            foods.forEach(food => allFoods[category].add(food));
        }
    });

    // Display food categories
    for (const [category, foodSet] of Object.entries(allFoods)) {
        const div = document.createElement('div');
        div.className = 'food-category';

        const foods = Array.from(foodSet);
        div.innerHTML = `
            <div class="category-title">${categoryIcons[category] ? categoryIcons[category] + " " : ""}${category}</div>
            ${foods.map(food => `
                <div class="food-item">
                    <div class="food-name">${food.charAt(0).toUpperCase() + food.slice(1)}</div>
                    <a class="buy-now-btn" href="${baseAmazon}${encodeURIComponent(food)}" target="_blank" title="Buy on Amazon">
                        <img src="https://img.icons8.com/fluency/32/000000/shopping-cart-loaded.png" alt="Buy Now" />
                    </a>
                </div>
            `).join('')}
        `;

        container.appendChild(div);
    }
}

        function showError(message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = message;
            
            document.querySelector('.container').appendChild(errorDiv);
            
            setTimeout(() => {
                errorDiv.remove();
            }, 5000);
        }
        document.addEventListener('DOMContentLoaded', function() {
    const cartTrigger = document.getElementById('groceryCartTrigger');
    const slider = document.getElementById('grocerySlider');
    const closeBtn = document.getElementById('closeGrocerySlider');

    cartTrigger.addEventListener('click', () => {
        slider.classList.add('open');
        displayGroceryList(); // Ensure the list is rendered when opening
    });

    closeBtn.addEventListener('click', () => {
        slider.classList.remove('open');
    });

    // Optional: close slider when clicking outside content
    slider.addEventListener('click', (e) => {
        if (e.target === slider) {
            slider.classList.remove('open');
        }
    });
});