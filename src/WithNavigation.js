import { useNavigate } from "react-router-dom";


export function WithNavigation(Component){
    return function WrappedComponent(props){
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />
    }
}