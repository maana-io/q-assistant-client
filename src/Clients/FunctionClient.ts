// var fnFromKportal = {
//   implementation: {
//     id: '3dfc21f3-c597-48c3-853a-bae212aa2305',
//     offset: {
//       x: 0,
//       y: 0
//     },
//     zoom: 100,
//     nodes: [
//       {
//         id: 'f641e20c-f0a9-42de-b6c2-11ea7a75b4ebINPUT',
//         isCollapsed: [],
//         location: {
//           x: 25,
//           y: 25
//         },
//         type: 'ARGUMENT',
//         entityIdentifier: {}
//       },
//       {
//         id: '430404dc-0282-4f89-88e9-1f2730b4e214OUTPUT',
//         isCollapsed: [],
//         location: {
//           x: 450,
//           y: 25
//         },
//         type: 'ARGUMENT',
//         entityIdentifier: {}
//       }
//     ],
//     connections: []
//   },
//   id: '3dfc21f3-c597-48c3-853a-bae212aa2305',
//   name: 'test1',
//   nameDescriptor: 'New Workspace',
//   description: null,
//   functionType: 'CKG',
//   signature: {
//     function: {
//       arguments: [
//         {
//           id: '92519942-5c5e-4839-8f45-f97fe6c4ebbc',
//           name: 'foo',
//           description: null,
//           type: {
//             nonNullOf: {
//               serviceAndName: {
//                 serviceId: '7eda18da-ccce-45e9-b0eb-3d069d649977',
//                 name: 'Foo'
//               }
//             }
//           }
//         },
//         {
//           id: 'b77028fd-6a62-47d8-8ef7-cf9d72347b0d',
//           name: 'bar',
//           description: null,
//           type: {
//             nonNullOf: {
//               serviceAndName: {
//                 serviceId: '7eda18da-ccce-45e9-b0eb-3d069d649977',
//                 name: 'Bar'
//               }
//             }
//           }
//         }
//       ],
//       resultType: {
//         nonNullOf: {
//           serviceAndName: {
//             serviceId: 'io.maana.core',
//             name: 'String'
//           }
//         }
//       }
//     }
//   },
//   graphqlFunctionType: 'QUERY',
//   isPure: null,
//   service: {
//     id: '7eda18da-ccce-45e9-b0eb-3d069d649977'
//   },
//   lock: null,
//   inputMask: [
//     {
//       argument: '92519942-5c5e-4839-8f45-f97fe6c4ebbc',
//       fieldSelection: []
//     },
//     {
//       argument: 'b77028fd-6a62-47d8-8ef7-cf9d72347b0d',
//       fieldSelection: []
//     }
//   ],
//   type: 'Function',
//   graph: {
//     id: '3dfc21f3-c597-48c3-853a-bae212aa2305',
//     offset: {
//       x: 0,
//       y: 0
//     },
//     zoom: 100,
//     nodes: [
//       {
//         id: 'f641e20c-f0a9-42de-b6c2-11ea7a75b4ebINPUT',
//         isCollapsed: [],
//         location: {
//           x: 25,
//           y: 25
//         },
//         type: 'ARGUMENT',
//         entityIdentifier: {}
//       },
//       {
//         id: '430404dc-0282-4f89-88e9-1f2730b4e214OUTPUT',
//         isCollapsed: [],
//         location: {
//           x: 450,
//           y: 25
//         },
//         type: 'ARGUMENT',
//         entityIdentifier: {}
//       }
//     ],
//     connections: []
//   }
// };

export class FunctionClient {
  signature: unknown;
  async lockedBy() {}
  async canEdit() {}
  async setLocked(isLocked: boolean) {}
  async update(updates: unknown) {}
  updateNodeLayout(nodeId: unknown, updates: unknown) {}
  updateGraphLayout(updates: unknown) {}
  execute(variables: unknown, resolve: unknown) {}
}
