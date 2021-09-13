// import Modal from '../components/Modal';
// import { useState } from 'react';
// import { NavLink, useLocation, useRouteMatch, Switch, Route } from 'react-router-dom';
// import AuthModal from '../components/AuthModal';
// import LoginView from '../views/LoginView';
// import RegistrationView from '../views/RegistrationView';

// const AuthPage = () => {
//     const [modalShow, setModalShow] = useState(true)
//     const { path } = useRouteMatch();
//     const location = useLocation();

//     const toggleModal = () => {
//         setModalShow(!modalShow);
//     };

//     return (
//         <>
            

//             {modalShow &&
//                 <Modal
//                     onClose={toggleModal}
//                 >
//                     <AuthModal
//                     />
//                 </Modal>
//             }
//             <Switch>
//                 <Route path={`${path}/registration`}>
//                     <RegistrationView />
//                 </Route>
            
//                 <Route path={`${path}/login`}>
//                     <LoginView />
//                 </Route>
//             </Switch>
//         </>
//     );
// };

// export default AuthPage;