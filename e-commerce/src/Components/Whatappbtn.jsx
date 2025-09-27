import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
const Whatappbtn = () => {
    return (
        <div>
            <a href="https://api.whatsapp.com/send?phone=03131033744&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
                class="float" target="_blank">
                <FaWhatsapp className="iconmyWhatsapp" />
            </a>
        </div>
    )
}

export default Whatappbtn