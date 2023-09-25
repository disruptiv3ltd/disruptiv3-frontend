import axios from 'axios'

type FormData = {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
  budget?: string
}

const WORK_INQUIRY_URL =
  'https://5suknmbyc2.execute-api.us-west-2.amazonaws.com/forwardDisruptiv3WorkInquiryToTelegram'

export const sendWorkInquiry = async (formData: FormData) => {
  try {
    return await axios.post(WORK_INQUIRY_URL, formData)
  } catch (error) {
    console.error('Error sending work inquiry!', error)
    throw error
  }
}
