function checkDisease() {

    let input = document.getElementById("symptomInput").value.toLowerCase();

    let result = "";

    // FEVER
    if (input.includes("fever")) {
        result += `
        🩺 Symptom: Fever <br>
        🦠 Disease: Viral Fever <br>
        🏥 Department: General Medicine <br>
        💊 Treatment:
        <ul>
            <li>Take rest</li>
            <li>Drink fluids</li>
            <li>Take paracetamol</li>
        </ul><hr>`;
    }

    // COUGH
    if (input.includes("cough")) {
        result += `
        🩺 Symptom: Cough <br>
        🦠 Disease: Cold / Throat Infection <br>
        🏥 Department: ENT <br>
        💊 Treatment:
        <ul>
            <li>Warm water</li>
            <li>Cough syrup</li>
            <li>Steam inhalation</li>
        </ul><hr>`;
    }

    // HEADACHE
    if (input.includes("headache")) {
        result += `
        🩺 Symptom: Headache <br>
        🦠 Disease: Migraine / Stress <br>
        🏥 Department: Neurology <br>
        💊 Treatment:
        <ul>
            <li>Rest</li>
            <li>Hydration</li>
            <li>Pain relief tablet</li>
        </ul><hr>`;
    }

    // CHEST PAIN
    if (input.includes("chest pain")) {
        result += `
        🩺 Symptom: Chest Pain <br>
        🦠 Disease: Heart Issue <br>
        🏥 Department: Cardiology <br>
        ⚠️ Emergency:
        <ul>
            <li>Seek immediate medical help</li>
        </ul><hr>`;
    }

    // STOMACH PAIN
    if (input.includes("stomach pain")) {
        result += `
        🩺 Symptom: Stomach Pain <br>
        🦠 Disease: Gastritis <br>
        🏥 Department: Gastroenterology <br>
        💊 Treatment:
        <ul>
            <li>Avoid spicy food</li>
            <li>Drink ORS</li>
            <li>Take antacid</li>
        </ul><hr>`;
    }

    // VOMITING
    if (input.includes("vomiting")) {
        result += `
        🩺 Symptom: Vomiting <br>
        🦠 Disease: Food Poisoning <br>
        🏥 Department: General Medicine <br>
        💊 Treatment:
        <ul>
            <li>Drink ORS</li>
            <li>Stay hydrated</li>
        </ul><hr>`;
    }

    // DIARRHEA
    if (input.includes("diarrhea") || input.includes("loose motion")) {
        result += `
        🩺 Symptom: Diarrhea <br>
        🦠 Disease: Infection <br>
        🏥 Department: Gastroenterology <br>
        💊 Treatment:
        <ul>
            <li>ORS solution</li>
            <li>Boiled food</li>
        </ul><hr>`;
    }

    // COLD
    if (input.includes("cold") || input.includes("runny nose")) {
        result += `
        🩺 Symptom: Cold <br>
        🦠 Disease: Common Cold <br>
        🏥 Department: ENT <br>
        💊 Treatment:
        <ul>
            <li>Steam inhalation</li>
            <li>Warm fluids</li>
        </ul><hr>`;
    }

    // FATIGUE
    if (input.includes("fatigue") || input.includes("weakness")) {
        result += `
        🩺 Symptom: Fatigue <br>
        🦠 Disease: Weakness / Anemia <br>
        🏥 Department: General Medicine <br>
        💊 Treatment:
        <ul>
            <li>Proper sleep</li>
            <li>Healthy diet</li>
        </ul><hr>`;
    }

    // SKIN
    if (input.includes("rash") || input.includes("skin")) {
        result += `
        🩺 Symptom: Skin Issue <br>
        🦠 Disease: Allergy <br>
        🏥 Department: Dermatology <br>
        💊 Treatment:
        <ul>
            <li>Apply ointment</li>
            <li>Avoid allergens</li>
        </ul><hr>`;
    }

    if (result === "") {
        result = "❌ No matching symptom found. Try: fever, cough, headache, stomach pain";
    }

    document.getElementById("result").innerHTML = result;
}