"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"

export const handleCreateUser = async (formData: FormData) => {
  try {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
      input: {
        ...formDataObject,
        phone: '+52' + formDataObject.phone
      }
    }

    const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate
    console.log(customer)
    console.log(customerUserErrors)
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Authentication error: Please check your credentials.")
    } else {
      console.error("An unexpected error occurred:", error)
    }
  }
}