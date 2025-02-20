import axios from "axios";

// const { isShowModalSuccessful, setIsShowModalSuccessful } = addTabStore();
export const sendFormData = async (formData: {
  name: string;
  email: string;
  company: string;
  message: string;
}) => {
  try {
    const response = await axios.post(
      "https://67b704c52bddacfb270d4c25.mockapi.io/api/contactme/message",
      formData
    );
    console.log("Data sent successfully:", response.data);
    // setIsShowModalSuccessful(true);

    // await sendEmail(formData);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
