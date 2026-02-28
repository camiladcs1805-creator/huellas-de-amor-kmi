const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Aquí conectarías con la API de Google Gemini o OpenAI
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    
    // Simulación de respuesta de IA profesional
    let reply = "Como asistente de Huellas de Amor, te recomiendo consultar a un veterinario si tu mascota presenta dolor. ¿En qué más puedo ayudarte?";
    
    if(userMessage.toLowerCase().includes("urgencia")) {
        reply = "⚠️ Por favor, llámanos de inmediato al 555-0123 para atención urgente.";
    }

    res.json({ reply });
});

app.listen(3000, () => console.log('Backend de Huellas de Amor corriendo en puerto 3000'));