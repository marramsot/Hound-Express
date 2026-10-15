import type { Guide } from '../../types/Guide'
import { useState } from 'react'
interface GuideFormProps {
    guides: Guide[]
    onAddGuide: (guide: Guide) => void
}
function GuideForm({ guides, onAddGuide }: GuideFormProps) {
    const [errors, setErrors] = useState({
        numeroGuia: '',
        origen: '',
        destino: '',
        destinatario: '',
        fecha: '',
        estado: '',
    })
    const today = new Date().toLocaleDateString('en-CA')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault() //evita que se recargue la página
        const form = event.currentTarget
        const formData = new FormData(form)
        const numeroGuia = Number(formData.get('n-guia'))//convierte a número lo que tenemos escrito en el campo número de guía
        const origen = String(formData.get('origen'))
        const destino = String(formData.get('destino'))
        const destinatario = String(formData.get('destinatario'))
        const fecha = String(formData.get('fecha'))
        const estado = formData.get('status')?.toString() ?? ''
        //revisa los elementos del arreglo y regresa true si el número de guía ya existe
        const guiaExiste = guides.some(guide => guide.numeroGuia === numeroGuia)
        //si falta algún dato no registramos ninguna guía
       const newErrors = {
            numeroGuia: !numeroGuia
                ? 'Ingresa un número de guía'
                : guiaExiste
                ? 'Este número de guía ya está registrado'
                : '',
            origen: !origen ? 'Selecciona un origen' : '',
            destino: !destino ? 'Selecciona un destino' : '',
            destinatario: !destinatario ? 'Ingresa el nombre del destinatario' : '',
            fecha: !fecha ? 'Selecciona una fecha' : '',
            estado: !estado ? 'Selecciona un estado del paquete' : '',
        }

        setErrors(newErrors)

        if (Object.values(newErrors).some(error => error)) {
            return
        }
        const newGuide: Guide = {
            numeroGuia,
            origen,
            destino,
            destinatario,
            fecha,
            estado,
            historial: []
            }
        onAddGuide(newGuide)
        form.reset()
            setErrors({
            numeroGuia: '',
            origen: '',
            destino: '',
            destinatario: '',
            fecha: '',
            estado: '',
        })
    }
    
    return(
        <article id="registro" className="container__registro">
            <form id="registerform" autoComplete="off" onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="n-guia">Número de guía</label>
                    <input placeholder="Número de guía"  type="text" name="n-guia" id="n-guia"/>
                    {errors.numeroGuia && (<><img id="imgguia" className="error-img" src="/img/error.png" alt="Error"/><span className="error-message">{errors.numeroGuia}</span></>)}
                </div>
                <div className="campo">
                    <label htmlFor="origen">Origen</label>
                    <select  name="origen" id="origen">
                        <option value="">Selecciona el origen</option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Ciudad de México">Ciudad de México</option>
                        <option value="Durango">Durango</option>
                        <option value="Estado de México">Estado de México</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Michoacán">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Queretaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinalóa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                    </select>
                     {errors.origen && (<><img className="error-img" src="/img/error.png" alt="Error"/><span className="error-message">{errors.origen}</span></>)}
                </div>
                <div className="campo">
                    <label htmlFor="destino">Destino</label>
                    <select name="destino" id="destino">
                        <option value="">Selecciona el destino</option>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California Sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Ciudad de México">Ciudad de México</option>
                        <option value="Durango">Durango</option>
                        <option value="Estado de México">Estado de México</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="Michoacán">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Queretaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinalóa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                    </select>
                    {errors.destino && (<> <img className="error-img" src="img/error.png" alt="Error"/><span className='error-message'>{errors.destino}</span></>)}
                </div>
                <div className="campo">
                    <label htmlFor="destname">Destinatario</label>
                    <input type="text" placeholder="Nombre del destinatario" name="destinatario" id="destname"/>
                    {errors.destinatario && (<><img className="error-img" src="/img/error.png" alt="Error"/><span className='error-message'>{errors.destinatario}</span></>)} 
                </div>
                <div className="campo">
                    <label htmlFor="fecha">Fecha de creación</label>
                    <input type="date" name= "fecha" id="fecha" max={today} />
                     {errors.fecha && (<><img className="error-img" src="img/error.png"/><span className='error-message'>{errors.fecha}</span></> )}
                </div>
               <div className="campo--radio">
                    <div className="opciones-radio">
                        <label htmlFor="status">Estado del paquete</label>

                        <div className="opcion-radio">
                        <input type="radio" name="status" id="pendiente" value="Pendiente" />
                        <label htmlFor="pendiente" id="label-p">Pendiente</label>
                        </div>

                        <div className="opcion-radio">
                        <input type="radio" name="status" id="transito" value="En tránsito" />
                        <label htmlFor="transito" id="label-t">En tránsito</label>
                        </div>

                        <div className="opcion-radio">
                        <input type="radio" name="status" id="entregado" value="Entregado" />
                        <label htmlFor="entregado" id="label-e">Entregado</label>
                        </div>
                    </div>

                    {errors.estado && (
                        <>
                        <img className="error-img" src="img/error.png" />
                        <span className="error-message">{errors.estado}</span>
                        </>
                    )}
                </div>
                <button type="submit" className="btnRegister">Registrar guía</button>
            </form>
        </article>
    )
}
export default GuideForm