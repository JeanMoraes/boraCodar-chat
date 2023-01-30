import { ref } from "vue"
import chooseRandomResponse from "../utils/choose-random-response"
import { ChatMessageProps } from "./ChatMessage.vue"


export default function useChat() {

const date = new Date()

const messages = ref([
    {
      person: "Cecília",
      time: `${date.getHours().toLocaleString()}: ${date.getMinutes().toLocaleString()}`,
      message: "Tive uma ideia incrível para um projeto! 😍",
      direction: "received",
    }
  ] as ChatMessageProps[])

//   ---------------------------------

const commitMessage = (msg: string) => {
    const date1 = new Date()
    
    const newMessage: ChatMessageProps = {
      person: 'Você',
      time: `${date1.getHours().toLocaleString()}: ${date1.getMinutes().toLocaleString()}`,
      message: msg,
      direction: 'sent'
    }

    messages.value = [...messages.value, newMessage]
    // generate a ramdom response
    generateRandomResponse()
  }

//   ---------------------------------

const generateRandomResponse = () => {
    const date2 = new Date()
    
    const newMessage: ChatMessageProps = {
      person: 'Cecília',
      time: `${date2.getHours().toLocaleString()}: ${date2.getMinutes().toLocaleString()}`,
      message: chooseRandomResponse(),
      direction: 'received'
    }

    setTimeout(
      () => messages.value = [...messages.value, newMessage],
      Math.random() * 2 * 1000 // max to 2 seconds
    )
  }

  return {
    messages,
    commitMessage,
  }

}