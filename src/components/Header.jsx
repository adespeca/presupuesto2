import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  presupuesto, 
  setGastos,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
  }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto 
            presupuesto = {presupuesto}
            setGastos  = {setGastos}
            gastos = {gastos}
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto = {setIsValidPresupuesto}
            />
        ):(
          <NuevoPresupuesto 
        presupuesto = { presupuesto }
        setPresupuesto = { setPresupuesto }
        setIsValidPresupuesto = {setIsValidPresupuesto}
        />
        )}
        
    </header>
  )
}

export default Header