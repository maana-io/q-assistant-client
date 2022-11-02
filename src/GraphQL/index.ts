const fragments = {
  lambdaDetailed: `
    fragment lambdaDetailed on Lambda {
      id
      serviceId
      runtime {
        id
        host
        language
      }
      code
      input {
        name
        kind
        modifiers
      }
      outputKind
      outputModifiers
      kinds {
        name
        fields {
          name
          kind
          modifiers
        }
      }
    }
  `,
  lambdaFields: `
    fragment lambdaFields on Lambda {
      id
      name
      serviceId
      runtime {
        id
        language
      }
      code
      input {
        name
        kind
        modifiers
      }
      outputKind
      outputModifiers
      kinds {
        name
        fields {
          name
          kind
          modifiers
        }
      }
    }
  `,
};

export const LIST_LAMBDAS = `
  query listLambdas($serviceId: ID!) {
    listLambdas(serviceId: $serviceId) {
      ...lambdaDetailed
    }
  }
  ${fragments.lambdaDetailed}
`;

export const GET_LAMBDA = `
  query getLambda($lambdaId: ID!) {
    getLambda(id: $lambdaId) {
      ...lambdaFields
    }
  }
  ${fragments.lambdaFields}
`;

export const CREATE_LAMBDA = `
  mutation createLambda(
    $id: ID!
    $name: String!
    $graphqlOperationType: GraphQLOperationType!
    $serviceId: ID!
    $runtimeId: ID!
    $code: String!
    $input: [FieldInput!]
    $kinds: [KindInput!]
    $outputKind: String!
    $outputModifiers: [Modifier!]
  ) {
    createLambda(
      input: {
        id: $id
        name: $name
        graphQLOperationType: $graphqlOperationType
        serviceId: $serviceId
        runtimeId: $runtimeId
        code: $code
        input: $input
        outputKind: $outputKind
        outputModifiers: $outputModifiers
        kinds: $kinds
      }
    ) {
      id
      name
      serviceId
      runtime {
        id
      }
      code
      input {
        name
        kind
        modifiers
      }
      outputKind
      outputModifiers
      kinds {
        name
        fields {
          name
          kind
          modifiers
        }
      }
    }
  }
`;

export const CREATE_LAMBDAS = `
  mutation createLambdas($inputs: [LambdaInput!]!
  ) {
    createLambdas(
      inputs: $inputs
    ) {
      id
      name
      sequenceNo
      serviceId
      runtime {
        id
        language
        host
      }
      code
      input {
        name
        kind
        modifiers
      }
      graphQLOperationType
      outputKind
      outputModifiers
      kinds {
        name
        fields {
          name
          kind
          modifiers
        }
      }
    }
  }
`;

export const DELETE_LAMBDA = `
  mutation deleteLambda($id: ID!){
    deleteLambda(id: $id)
  }
`;

export const LIST_RUNTIMES = `
  query listRuntimes {
    listRuntimes {
      id
      host
      language
    }
  }
`;
