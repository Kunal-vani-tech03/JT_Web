import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setIsSubmitting(false)

    };


    const handleSingUp = async () => {

        try {
          // Replace the following code with your actual login API call
          const response = await fetch('your-signup-api-endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.email,
              username: values.username,
              password: values.password,
            }),
          });
    
          if (response.ok) {
            const userData = await response.json();
    
            // Assuming you have a function to handle successful login
            // submitForm(userData);
    
            // Redirect or perform other actions after successful login
          } else {
            // Handle login failure, e.g., display an error message
            console.error('signup failed');
          }
        } catch (error) {
          console.error('Error during signup:', error);
        }
      };

    
    

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (values.username != '' &&
            values.email != '' &&
            values.password != '' &&
            values.password2 != '') {

            setErrors(validate(values));
        }
    }, [values])

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
                handleSingUp()
            }
        }, [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;

export const useLoginForm = (callback, validate) => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleLogin = async () => {

    try {
      // Replace the following code with your actual login API call
      const response = await fetch('your-login-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();

        // Assuming you have a function to handle successful login
        // submitForm(userData);

        // Redirect or perform other actions after successful login
      } else {
        // Handle login failure, e.g., display an error message
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


   
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setIsSubmitting(false)
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true)       
             
    };

    useEffect(() => {
        if (values.username != '' &&
            values.password != '' ) {
            setErrors(validate(values));
        }
    }, [values])

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
                handleLogin();
            const loginData = localStorage.setItem('login', true)
            // navigate('/dashboard')
            }
        }, [errors]
    );

    return {handleLogin ,handleChange, handleSubmit, values, errors };
};





///////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';

// const useForm = (callback, validate) => {

//     const navigate = useNavigate();

//     const [values, setValues] = useState({
//         username: '',
//         email: '',
//         password: '',
//         password2: ''
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         setErrors(validate(values));
//         setIsSubmitting(true);
//     };
    
//     useEffect(()=>{
//         if (isSubmitting === true) {           
//             navigate('/user');
//         }
//     },[isSubmitting])
//     useEffect(() => {
//         if (values.username != '' &&
//             values.email != '' &&
//             values.password != '' &&
//             values.password2 != '') {

//             setErrors(validate(values));
//         }
//     }, [values])

//     const [loginValues, setLoginValues] = useState({
//         username: '',
//         password: '',
//     });
//     const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);

//     const [loginErrors, setLoginErrors] = useState({});

//     const loginHandleChange = e => {
//         const { name, value } = e.target;
//         setLoginValues({
//             ...values,
//             [name]: value
//         });
//     };

//     const loginHandleSubmit = e => {
//         e.preventDefault();
//         setLoginErrors(validate(loginValues));
//         setIsLoginSubmitting(true);
//     };

//     useEffect(
//         () => {
//             if (Object.keys(errors).length === 0 && isSubmitting) {
//                 callback();
//             }
//         }, [errors]
//     );

//     return { loginHandleSubmit,loginHandleChange,loginValues,loginErrors,handleChange, handleSubmit, values, errors };
// };

// export default useForm;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////