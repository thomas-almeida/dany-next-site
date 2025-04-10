export default function AddressIframe() {
  return (
    <>
      <div className="flex justify-center items-center my-2 rounded-lg">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8509698558446!2d-46.64715278761387!3d-23.573795361963523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5996e55e19fd%3A0xc46101fed2a6f45e!2sR.%20Cubat%C3%A3o%2C%20193%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004013-040!5e0!3m2!1spt-BR!2sbr!4v1744304503431!5m2!1spt-BR!2sbr"
            width="100%"
            height="400px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </>
  )
}