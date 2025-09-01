import './WhatsButton.css'

const WhatsAppButton = () => {
    // Mensaje predefinido
    const predefinedMessage = "Buenas tardes, necesito más información sobre un producto";
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(predefinedMessage);
    
    // Número de teléfono (puedes cambiarlo por el tuyo)
    const phoneNumber = "50235924279";
    
    // URL completa de WhatsApp con mensaje predefinido
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            title="Contactar a Tu Chiverio por WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    )
}

export default WhatsAppButton