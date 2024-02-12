import * as Yup from "yup"


const validationSchema = Yup.object({
    name: Yup.string().min(3).max(15).required("*Required"),
    lastname: Yup.string().min(3).max(15).required("*Required"),
    email: Yup.string().email("Enter Valid Email").required("*Required"),
    message: Yup.string().required("*Required"),
})

export default validationSchema