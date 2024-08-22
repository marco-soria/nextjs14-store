import { gql } from "graphql-request"


export const createUserMutation = gql`
mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
        customer {
            firstName
            lastName
            email
            phone
        }
        userErrors {
            field
            message
        }
    }
}
`