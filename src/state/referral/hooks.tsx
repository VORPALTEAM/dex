import { useSelector, useDispatch } from 'react-redux'


export const FindState = () => {
    const currentState = useSelector(state => state)
    console.log(currentState)
    return currentState;
}