**[Maana Q Assistant API Client](README.md)**

> Globals

# Maana Q Assistant API Client

## Index

### Namespaces

* [AssistantAPIClient](modules/assistantapiclient.md)

### Enumerations

* [AggregateOp](enums/aggregateop.md)
* [BotActionStatus](enums/botactionstatus.md)
* [EntityAttribute](enums/entityattribute.md)
* [EntityType](enums/entitytype.md)
* [FieldModifiers](enums/fieldmodifiers.md)
* [FieldType](enums/fieldtype.md)
* [FunctionType](enums/functiontype.md)
* [GraphQLFunctionType](enums/graphqlfunctiontype.md)
* [GraphRefInputType](enums/graphrefinputtype.md)
* [ImplementationType](enums/implementationtype.md)
* [ImplementationTypeInput](enums/implementationtypeinput.md)
* [MaanaErrorCode](enums/maanaerrorcode.md)
* [NodeType](enums/nodetype.md)
* [RenderMode](enums/rendermode.md)
* [Scalars](enums/scalars.md)
* [SearchScope](enums/searchscope.md)
* [ServiceType](enums/servicetype.md)
* [Theme](enums/theme.md)

### Classes

* [CKGClient](classes/ckgclient.md)
* [FunctionClient](classes/functionclient.md)
* [KindClient](classes/kindclient.md)
* [LambdaClient](classes/lambdaclient.md)
* [ServiceClient](classes/serviceclient.md)
* [WorkspaceClient](classes/workspaceclient.md)

### Interfaces

* [Annotation](interfaces/annotation.md)
* [ArgumentFieldSelection](interfaces/argumentfieldselection.md)
* [ArgumentFieldSelectionInput](interfaces/argumentfieldselectioninput.md)
* [ArgumentRef](interfaces/argumentref.md)
* [Assistant](interfaces/assistant.md)
* [AssistantAPIError](interfaces/assistantapierror.md)
* [CloneEntityInput](interfaces/cloneentityinput.md)
* [Connection](interfaces/connection.md)
* [CreateAnnotationInput](interfaces/createannotationinput.md)
* [CreateConnectionInput](interfaces/createconnectioninput.md)
* [CreateEntityInput](interfaces/createentityinput.md)
* [CreateFileInput](interfaces/createfileinput.md)
* [CreateFunctionInput](interfaces/createfunctioninput.md)
* [CreateGraphInput](interfaces/creategraphinput.md)
* [CreateKnowledgeGraphInput](interfaces/createknowledgegraphinput.md)
* [CreateNodeInput](interfaces/createnodeinput.md)
* [CreateServiceInput](interfaces/createserviceinput.md)
* [CreateTypeInput](interfaces/createtypeinput.md)
* [CreateWorkspaceInput](interfaces/createworkspaceinput.md)
* [Entity](interfaces/entity.md)
* [EntityIdentifier](interfaces/entityidentifier.md)
* [EntityInterface](interfaces/entityinterface.md)
* [EntityLockInput](interfaces/entitylockinput.md)
* [ErrorLike](interfaces/errorlike.md)
* [Function](interfaces/function.md)
* [FunctionResultRef](interfaces/functionresultref.md)
* [Graph](interfaces/graph.md)
* [GraphRefInput](interfaces/graphrefinput.md)
* [IConstructLambda](interfaces/iconstructlambda.md)
* [IDObject](interfaces/idobject.md)
* [ILocalWorkspace](interfaces/ilocalworkspace.md)
* [InventoryChanged](interfaces/inventorychanged.md)
* [Kind](interfaces/kind.md)
* [KnowledgeGraph](interfaces/knowledgegraph.md)
* [LambdaField](interfaces/lambdafield.md)
* [LambdaKindInput](interfaces/lambdakindinput.md)
* [LockChangedItem](interfaces/lockchangeditem.md)
* [LockingChanged](interfaces/lockingchanged.md)
* [Node](interfaces/node.md)
* [OperationArgumentRef](interfaces/operationargumentref.md)
* [OperationArgumentRefInput](interfaces/operationargumentrefinput.md)
* [OperationResultRef](interfaces/operationresultref.md)
* [OutputArgumentRef](interfaces/outputargumentref.md)
* [OutputArgumentRefInput](interfaces/outputargumentrefinput.md)
* [Position](interfaces/position.md)
* [PositionInput](interfaces/positioninput.md)
* [QCreateFunctionWithLambdaInput](interfaces/qcreatefunctionwithlambdainput.md)
* [QCreateImplementation](interfaces/qcreateimplementation.md)
* [QCreateLambdaInput](interfaces/qcreatelambdainput.md)
* [QCreateOperation](interfaces/qcreateoperation.md)
* [QCreateOperationArgumentValue](interfaces/qcreateoperationargumentvalue.md)
* [QCurrentSelection](interfaces/qcurrentselection.md)
* [QFunction](interfaces/qfunction.md)
* [QFunctionArgument](interfaces/qfunctionargument.md)
* [QGraphNode](interfaces/qgraphnode.md)
* [QImplementation](interfaces/qimplementation.md)
* [QKind](interfaces/qkind.md)
* [QKnowledgeGraph](interfaces/qknowledgegraph.md)
* [QLambda](interfaces/qlambda.md)
* [QOperation](interfaces/qoperation.md)
* [QOperationArgumentValue](interfaces/qoperationargumentvalue.md)
* [QService](interfaces/qservice.md)
* [QWorkspace](interfaces/qworkspace.md)
* [Schema](interfaces/schema.md)
* [Selected](interfaces/selected.md)
* [Service](interfaces/service.md)
* [ServiceLocation](interfaces/servicelocation.md)
* [UpdateAnnotationInput](interfaces/updateannotationinput.md)
* [UpdateAssistantInput](interfaces/updateassistantinput.md)
* [UpdateEntityInput](interfaces/updateentityinput.md)
* [UpdateExternalGraphQLServiceInput](interfaces/updateexternalgraphqlserviceinput.md)
* [UpdateFileInput](interfaces/updatefileinput.md)
* [UpdateFunctionInput](interfaces/updatefunctioninput.md)
* [UpdateGraphInput](interfaces/updategraphinput.md)
* [UpdateGraphLayoutInput](interfaces/updategraphlayoutinput.md)
* [UpdateKnowledgeGraphInput](interfaces/updateknowledgegraphinput.md)
* [UpdateNodeInput](interfaces/updatenodeinput.md)
* [UpdateNodeLayoutInput](interfaces/updatenodelayoutinput.md)
* [UpdateTypeInput](interfaces/updatetypeinput.md)
* [UpdateWorkspaceInput](interfaces/updateworkspaceinput.md)
* [User](interfaces/user.md)
* [Workspace](interfaces/workspace.md)

### Type aliases

* [Activity](README.md#activity)
* [AddBotActionInput](README.md#addbotactioninput)
* [AddDocumentInput](README.md#adddocumentinput)
* [AddEntitiesInput](README.md#addentitiesinput)
* [AddImageInput](README.md#addimageinput)
* [AddInstanceInput](README.md#addinstanceinput)
* [AddInstanceSetInput](README.md#addinstancesetinput)
* [AddKindInput](README.md#addkindinput)
* [AddLinkInput](README.md#addlinkinput)
* [AddRelationInput](README.md#addrelationinput)
* [AddServiceSourceInput](README.md#addservicesourceinput)
* [AllReferencedServicesInput](README.md#allreferencedservicesinput)
* [ArgumentNode](README.md#argumentnode)
* [AssistantService](README.md#assistantservice)
* [AssistantState](README.md#assistantstate)
* [AttachmentInput](README.md#attachmentinput)
* [Bot](README.md#bot)
* [BotAction](README.md#botaction)
* [BotActionAddedEvent](README.md#botactionaddedevent)
* [BotActionUpdatedEvent](README.md#botactionupdatedevent)
* [CloneWorkspaceInput](README.md#cloneworkspaceinput)
* [Content](README.md#content)
* [CreateAssistantInput](README.md#createassistantinput)
* [CreateExternalGraphQLServiceInput](README.md#createexternalgraphqlserviceinput)
* [CreateUserInput](README.md#createuserinput)
* [CreateWorkspaceFromSchemaInput](README.md#createworkspacefromschemainput)
* [DeleteEntitiesOutput](README.md#deleteentitiesoutput)
* [DeleteInstanceInput](README.md#deleteinstanceinput)
* [DeleteInstanceSetInput](README.md#deleteinstancesetinput)
* [DetectedFace](README.md#detectedface)
* [DetectedFaceInput](README.md#detectedfaceinput)
* [Document](README.md#document)
* [EntityInput](README.md#entityinput)
* [EntityLock](README.md#entitylock)
* [EntityNode](README.md#entitynode)
* [EntityOccurrences](README.md#entityoccurrences)
* [EntitySearchActionResult](README.md#entitysearchactionresult)
* [EntitySearchInput](README.md#entitysearchinput)
* [EntitySearchResult](README.md#entitysearchresult)
* [EntitySurfaceFormsInput](README.md#entitysurfaceformsinput)
* [EventListenerCallback](README.md#eventlistenercallback)
* [Exact](README.md#exact)
* [ExternalGraphQLService](README.md#externalgraphqlservice)
* [Field](README.md#field)
* [FieldFilterInput](README.md#fieldfilterinput)
* [FieldInput](README.md#fieldinput)
* [FieldProjectionInput](README.md#fieldprojectioninput)
* [FieldValue](README.md#fieldvalue)
* [FieldValueInput](README.md#fieldvalueinput)
* [File](README.md#file)
* [GraphRef](README.md#graphref)
* [GraphqlOperationType](README.md#graphqloperationtype)
* [Image](README.md#image)
* [Implementation](README.md#implementation)
* [Info](README.md#info)
* [Instance](README.md#instance)
* [InstanceIdsByKind](README.md#instanceidsbykind)
* [InstanceRef](README.md#instanceref)
* [InstanceRefInput](README.md#instancerefinput)
* [InstanceSet](README.md#instanceset)
* [InstancelinkedInstancesFromArgs](README.md#instancelinkedinstancesfromargs)
* [InstancelinkedInstancesToArgs](README.md#instancelinkedinstancestoargs)
* [InstancelinkedKindsFromArgs](README.md#instancelinkedkindsfromargs)
* [InstancelinkedKindsToArgs](README.md#instancelinkedkindstoargs)
* [KindQueryInput](README.md#kindqueryinput)
* [KindlinkedInstancesFromArgs](README.md#kindlinkedinstancesfromargs)
* [KindlinkedInstancesToArgs](README.md#kindlinkedinstancestoargs)
* [KindlinkedKindsFromArgs](README.md#kindlinkedkindsfromargs)
* [KindlinkedKindsToArgs](README.md#kindlinkedkindstoargs)
* [KindschemaArgs](README.md#kindschemaargs)
* [Link](README.md#link)
* [LinkedInstance](README.md#linkedinstance)
* [LinkedKind](README.md#linkedkind)
* [LogicService](README.md#logicservice)
* [Maybe](README.md#maybe)
* [ModWorkspacesOutput](README.md#modworkspacesoutput)
* [ModelService](README.md#modelservice)
* [Modifier](README.md#modifier)
* [Mutation](README.md#mutation)
* [MutationaddBotActionArgs](README.md#mutationaddbotactionargs)
* [MutationaddDetectedFacesArgs](README.md#mutationadddetectedfacesargs)
* [MutationaddDocumentArgs](README.md#mutationadddocumentargs)
* [MutationaddDocumentsArgs](README.md#mutationadddocumentsargs)
* [MutationaddEntitiesArgs](README.md#mutationaddentitiesargs)
* [MutationaddImageArgs](README.md#mutationaddimageargs)
* [MutationaddImagesArgs](README.md#mutationaddimagesargs)
* [MutationaddInstanceArgs](README.md#mutationaddinstanceargs)
* [MutationaddInstanceSetArgs](README.md#mutationaddinstancesetargs)
* [MutationaddKindArgs](README.md#mutationaddkindargs)
* [MutationaddKindsArgs](README.md#mutationaddkindsargs)
* [MutationaddLinkArgs](README.md#mutationaddlinkargs)
* [MutationaddLinksArgs](README.md#mutationaddlinksargs)
* [MutationaddRecognizedFacesArgs](README.md#mutationaddrecognizedfacesargs)
* [MutationaddRelationArgs](README.md#mutationaddrelationargs)
* [MutationaddServiceSourceArgs](README.md#mutationaddservicesourceargs)
* [MutationcloneWorkspacesArgs](README.md#mutationcloneworkspacesargs)
* [MutationcreateAssistantsArgs](README.md#mutationcreateassistantsargs)
* [MutationcreateExternalGraphQLServicesArgs](README.md#mutationcreateexternalgraphqlservicesargs)
* [MutationcreateFilesArgs](README.md#mutationcreatefilesargs)
* [MutationcreateUsersArgs](README.md#mutationcreateusersargs)
* [MutationcreateWorkspacesArgs](README.md#mutationcreateworkspacesargs)
* [MutationcreateWorkspacesFromSchemaArgs](README.md#mutationcreateworkspacesfromschemaargs)
* [MutationdeleteDocumentArgs](README.md#mutationdeletedocumentargs)
* [MutationdeleteDocumentsArgs](README.md#mutationdeletedocumentsargs)
* [MutationdeleteFilesArgs](README.md#mutationdeletefilesargs)
* [MutationdeleteInstanceArgs](README.md#mutationdeleteinstanceargs)
* [MutationdeleteInstanceSetArgs](README.md#mutationdeleteinstancesetargs)
* [MutationdeleteKindArgs](README.md#mutationdeletekindargs)
* [MutationdeleteLinksArgs](README.md#mutationdeletelinksargs)
* [MutationdeleteServicesArgs](README.md#mutationdeleteservicesargs)
* [MutationdeleteWorkspacesArgs](README.md#mutationdeleteworkspacesargs)
* [MutationentitySearchActionArgs](README.md#mutationentitysearchactionargs)
* [MutationentitySearchPurgeTemporariesArgs](README.md#mutationentitysearchpurgetemporariesargs)
* [MutationrefreshServicesArgs](README.md#mutationrefreshservicesargs)
* [MutationsubmitFeedbackArgs](README.md#mutationsubmitfeedbackargs)
* [MutationtestServiceConnectionArgs](README.md#mutationtestserviceconnectionargs)
* [MutationupdateAssistantsArgs](README.md#mutationupdateassistantsargs)
* [MutationupdateBotActionArgs](README.md#mutationupdatebotactionargs)
* [MutationupdateExternalGraphQLServicesArgs](README.md#mutationupdateexternalgraphqlservicesargs)
* [MutationupdateFilesArgs](README.md#mutationupdatefilesargs)
* [MutationupdateInstanceArgs](README.md#mutationupdateinstanceargs)
* [MutationupdateKindArgs](README.md#mutationupdatekindargs)
* [MutationupdateKindsArgs](README.md#mutationupdatekindsargs)
* [MutationupdateUsersArgs](README.md#mutationupdateusersargs)
* [MutationupdateWorkspacesArgs](README.md#mutationupdateworkspacesargs)
* [MutationupdateWorkspacesFromSchemaArgs](README.md#mutationupdateworkspacesfromschemaargs)
* [OperationNode](README.md#operationnode)
* [OrderedList](README.md#orderedlist)
* [OrderedListItem](README.md#orderedlistitem)
* [Page](README.md#page)
* [Person](README.md#person)
* [QNodeType](README.md#qnodetype)
* [QUpdateFunctionInput](README.md#qupdatefunctioninput)
* [Query](README.md#query)
* [QueryactivitiesArgs](README.md#queryactivitiesargs)
* [QueryallInstancesArgs](README.md#queryallinstancesargs)
* [QueryallKindsArgs](README.md#queryallkindsargs)
* [QueryallLinksArgs](README.md#queryalllinksargs)
* [QueryallReferencedInstancesArgs](README.md#queryallreferencedinstancesargs)
* [QueryallReferencedKindsArgs](README.md#queryallreferencedkindsargs)
* [QueryallReferencedServicesArgs](README.md#queryallreferencedservicesargs)
* [QueryallRelationsArgs](README.md#queryallrelationsargs)
* [QueryallServicesArgs](README.md#queryallservicesargs)
* [QueryallUsersArgs](README.md#queryallusersargs)
* [QuerybotActionArgs](README.md#querybotactionargs)
* [QuerybotActionsArgs](README.md#querybotactionsargs)
* [QuerybotActionsForServicesOnKindArgs](README.md#querybotactionsforservicesonkindargs)
* [QueryclassificationArgs](README.md#queryclassificationargs)
* [QuerydocumentArgs](README.md#querydocumentargs)
* [QuerydocumentsArgs](README.md#querydocumentsargs)
* [QueryentitySearchArgs](README.md#queryentitysearchargs)
* [QueryentitySearchResultArgs](README.md#queryentitysearchresultargs)
* [QueryfilesArgs](README.md#queryfilesargs)
* [QueryimageArgs](README.md#queryimageargs)
* [QueryimagesArgs](README.md#queryimagesargs)
* [QueryinstanceArgs](README.md#queryinstanceargs)
* [QueryinstanceRefArgs](README.md#queryinstancerefargs)
* [QueryinstancesArgs](README.md#queryinstancesargs)
* [QueryinstancesByRefArgs](README.md#queryinstancesbyrefargs)
* [QuerykindArgs](README.md#querykindargs)
* [QuerykindDBKindQueryArgs](README.md#querykinddbkindqueryargs)
* [QuerykindDBQueryArgs](README.md#querykinddbqueryargs)
* [QuerykindsArgs](README.md#querykindsargs)
* [QuerylinkArgs](README.md#querylinkargs)
* [QuerylinksArgs](README.md#querylinksargs)
* [QuerypopulateInstanceRefArgs](README.md#querypopulateinstancerefargs)
* [QueryrelationArgs](README.md#queryrelationargs)
* [QueryrelationsArgs](README.md#queryrelationsargs)
* [QuerysearchArgs](README.md#querysearchargs)
* [QueryservicesArgs](README.md#queryservicesargs)
* [QueryusersArgs](README.md#queryusersargs)
* [QueryusersByEmailArgs](README.md#queryusersbyemailargs)
* [QueryworkspacesArgs](README.md#queryworkspacesargs)
* [QueryworkspacesFilteredArgs](README.md#queryworkspacesfilteredargs)
* [RecognizedFace](README.md#recognizedface)
* [RecognizedFaceInput](README.md#recognizedfaceinput)
* [Relation](README.md#relation)
* [SearchCriteria](README.md#searchcriteria)
* [SearchResult](README.md#searchresult)
* [SearchResultItem](README.md#searchresultitem)
* [Section](README.md#section)
* [ServiceInfo](README.md#serviceinfo)
* [ServiceRefInput](README.md#servicerefinput)
* [SnackType](README.md#snacktype)
* [Subscription](README.md#subscription)
* [SubscriptionbotActionAddedArgs](README.md#subscriptionbotactionaddedargs)
* [SubscriptionbotActionUpdatedArgs](README.md#subscriptionbotactionupdatedargs)
* [SubscriptionlinkAddedArgs](README.md#subscriptionlinkaddedargs)
* [Table](README.md#table)
* [TestConnectionInput](README.md#testconnectioninput)
* [Type](README.md#type)
* [TypeExpressionObject](README.md#typeexpressionobject)
* [UnknownFunction](README.md#unknownfunction)
* [UnorderedList](README.md#unorderedlist)
* [UnorderedListItem](README.md#unorderedlistitem)
* [UntypedObject](README.md#untypedobject)
* [UpdateBotActionInput](README.md#updatebotactioninput)
* [UpdateInstanceInput](README.md#updateinstanceinput)
* [UpdateKindInput](README.md#updatekindinput)
* [UpdateUserInput](README.md#updateuserinput)
* [UpdateWorkspaceFromSchemaInput](README.md#updateworkspacefromschemainput)
* [UrlLocation](README.md#urllocation)
* [WorkspaceFilterInput](README.md#workspacefilterinput)
* [WorkspaceRefInput](README.md#workspacerefinput)

### Variables

* [CORE\_SERVICE\_ID](README.md#core_service_id)
* [CREATE\_LAMBDA](README.md#create_lambda)
* [CREATE\_LAMBDAS](README.md#create_lambdas)
* [DELETE\_LAMBDA](README.md#delete_lambda)
* [GET\_LAMBDA](README.md#get_lambda)
* [LAMBDA\_SERVICE\_ID\_POSTFIX](README.md#lambda_service_id_postfix)
* [LIST\_LAMBDAS](README.md#list_lambdas)
* [LIST\_RUNTIMES](README.md#list_runtimes)

### Functions

* [createFunctionWithLambda](README.md#createfunctionwithlambda)
* [ensureWSContainsRefreshedLambdaSvc](README.md#ensurewscontainsrefreshedlambdasvc)
* [getLambdaArgumentValues](README.md#getlambdaargumentvalues)
* [implementFunctionWithLambda](README.md#implementfunctionwithlambda)
* [makeCreateLambdaInput](README.md#makecreatelambdainput)
* [recursivelyRemoveKey](README.md#recursivelyremovekey)
* [recursivelyRemoveKeys](README.md#recursivelyremovekeys)

### Object literals

* [fragments](README.md#fragments)

## Type aliases

### Activity

Ƭ  **Activity**: { __typename: \"Activity\" ; author: [User](interfaces/user.md) ; detail?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; timestamp: Scalars[\"DateTime\"]  }

*Defined in types/all-types.ts:27*

Activity type - gives the ability to have activities on the home page

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`__typename` | \"Activity\" | - |
`author` | [User](interfaces/user.md) | Author of the activity |
`detail?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> | Content of the activity |
`id` | Scalars[\"ID\"] | ID of the activity |
`name` | Scalars[\"String\"] | Name of the activity |
`timestamp` | Scalars[\"DateTime\"] | Date/time the activity was made |

___

### AddBotActionInput

Ƭ  **AddBotActionInput**: { botId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; eventName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; inputInstanceRef?: [Maybe](README.md#maybe)\<[InstanceRefInput](README.md#instancerefinput)> ; kindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; mutationName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; outputInstanceRef?: [Maybe](README.md#maybe)\<[InstanceRefInput](README.md#instancerefinput)> ; queryName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; serviceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; serviceName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:41*

#### Type declaration:

Name | Type |
------ | ------ |
`botId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`eventName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`inputInstanceRef?` | [Maybe](README.md#maybe)\<[InstanceRefInput](README.md#instancerefinput)> |
`kindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`mutationName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`outputInstanceRef?` | [Maybe](README.md#maybe)\<[InstanceRefInput](README.md#instancerefinput)> |
`queryName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`serviceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`serviceName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### AddDocumentInput

Ƭ  **AddDocumentInput**: { content?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; pages?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; sections?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; text?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; xhtml?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:54*

#### Type declaration:

Name | Type |
------ | ------ |
`content?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`pages?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`sections?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`text?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`xhtml?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### AddEntitiesInput

Ƭ  **AddEntitiesInput**: { docId: Scalars[\"ID\"] ; entities: Array\<[EntityInput](README.md#entityinput)>  }

*Defined in types/all-types.ts:64*

#### Type declaration:

Name | Type |
------ | ------ |
`docId` | Scalars[\"ID\"] |
`entities` | Array\<[EntityInput](README.md#entityinput)> |

___

### AddImageInput

Ƭ  **AddImageInput**: { id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; url?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:69*

#### Type declaration:

Name | Type |
------ | ------ |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`url?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### AddInstanceInput

Ƭ  **AddInstanceInput**: { fieldIds: Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> ; fieldValues: Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:75*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldIds` | Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> |
`fieldValues` | Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindId` | Scalars[\"ID\"] |

___

### AddInstanceSetInput

Ƭ  **AddInstanceSetInput**: { fieldIds: Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> ; ids?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; kindId: Scalars[\"ID\"] ; records: Array\<[Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>>>>  }

*Defined in types/all-types.ts:82*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldIds` | Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> |
`ids?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`kindId` | Scalars[\"ID\"] |
`records` | Array\<[Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>>>> |

___

### AddKindInput

Ƭ  **AddKindInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; isManaged?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isPublic?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isSystem?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; name: Scalars[\"String\"] ; nameField?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; schema?: [Maybe](README.md#maybe)\<Array\<[FieldInput](README.md#fieldinput)>> ; serviceId: Scalars[\"ID\"] ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:89*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`isManaged?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isPublic?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isSystem?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`name` | Scalars[\"String\"] |
`nameField?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`schema?` | [Maybe](README.md#maybe)\<Array\<[FieldInput](README.md#fieldinput)>> |
`serviceId` | Scalars[\"ID\"] |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### AddLinkInput

Ƭ  **AddLinkInput**: { fromFieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fromFieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; fromInstanceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fromKindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fromKindName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; fromOffset?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; fromSpan?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; relationId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; relationName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; toFieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; toFieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; toInstanceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; toKindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; toKindName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; toOffset?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; toSpan?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; weight?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]>  }

*Defined in types/all-types.ts:102*

#### Type declaration:

Name | Type |
------ | ------ |
`fromFieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fromFieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`fromInstanceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fromKindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fromKindName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`fromOffset?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`fromSpan?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`relationId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`relationName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`toFieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`toFieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`toInstanceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`toKindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`toKindName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`toOffset?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`toSpan?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`weight?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |

___

### AddRelationInput

Ƭ  **AddRelationInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; inverseName: Scalars[\"String\"] ; name: Scalars[\"String\"] ; undirected?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; weight?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]>  }

*Defined in types/all-types.ts:124*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`inverseName` | Scalars[\"String\"] |
`name` | Scalars[\"String\"] |
`undirected?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`weight?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |

___

### AddServiceSourceInput

Ƭ  **AddServiceSourceInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; schema: Scalars[\"String\"]  }

*Defined in types/all-types.ts:133*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`schema` | Scalars[\"String\"] |

___

### AllReferencedServicesInput

Ƭ  **AllReferencedServicesInput**: { entities: Array\<Scalars[\"EntityIdentifier\"]> ; entitiesToSkip?: [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> ; maxDepth?: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:151*

AllReferencedServices input - The input information for the all references
services query.

#### Type declaration:

Name | Type |
------ | ------ |
`entities` | Array\<Scalars[\"EntityIdentifier\"]> |
`entitiesToSkip?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> |
`maxDepth?` | Scalars[\"Int\"] |

___

### ArgumentNode

Ƭ  **ArgumentNode**: Node & { __typename: \"ArgumentNode\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; isCollapsed: Array\<Scalars[\"String\"]> ; location?: [Maybe](README.md#maybe)\<[Position](interfaces/position.md)>  }

*Defined in types/all-types.ts:178*

___

### AssistantService

Ƭ  **AssistantService**: Service & { __typename: \"AssistantService\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; location: ServiceLocation ; name: Scalars[\"String\"] ; tags: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; version?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:193*

AssistantService type - Based on the one from Catalog

___

### AssistantState

Ƭ  **AssistantState**: \"WORKING\" \| \"IDLE\"

*Defined in Clients/AssistantAPIClient/constants.ts:4*

The different states that the assistant can be in.

___

### AttachmentInput

Ƭ  **AttachmentInput**: { content: Scalars[\"String\"] ; contentType: Scalars[\"String\"] ; filename: Scalars[\"String\"]  }

*Defined in types/all-types.ts:205*

Attachment Input - information about attachments added to user feedback.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`content` | Scalars[\"String\"] | The contexts of the file in a base64 string. |
`contentType` | Scalars[\"String\"] | The type of file that is being attached. (jpg, png, gif, etc...) |
`filename` | Scalars[\"String\"] | The name of the file attached. |

___

### Bot

Ƭ  **Bot**: { __typename: \"Bot\" ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; service?: [Maybe](README.md#maybe)\<Service>  }

*Defined in types/all-types.ts:214*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Bot\" |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |
`service?` | [Maybe](README.md#maybe)\<Service> |

___

### BotAction

Ƭ  **BotAction**: { __typename: \"BotAction\" ; bot?: [Maybe](README.md#maybe)\<[Bot](README.md#bot)> ; created: Scalars[\"DateTime\"] ; errors?: [Maybe](README.md#maybe)\<Array\<Scalars[\"JSON\"]>> ; eventName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; function?: [Maybe](README.md#maybe)\<[Function](interfaces/function.md)> ; id: Scalars[\"ID\"] ; input?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; lastUpdated: Scalars[\"DateTime\"] ; name: Scalars[\"String\"] ; output?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; progress?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]> ; service: Service ; status: [BotActionStatus](enums/botactionstatus.md)  }

*Defined in types/all-types.ts:221*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"BotAction\" |
`bot?` | [Maybe](README.md#maybe)\<[Bot](README.md#bot)> |
`created` | Scalars[\"DateTime\"] |
`errors?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"JSON\"]>> |
`eventName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`function?` | [Maybe](README.md#maybe)\<[Function](interfaces/function.md)> |
`id` | Scalars[\"ID\"] |
`input?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`lastUpdated` | Scalars[\"DateTime\"] |
`name` | Scalars[\"String\"] |
`output?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> |
`progress?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |
`service` | Service |
`status` | [BotActionStatus](enums/botactionstatus.md) |

___

### BotActionAddedEvent

Ƭ  **BotActionAddedEvent**: { __typename: \"BotActionAddedEvent\" ; bot?: [Maybe](README.md#maybe)\<[Bot](README.md#bot)> ; eventName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; inputInstanceRef?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; mutationName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name: Scalars[\"String\"] ; outputInstanceRef?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; queryName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; serviceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; serviceName: Scalars[\"String\"]  }

*Defined in types/all-types.ts:239*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"BotActionAddedEvent\" |
`bot?` | [Maybe](README.md#maybe)\<[Bot](README.md#bot)> |
`eventName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`inputInstanceRef?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`mutationName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`name` | Scalars[\"String\"] |
`outputInstanceRef?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> |
`queryName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`serviceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`serviceName` | Scalars[\"String\"] |

___

### BotActionUpdatedEvent

Ƭ  **BotActionUpdatedEvent**: { __typename: \"BotActionUpdatedEvent\" ; bot?: [Maybe](README.md#maybe)\<[Bot](README.md#bot)> ; errors?: [Maybe](README.md#maybe)\<Array\<Scalars[\"JSON\"]>> ; id: Scalars[\"ID\"] ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; newStatus: [BotActionStatus](enums/botactionstatus.md) ; oldStatus: [BotActionStatus](enums/botactionstatus.md) ; progress?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]> ; service?: [Maybe](README.md#maybe)\<Service>  }

*Defined in types/all-types.ts:263*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"BotActionUpdatedEvent\" |
`bot?` | [Maybe](README.md#maybe)\<[Bot](README.md#bot)> |
`errors?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"JSON\"]>> |
`id` | Scalars[\"ID\"] |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`newStatus` | [BotActionStatus](enums/botactionstatus.md) |
`oldStatus` | [BotActionStatus](enums/botactionstatus.md) |
`progress?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |
`service?` | [Maybe](README.md#maybe)\<Service> |

___

### CloneWorkspaceInput

Ƭ  **CloneWorkspaceInput**: { newId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; newName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; newOwner: Scalars[\"ID\"] ; newServiceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; oldId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:286*

#### Type declaration:

Name | Type |
------ | ------ |
`newId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`newName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`newOwner` | Scalars[\"ID\"] |
`newServiceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`oldId` | Scalars[\"ID\"] |

___

### Content

Ƭ  **Content**: { __typename: \"Content\" ; id: Scalars[\"ID\"] ; image?: [Maybe](README.md#maybe)\<[Image](README.md#image)> ; orderedList?: [Maybe](README.md#maybe)\<[OrderedList](README.md#orderedlist)> ; table?: [Maybe](README.md#maybe)\<[Table](README.md#table)> ; text?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; unorderedList?: [Maybe](README.md#maybe)\<[UnorderedList](README.md#unorderedlist)>  }

*Defined in types/all-types.ts:304*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Content\" |
`id` | Scalars[\"ID\"] |
`image?` | [Maybe](README.md#maybe)\<[Image](README.md#image)> |
`orderedList?` | [Maybe](README.md#maybe)\<[OrderedList](README.md#orderedlist)> |
`table?` | [Maybe](README.md#maybe)\<[Table](README.md#table)> |
`text?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`unorderedList?` | [Maybe](README.md#maybe)\<[UnorderedList](README.md#unorderedlist)> |

___

### CreateAssistantInput

Ƭ  **CreateAssistantInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; endpointUrl: Scalars[\"String\"] ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; isReadOnly?: Scalars[\"Boolean\"] ; isSystem?: Scalars[\"Boolean\"] ; name: Scalars[\"String\"] ; tags?: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:322*

CreateAssistantInput input - Based on the one from Catalog

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`endpointUrl` | Scalars[\"String\"] |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`isReadOnly?` | Scalars[\"Boolean\"] |
`isSystem?` | Scalars[\"Boolean\"] |
`name` | Scalars[\"String\"] |
`tags?` | Array\<Scalars[\"String\"]> |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### CreateExternalGraphQLServiceInput

Ƭ  **CreateExternalGraphQLServiceInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; endpointUrl: Scalars[\"String\"] ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; isReadOnly?: Scalars[\"Boolean\"] ; isSystem?: Scalars[\"Boolean\"] ; name: Scalars[\"String\"] ; tags?: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:350*

CreateExternalGraphQLServiceInput input - Based on the one from Catalog

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`endpointUrl` | Scalars[\"String\"] |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`isReadOnly?` | Scalars[\"Boolean\"] |
`isSystem?` | Scalars[\"Boolean\"] |
`name` | Scalars[\"String\"] |
`tags?` | Array\<Scalars[\"String\"]> |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### CreateUserInput

Ƭ  **CreateUserInput**: { email: Scalars[\"String\"] ; familyName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; givenName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name: Scalars[\"String\"] ; picture?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; theme: [Theme](enums/theme.md)  }

*Defined in types/all-types.ts:443*

CreateUser input - used to create a new User

#### Type declaration:

Name | Type |
------ | ------ |
`email` | Scalars[\"String\"] |
`familyName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`givenName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`name` | Scalars[\"String\"] |
`picture?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`theme` | [Theme](enums/theme.md) |

___

### CreateWorkspaceFromSchemaInput

Ƭ  **CreateWorkspaceFromSchemaInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; isPublic?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isTemplate?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; name: Scalars[\"String\"] ; owner: Scalars[\"ID\"] ; schema: Scalars[\"String\"] ; serviceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; tags?: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:452*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`isPublic?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isTemplate?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`name` | Scalars[\"String\"] |
`owner` | Scalars[\"ID\"] |
`schema` | Scalars[\"String\"] |
`serviceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`tags?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### DeleteEntitiesOutput

Ƭ  **DeleteEntitiesOutput**: { __typename: \"DeleteEntitiesOutput\" ; deletedAnnotations: Array\<Scalars[\"ID\"]> ; deletedFiles: Array\<Scalars[\"ID\"]> ; deletedFunctions: Array\<Scalars[\"ID\"]> ; deletedGraphNodes: Array\<Scalars[\"ID\"]> ; deletedKnowledgeGraphs: Array\<Scalars[\"ID\"]> ; deletedServices: Array\<Scalars[\"ID\"]> ; deletedTypes: Array\<Scalars[\"ID\"]> ; deletedWorkspaces: Array\<Scalars[\"ID\"]> ; updatedFunctions: Array\<[Function](interfaces/function.md)> ; updatedKnowledgeGraphs: Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> ; updatedUsers: Array\<[User](interfaces/user.md)> ; updatedWorkspaces: Array\<[Workspace](interfaces/workspace.md)>  }

*Defined in types/all-types.ts:485*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"DeleteEntitiesOutput\" |
`deletedAnnotations` | Array\<Scalars[\"ID\"]> |
`deletedFiles` | Array\<Scalars[\"ID\"]> |
`deletedFunctions` | Array\<Scalars[\"ID\"]> |
`deletedGraphNodes` | Array\<Scalars[\"ID\"]> |
`deletedKnowledgeGraphs` | Array\<Scalars[\"ID\"]> |
`deletedServices` | Array\<Scalars[\"ID\"]> |
`deletedTypes` | Array\<Scalars[\"ID\"]> |
`deletedWorkspaces` | Array\<Scalars[\"ID\"]> |
`updatedFunctions` | Array\<[Function](interfaces/function.md)> |
`updatedKnowledgeGraphs` | Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> |
`updatedUsers` | Array\<[User](interfaces/user.md)> |
`updatedWorkspaces` | Array\<[Workspace](interfaces/workspace.md)> |

___

### DeleteInstanceInput

Ƭ  **DeleteInstanceInput**: { id: Scalars[\"ID\"] ; kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:501*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`kindId` | Scalars[\"ID\"] |

___

### DeleteInstanceSetInput

Ƭ  **DeleteInstanceSetInput**: { ids: Array\<Scalars[\"ID\"]> ; kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:506*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |
`kindId` | Scalars[\"ID\"] |

___

### DetectedFace

Ƭ  **DetectedFace**: { __typename: \"DetectedFace\" ; area: Scalars[\"Int\"] ; bottom: Scalars[\"Int\"] ; detectionConfidence: Scalars[\"Float\"] ; id: Scalars[\"ID\"] ; image: [Image](README.md#image) ; left: Scalars[\"Int\"] ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; right: Scalars[\"Int\"] ; top: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:511*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"DetectedFace\" |
`area` | Scalars[\"Int\"] |
`bottom` | Scalars[\"Int\"] |
`detectionConfidence` | Scalars[\"Float\"] |
`id` | Scalars[\"ID\"] |
`image` | [Image](README.md#image) |
`left` | Scalars[\"Int\"] |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`right` | Scalars[\"Int\"] |
`top` | Scalars[\"Int\"] |

___

### DetectedFaceInput

Ƭ  **DetectedFaceInput**: { area: Scalars[\"Int\"] ; bottom: Scalars[\"Int\"] ; detectionConfidence: Scalars[\"Float\"] ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; imageId: Scalars[\"ID\"] ; left: Scalars[\"Int\"] ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; right: Scalars[\"Int\"] ; top: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:524*

#### Type declaration:

Name | Type |
------ | ------ |
`area` | Scalars[\"Int\"] |
`bottom` | Scalars[\"Int\"] |
`detectionConfidence` | Scalars[\"Float\"] |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`imageId` | Scalars[\"ID\"] |
`left` | Scalars[\"Int\"] |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`right` | Scalars[\"Int\"] |
`top` | Scalars[\"Int\"] |

___

### Document

Ƭ  **Document**: { __typename: \"Document\" ; content?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; pages?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Page](README.md#page)>>> ; sections?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Section](README.md#section)>>> ; text?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; xhtml?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:536*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Document\" |
`content?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |
`pages?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Page](README.md#page)>>> |
`sections?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Section](README.md#section)>>> |
`text?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`xhtml?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### EntityInput

Ƭ  **EntityInput**: { class?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; count?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; percent?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]>  }

*Defined in types/all-types.ts:565*

#### Type declaration:

Name | Type |
------ | ------ |
`class?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`count?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`percent?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |

___

### EntityLock

Ƭ  **EntityLock**: { __typename: \"EntityLock\" ; lockedBy: [User](interfaces/user.md)  }

*Defined in types/all-types.ts:593*

EntityLock type - Defines the information about a lock on a specific entity.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`__typename` | \"EntityLock\" | - |
`lockedBy` | [User](interfaces/user.md) | The user who locked the entity. |

___

### EntityNode

Ƭ  **EntityNode**: Node & { __typename: \"EntityNode\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; entityIdentifier: Scalars[\"EntityIdentifier\"] ; id: Scalars[\"ID\"] ; isCollapsed: Array\<Scalars[\"String\"]> ; location?: [Maybe](README.md#maybe)\<[Position](interfaces/position.md)>  }

*Defined in types/all-types.ts:605*

___

### EntityOccurrences

Ƭ  **EntityOccurrences**: { __typename: \"EntityOccurrences\" ; instanceId?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; kindId: Scalars[\"ID\"] ; locations: Array\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:615*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"EntityOccurrences\" |
`instanceId?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`kindId` | Scalars[\"ID\"] |
`locations` | Array\<Scalars[\"Int\"]> |

___

### EntitySearchActionResult

Ƭ  **EntitySearchActionResult**: { __typename: \"EntitySearchActionResult\" ; results?: [Maybe](README.md#maybe)\<Array\<[EntitySearchResult](README.md#entitysearchresult)>> ; token?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:622*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"EntitySearchActionResult\" |
`results?` | [Maybe](README.md#maybe)\<Array\<[EntitySearchResult](README.md#entitysearchresult)>> |
`token?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### EntitySearchInput

Ƭ  **EntitySearchInput**: { entitySurfaceForms: Array\<[EntitySurfaceFormsInput](README.md#entitysurfaceformsinput)> ; scopeFieldId: Scalars[\"ID\"] ; scopeInstanceId?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; scopeKindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:628*

#### Type declaration:

Name | Type |
------ | ------ |
`entitySurfaceForms` | Array\<[EntitySurfaceFormsInput](README.md#entitysurfaceformsinput)> |
`scopeFieldId` | Scalars[\"ID\"] |
`scopeInstanceId?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`scopeKindId` | Scalars[\"ID\"] |

___

### EntitySearchResult

Ƭ  **EntitySearchResult**: { __typename: \"EntitySearchResult\" ; cooccurrences: Array\<[EntityOccurrences](README.md#entityoccurrences)> ; scopeFieldId: Scalars[\"ID\"] ; scopeInstanceId: Scalars[\"ID\"] ; scopeKindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:635*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"EntitySearchResult\" |
`cooccurrences` | Array\<[EntityOccurrences](README.md#entityoccurrences)> |
`scopeFieldId` | Scalars[\"ID\"] |
`scopeInstanceId` | Scalars[\"ID\"] |
`scopeKindId` | Scalars[\"ID\"] |

___

### EntitySurfaceFormsInput

Ƭ  **EntitySurfaceFormsInput**: { instanceId?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; kindId: Scalars[\"ID\"] ; surfaceForms?: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>>  }

*Defined in types/all-types.ts:643*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceId?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`kindId` | Scalars[\"ID\"] |
`surfaceForms?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> |

___

### EventListenerCallback

Ƭ  **EventListenerCallback**: (e: any) => void

*Defined in Clients/AssistantAPIClient/AssistantAPIClient.ts:42*

___

### Exact

Ƭ  **Exact**\<T>: {}

*Defined in types/all-types.ts:7*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | { [key:string]: unknown;  } |

___

### ExternalGraphQLService

Ƭ  **ExternalGraphQLService**: Service & { __typename: \"ExternalGraphQLService\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; functions: Array\<[Function](interfaces/function.md)> ; graphqlSchema: Scalars[\"String\"] ; id: Scalars[\"ID\"] ; location: ServiceLocation ; name: Scalars[\"String\"] ; tags: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; types: Array\<[Type](README.md#type)> ; version?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:661*

ExternalGraphQLService type - Based on the one from Catalog

___

### Field

Ƭ  **Field**: { __typename: \"Field\" ; autoFocus?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; displayAs?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> ; hide?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; id: Scalars[\"ID\"] ; isDeleted: Scalars[\"Boolean\"] ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; modifiers?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldModifiers](enums/fieldmodifiers.md)>>> ; name: Scalars[\"String\"] ; readonly?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; type: [FieldType](enums/fieldtype.md) ; typeKindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:675*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Field\" |
`autoFocus?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`displayAs?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> |
`hide?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`id` | Scalars[\"ID\"] |
`isDeleted` | Scalars[\"Boolean\"] |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`modifiers?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldModifiers](enums/fieldmodifiers.md)>>> |
`name` | Scalars[\"String\"] |
`readonly?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`type` | [FieldType](enums/fieldtype.md) |
`typeKindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### FieldFilterInput

Ƭ  **FieldFilterInput**: { fieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; op: Scalars[\"String\"] ; value: [FieldValueInput](README.md#fieldvalueinput)  }

*Defined in types/all-types.ts:691*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`op` | Scalars[\"String\"] |
`value` | [FieldValueInput](README.md#fieldvalueinput) |

___

### FieldInput

Ƭ  **FieldInput**: { autoFocus?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; displayAs?: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> ; hide?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; modifiers?: [Maybe](README.md#maybe)\<Array\<[FieldModifiers](enums/fieldmodifiers.md)>> ; name: Scalars[\"String\"] ; readonly?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; type: [FieldType](enums/fieldtype.md) ; typeKindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:698*

#### Type declaration:

Name | Type |
------ | ------ |
`autoFocus?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`displayAs?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> |
`hide?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`modifiers?` | [Maybe](README.md#maybe)\<Array\<[FieldModifiers](enums/fieldmodifiers.md)>> |
`name` | Scalars[\"String\"] |
`readonly?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`type` | [FieldType](enums/fieldtype.md) |
`typeKindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### FieldProjectionInput

Ƭ  **FieldProjectionInput**: { alias?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; fieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; op?: [Maybe](README.md#maybe)\<[AggregateOp](enums/aggregateop.md)>  }

*Defined in types/all-types.ts:719*

#### Type declaration:

Name | Type |
------ | ------ |
`alias?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`fieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`op?` | [Maybe](README.md#maybe)\<[AggregateOp](enums/aggregateop.md)> |

___

### FieldValue

Ƭ  **FieldValue**: { BOOLEAN?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; DATE?: [Maybe](README.md#maybe)\<Scalars[\"Date\"]> ; DATETIME?: [Maybe](README.md#maybe)\<Scalars[\"DateTime\"]> ; FLOAT?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]> ; ID?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; INT?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; JSON?: [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> ; KIND?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; STRING?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; TIME?: [Maybe](README.md#maybe)\<Scalars[\"Time\"]> ; __typename: \"FieldValue\" ; l_BOOLEAN?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Boolean\"]>>> ; l_DATE?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Date\"]>>> ; l_DATETIME?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"DateTime\"]>>> ; l_FLOAT?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Float\"]>>> ; l_ID?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; l_INT?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Int\"]>>> ; l_JSON?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"JSON\"]>>> ; l_KIND?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; l_STRING?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> ; l_TIME?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Time\"]>>>  }

*Defined in types/all-types.ts:739*

#### Type declaration:

Name | Type |
------ | ------ |
`BOOLEAN?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`DATE?` | [Maybe](README.md#maybe)\<Scalars[\"Date\"]> |
`DATETIME?` | [Maybe](README.md#maybe)\<Scalars[\"DateTime\"]> |
`FLOAT?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |
`ID?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`INT?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`JSON?` | [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> |
`KIND?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`STRING?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`TIME?` | [Maybe](README.md#maybe)\<Scalars[\"Time\"]> |
`__typename` | \"FieldValue\" |
`l_BOOLEAN?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Boolean\"]>>> |
`l_DATE?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Date\"]>>> |
`l_DATETIME?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"DateTime\"]>>> |
`l_FLOAT?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Float\"]>>> |
`l_ID?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`l_INT?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Int\"]>>> |
`l_JSON?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"JSON\"]>>> |
`l_KIND?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`l_STRING?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> |
`l_TIME?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Time\"]>>> |

___

### FieldValueInput

Ƭ  **FieldValueInput**: { BOOLEAN?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; DATE?: [Maybe](README.md#maybe)\<Scalars[\"Date\"]> ; DATETIME?: [Maybe](README.md#maybe)\<Scalars[\"DateTime\"]> ; FLOAT?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]> ; ID?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; INT?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; JSON?: [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> ; KIND?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; STRING?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; TIME?: [Maybe](README.md#maybe)\<Scalars[\"Time\"]> ; l_BOOLEAN?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Boolean\"]>>> ; l_DATE?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Date\"]>>> ; l_DATETIME?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"DateTime\"]>>> ; l_FLOAT?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Float\"]>>> ; l_ID?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; l_INT?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Int\"]>>> ; l_JSON?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"JSON\"]>>> ; l_KIND?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; l_STRING?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> ; l_TIME?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Time\"]>>>  }

*Defined in types/all-types.ts:763*

#### Type declaration:

Name | Type |
------ | ------ |
`BOOLEAN?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`DATE?` | [Maybe](README.md#maybe)\<Scalars[\"Date\"]> |
`DATETIME?` | [Maybe](README.md#maybe)\<Scalars[\"DateTime\"]> |
`FLOAT?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |
`ID?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`INT?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`JSON?` | [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> |
`KIND?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`STRING?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`TIME?` | [Maybe](README.md#maybe)\<Scalars[\"Time\"]> |
`l_BOOLEAN?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Boolean\"]>>> |
`l_DATE?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Date\"]>>> |
`l_DATETIME?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"DateTime\"]>>> |
`l_FLOAT?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Float\"]>>> |
`l_ID?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`l_INT?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Int\"]>>> |
`l_JSON?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"JSON\"]>>> |
`l_KIND?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`l_STRING?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"String\"]>>> |
`l_TIME?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"Time\"]>>> |

___

### File

Ƭ  **File**: [EntityInterface](interfaces/entityinterface.md) & { __typename: \"File\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; mimeType?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name: Scalars[\"String\"] ; nameDescriptor?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; progress?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; serviceId: Scalars[\"ID\"] ; size: Scalars[\"Int\"] ; status: Scalars[\"Int\"] ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; url: Scalars[\"String\"]  }

*Defined in types/all-types.ts:787*

File type - handles files within the UI

___

### GraphRef

Ƭ  **GraphRef**: [ArgumentRef](interfaces/argumentref.md) \| [OperationArgumentRef](interfaces/operationargumentref.md) \| [FunctionResultRef](interfaces/functionresultref.md) \| [OperationResultRef](interfaces/operationresultref.md) \| [OutputArgumentRef](interfaces/outputargumentref.md)

*Defined in Clients/AssistantAPIClient/models.ts:120*

*Defined in types/all-types.ts:882*

Info for one end of a connection between two items within the graph.
GraphRef union - info for one end of a connection between two items within the
graph.

___

### GraphqlOperationType

Ƭ  **GraphqlOperationType**: \"QUERY\" \| \"MUTATION\"

*Defined in [types/index.ts:31](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L31)*

___

### Image

Ƭ  **Image**: { __typename: \"Image\" ; detectedFaces?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[DetectedFace](README.md#detectedface)>>> ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; people?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Person](README.md#person)>>> ; recognizedFaces?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[RecognizedFace](README.md#recognizedface)>>> ; url?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:905*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Image\" |
`detectedFaces?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[DetectedFace](README.md#detectedface)>>> |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |
`people?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Person](README.md#person)>>> |
`recognizedFaces?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[RecognizedFace](README.md#recognizedface)>>> |
`url?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### Implementation

Ƭ  **Implementation**: [Graph](interfaces/graph.md)

*Defined in Clients/AssistantAPIClient/models.ts:284*

*Defined in types/all-types.ts:916*

Function implementation union.
The union that defines the

___

### Info

Ƭ  **Info**: { __typename: \"Info\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"]  }

*Defined in types/all-types.ts:927*

Info type - basic information about the service.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`__typename` | \"Info\" | - |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> | Description of the service |
`id` | Scalars[\"ID\"] | ID of the service |
`name` | Scalars[\"String\"] | Name of the service |

___

### Instance

Ƭ  **Instance**: { __typename: \"Instance\" ; fieldIds?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; fieldValues?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValue](README.md#fieldvalue)>>> ; id: Scalars[\"ID\"] ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; kindId: Scalars[\"ID\"] ; linkedInstancesFrom: Array\<[LinkedInstance](README.md#linkedinstance)> ; linkedInstancesTo: Array\<[LinkedInstance](README.md#linkedinstance)> ; linkedKindsFrom: Array\<[LinkedKind](README.md#linkedkind)> ; linkedKindsTo: Array\<[LinkedKind](README.md#linkedkind)> ; linksFrom?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; linksTo?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:937*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Instance\" |
`fieldIds?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`fieldValues?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValue](README.md#fieldvalue)>>> |
`id` | Scalars[\"ID\"] |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`kindId` | Scalars[\"ID\"] |
`linkedInstancesFrom` | Array\<[LinkedInstance](README.md#linkedinstance)> |
`linkedInstancesTo` | Array\<[LinkedInstance](README.md#linkedinstance)> |
`linkedKindsFrom` | Array\<[LinkedKind](README.md#linkedkind)> |
`linkedKindsTo` | Array\<[LinkedKind](README.md#linkedkind)> |
`linksFrom?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> |
`linksTo?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### InstanceIdsByKind

Ƭ  **InstanceIdsByKind**: { instanceIds: Array\<Scalars[\"ID\"]> ; kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:969*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceIds` | Array\<Scalars[\"ID\"]> |
`kindId` | Scalars[\"ID\"] |

___

### InstanceRef

Ƭ  **InstanceRef**: { __typename: \"InstanceRef\" ; id: Scalars[\"ID\"] ; innerFunction?: [Maybe](README.md#maybe)\<[Function](interfaces/function.md)> ; innerKind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; instance?: [Maybe](README.md#maybe)\<[Instance](README.md#instance)> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; kindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; url?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:974*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"InstanceRef\" |
`id` | Scalars[\"ID\"] |
`innerFunction?` | [Maybe](README.md#maybe)\<[Function](interfaces/function.md)> |
`innerKind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`instance?` | [Maybe](README.md#maybe)\<[Instance](README.md#instance)> |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`kindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`url?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### InstanceRefInput

Ƭ  **InstanceRefInput**: { id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; instance?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; url?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:987*

#### Type declaration:

Name | Type |
------ | ------ |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`instance?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`url?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### InstanceSet

Ƭ  **InstanceSet**: { __typename: \"InstanceSet\" ; fieldIds?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; kind: [Kind](interfaces/kind.md) ; kindId: Scalars[\"ID\"] ; records?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValue](README.md#fieldvalue)>>>>> ; token?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:996*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"InstanceSet\" |
`fieldIds?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> |
`kind` | [Kind](interfaces/kind.md) |
`kindId` | Scalars[\"ID\"] |
`records?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldValue](README.md#fieldvalue)>>>>> |
`token?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### InstancelinkedInstancesFromArgs

Ƭ  **InstancelinkedInstancesFromArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:965*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### InstancelinkedInstancesToArgs

Ƭ  **InstancelinkedInstancesToArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:961*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### InstancelinkedKindsFromArgs

Ƭ  **InstancelinkedKindsFromArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:957*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### InstancelinkedKindsToArgs

Ƭ  **InstancelinkedKindsToArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:953*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### KindQueryInput

Ƭ  **KindQueryInput**: { alias?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; and?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[KindQueryInput](README.md#kindqueryinput)>>> ; distinct?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; drop?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; fieldFilters?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldFilterInput](README.md#fieldfilterinput)>>> ; fromFieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; fromFieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; kindId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; or?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[KindQueryInput](README.md#kindqueryinput)>>> ; projection?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldProjectionInput](README.md#fieldprojectioninput)>>> ; take?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; toFieldId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; toFieldName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; token?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1053*

#### Type declaration:

Name | Type |
------ | ------ |
`alias?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`and?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[KindQueryInput](README.md#kindqueryinput)>>> |
`distinct?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`drop?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`fieldFilters?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldFilterInput](README.md#fieldfilterinput)>>> |
`fromFieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`fromFieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`kindId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`or?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[KindQueryInput](README.md#kindqueryinput)>>> |
`projection?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[FieldProjectionInput](README.md#fieldprojectioninput)>>> |
`take?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`toFieldId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`toFieldName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`token?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### KindlinkedInstancesFromArgs

Ƭ  **KindlinkedInstancesFromArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1049*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### KindlinkedInstancesToArgs

Ƭ  **KindlinkedInstancesToArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1045*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### KindlinkedKindsFromArgs

Ƭ  **KindlinkedKindsFromArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1041*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### KindlinkedKindsToArgs

Ƭ  **KindlinkedKindsToArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1037*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### KindschemaArgs

Ƭ  **KindschemaArgs**: { fieldIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; fieldKinds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; fieldNames: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> ; includeDeleted?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]>  }

*Defined in types/all-types.ts:1030*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`fieldKinds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`fieldNames` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> |
`includeDeleted?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |

___

### Link

Ƭ  **Link**: { __typename: \"Link\" ; fromField?: [Maybe](README.md#maybe)\<[Field](README.md#field)> ; fromInstance?: [Maybe](README.md#maybe)\<[Instance](README.md#instance)> ; fromKind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; fromOffset?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; fromSpan?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; relation: [Relation](README.md#relation) ; toField?: [Maybe](README.md#maybe)\<[Field](README.md#field)> ; toInstance?: [Maybe](README.md#maybe)\<[Instance](README.md#instance)> ; toKind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; toOffset?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; toSpan?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; weight?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]>  }

*Defined in types/all-types.ts:1085*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Link\" |
`fromField?` | [Maybe](README.md#maybe)\<[Field](README.md#field)> |
`fromInstance?` | [Maybe](README.md#maybe)\<[Instance](README.md#instance)> |
`fromKind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`fromOffset?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`fromSpan?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`relation` | [Relation](README.md#relation) |
`toField?` | [Maybe](README.md#maybe)\<[Field](README.md#field)> |
`toInstance?` | [Maybe](README.md#maybe)\<[Instance](README.md#instance)> |
`toKind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`toOffset?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`toSpan?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`weight?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |

___

### LinkedInstance

Ƭ  **LinkedInstance**: { __typename: \"LinkedInstance\" ; instance?: [Maybe](README.md#maybe)\<[Instance](README.md#instance)> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; relation: [Relation](README.md#relation)  }

*Defined in types/all-types.ts:1103*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"LinkedInstance\" |
`instance?` | [Maybe](README.md#maybe)\<[Instance](README.md#instance)> |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`relation` | [Relation](README.md#relation) |

___

### LinkedKind

Ƭ  **LinkedKind**: { __typename: \"LinkedKind\" ; field?: [Maybe](README.md#maybe)\<[Field](README.md#field)> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; relation: [Relation](README.md#relation)  }

*Defined in types/all-types.ts:1110*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"LinkedKind\" |
`field?` | [Maybe](README.md#maybe)\<[Field](README.md#field)> |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> |
`relation` | [Relation](README.md#relation) |

___

### LogicService

Ƭ  **LogicService**: Service & { __typename: \"LogicService\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; functions: Array\<[Function](interfaces/function.md)> ; graphqlSchema: Scalars[\"String\"] ; id: Scalars[\"ID\"] ; location: ServiceLocation ; name: Scalars[\"String\"] ; tags: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; types: Array\<[Type](README.md#type)> ; version?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:1118*

LogicService type - Based on the one from Catalog

___

### Maybe

Ƭ  **Maybe**\<T, T>: T \| null

*Defined in Clients/AssistantAPIClient/models.ts:12*

*Defined in types/all-types.ts:6*

#### Type parameters:

Name |
------ |
`T` |
`T` |

___

### ModWorkspacesOutput

Ƭ  **ModWorkspacesOutput**: { __typename: \"ModWorkspacesOutput\" ; addedServices: Array\<Service> ; deletedAnnotations: Array\<Scalars[\"ID\"]> ; deletedFiles: Array\<Scalars[\"ID\"]> ; deletedFunctions: Array\<Scalars[\"ID\"]> ; deletedGraphNodes: Array\<Scalars[\"ID\"]> ; deletedKnowledgeGraphs: Array\<Scalars[\"ID\"]> ; deletedTypes: Array\<Scalars[\"ID\"]> ; newAnnotations: Array\<[Annotation](interfaces/annotation.md)> ; newFiles: Array\<[File](README.md#file)> ; newFunctions: Array\<[Function](interfaces/function.md)> ; newGraphNodes: Array\<Node> ; newKnowledgeGraphs: Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> ; newServices: Array\<Service> ; newTypes: Array\<[Type](README.md#type)> ; newWorkspaces: Array\<[Workspace](interfaces/workspace.md)> ; removedServices: Array\<Scalars[\"ID\"]> ; updatedAnnotations: Array\<[Annotation](interfaces/annotation.md)> ; updatedFiles: Array\<[File](README.md#file)> ; updatedFunctions: Array\<[Function](interfaces/function.md)> ; updatedGraphNodes: Array\<Node> ; updatedKnowledgeGraphs: Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> ; updatedServices: Array\<Service> ; updatedTypes: Array\<[Type](README.md#type)> ; updatedWorkspaces: Array\<[Workspace](interfaces/workspace.md)>  }

*Defined in types/all-types.ts:1147*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"ModWorkspacesOutput\" |
`addedServices` | Array\<Service> |
`deletedAnnotations` | Array\<Scalars[\"ID\"]> |
`deletedFiles` | Array\<Scalars[\"ID\"]> |
`deletedFunctions` | Array\<Scalars[\"ID\"]> |
`deletedGraphNodes` | Array\<Scalars[\"ID\"]> |
`deletedKnowledgeGraphs` | Array\<Scalars[\"ID\"]> |
`deletedTypes` | Array\<Scalars[\"ID\"]> |
`newAnnotations` | Array\<[Annotation](interfaces/annotation.md)> |
`newFiles` | Array\<[File](README.md#file)> |
`newFunctions` | Array\<[Function](interfaces/function.md)> |
`newGraphNodes` | Array\<Node> |
`newKnowledgeGraphs` | Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> |
`newServices` | Array\<Service> |
`newTypes` | Array\<[Type](README.md#type)> |
`newWorkspaces` | Array\<[Workspace](interfaces/workspace.md)> |
`removedServices` | Array\<Scalars[\"ID\"]> |
`updatedAnnotations` | Array\<[Annotation](interfaces/annotation.md)> |
`updatedFiles` | Array\<[File](README.md#file)> |
`updatedFunctions` | Array\<[Function](interfaces/function.md)> |
`updatedGraphNodes` | Array\<Node> |
`updatedKnowledgeGraphs` | Array\<[KnowledgeGraph](interfaces/knowledgegraph.md)> |
`updatedServices` | Array\<Service> |
`updatedTypes` | Array\<[Type](README.md#type)> |
`updatedWorkspaces` | Array\<[Workspace](interfaces/workspace.md)> |

___

### ModelService

Ƭ  **ModelService**: Service & { __typename: \"ModelService\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; functions: Array\<[Function](interfaces/function.md)> ; graphqlSchema: Scalars[\"String\"] ; id: Scalars[\"ID\"] ; location: ServiceLocation ; name: Scalars[\"String\"] ; tags: Array\<Scalars[\"String\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; types: Array\<[Type](README.md#type)> ; version?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:1133*

ModelService type - Based on the one from Catalog

___

### Modifier

Ƭ  **Modifier**: \"NONULL\" \| \"LIST\"

*Defined in [types/index.ts:29](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L29)*

___

### Mutation

Ƭ  **Mutation**: { __typename: \"Mutation\" ; addBotAction: Scalars[\"ID\"] ; addDetectedFaces: Scalars[\"Boolean\"] ; addDocument?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addDocuments?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; addEntities?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; addImage?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addImages?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; addInstance?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addInstanceSet?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; addKind?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addKinds?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; addLink?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addLinks?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; addRecognizedFaces: Scalars[\"Boolean\"] ; addRelation?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; addServiceSource: Scalars[\"ID\"] ; bootstrap: Scalars[\"Boolean\"] ; cloneWorkspaces: [ModWorkspacesOutput](README.md#modworkspacesoutput) ; createAssistants?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> ; createExternalGraphQLServices?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> ; createFiles: Array\<[File](README.md#file)> ; createUsers?: [Maybe](README.md#maybe)\<Array\<[User](interfaces/user.md)>> ; createWorkspaces: [ModWorkspacesOutput](README.md#modworkspacesoutput) ; createWorkspacesFromSchema: [ModWorkspacesOutput](README.md#modworkspacesoutput) ; deleteDocument?: [Maybe](README.md#maybe)\<[Document](README.md#document)> ; deleteDocuments?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Document](README.md#document)>>> ; deleteFiles: [DeleteEntitiesOutput](README.md#deleteentitiesoutput) ; deleteInstance?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; deleteInstanceSet?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> ; deleteKind: [DeleteEntitiesOutput](README.md#deleteentitiesoutput) ; deleteLinks?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; deleteServices?: [Maybe](README.md#maybe)\<[DeleteEntitiesOutput](README.md#deleteentitiesoutput)> ; deleteWorkspaces: [DeleteEntitiesOutput](README.md#deleteentitiesoutput) ; entitySearchAction: [BotAction](README.md#botaction) ; entitySearchPurgeTemporaries: Scalars[\"Boolean\"] ; refreshServices?: [Maybe](README.md#maybe)\<Array\<Service>> ; submitFeedback: Scalars[\"Boolean\"] ; testServiceConnection?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; updateAssistants?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> ; updateBotAction: Scalars[\"ID\"] ; updateExternalGraphQLServices?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> ; updateFiles: Array\<[File](README.md#file)> ; updateInstance?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; updateKind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; updateKinds: Array\<[Kind](interfaces/kind.md)> ; updateUsers?: [Maybe](README.md#maybe)\<Array\<[User](interfaces/user.md)>> ; updateWorkspaces: [ModWorkspacesOutput](README.md#modworkspacesoutput) ; updateWorkspacesFromSchema: [ModWorkspacesOutput](README.md#modworkspacesoutput)  }

*Defined in types/all-types.ts:1175*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`__typename` | \"Mutation\" | - |
`addBotAction` | Scalars[\"ID\"] | - |
`addDetectedFaces` | Scalars[\"Boolean\"] | - |
`addDocument?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addDocuments?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`addEntities?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> | - |
`addImage?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addImages?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`addInstance?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addInstanceSet?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`addKind?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addKinds?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`addLink?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addLinks?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`addRecognizedFaces` | Scalars[\"Boolean\"] | - |
`addRelation?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`addServiceSource` | Scalars[\"ID\"] | **`deprecated`** Deprecated in favor of createWorkspacesFromSchema and updateWorkspacesFromSchema |
`bootstrap` | Scalars[\"Boolean\"] | Bootstrap portal's persistence service |
`cloneWorkspaces` | [ModWorkspacesOutput](README.md#modworkspacesoutput) | - |
`createAssistants?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> | Creates the list of assistant services. |
`createExternalGraphQLServices?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> | Creates the list of external graphql services. |
`createFiles` | Array\<[File](README.md#file)> | Creates new File entites. |
`createUsers?` | [Maybe](README.md#maybe)\<Array\<[User](interfaces/user.md)>> | Creates new users. |
`createWorkspaces` | [ModWorkspacesOutput](README.md#modworkspacesoutput) | - |
`createWorkspacesFromSchema` | [ModWorkspacesOutput](README.md#modworkspacesoutput) | - |
`deleteDocument?` | [Maybe](README.md#maybe)\<[Document](README.md#document)> | - |
`deleteDocuments?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Document](README.md#document)>>> | - |
`deleteFiles` | [DeleteEntitiesOutput](README.md#deleteentitiesoutput) | Deletes the File entites, cleaning up references to it in Workspaces and Knowledge Graphs. |
`deleteInstance?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`deleteInstanceSet?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>>> | - |
`deleteKind` | [DeleteEntitiesOutput](README.md#deleteentitiesoutput) | - |
`deleteLinks?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> | - |
`deleteServices?` | [Maybe](README.md#maybe)\<[DeleteEntitiesOutput](README.md#deleteentitiesoutput)> | Deletes the services that match the provided IDs. |
`deleteWorkspaces` | [DeleteEntitiesOutput](README.md#deleteentitiesoutput) | - |
`entitySearchAction` | [BotAction](README.md#botaction) | - |
`entitySearchPurgeTemporaries` | Scalars[\"Boolean\"] | - |
`refreshServices?` | [Maybe](README.md#maybe)\<Array\<Service>> | Refreshes the known information about a service when it is connected to an external source. This is useful for updating the platforms understanding of an external graphql service. |
`submitFeedback` | Scalars[\"Boolean\"] | Submit customer feedback |
`testServiceConnection?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> | - |
`updateAssistants?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> | Updates the list of assistant services. |
`updateBotAction` | Scalars[\"ID\"] | - |
`updateExternalGraphQLServices?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<Service>>> | Updates the list of external graphql services. |
`updateFiles` | Array\<[File](README.md#file)> | Updates the File entites. |
`updateInstance?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> | - |
`updateKind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> | - |
`updateKinds` | Array\<[Kind](interfaces/kind.md)> | - |
`updateUsers?` | [Maybe](README.md#maybe)\<Array\<[User](interfaces/user.md)>> | Updates existing users. |
`updateWorkspaces` | [ModWorkspacesOutput](README.md#modworkspacesoutput) | - |
`updateWorkspacesFromSchema` | [ModWorkspacesOutput](README.md#modworkspacesoutput) | - |

___

### MutationaddBotActionArgs

Ƭ  **MutationaddBotActionArgs**: { input: [Maybe](README.md#maybe)\<[AddBotActionInput](README.md#addbotactioninput)>  }

*Defined in types/all-types.ts:1248*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [Maybe](README.md#maybe)\<[AddBotActionInput](README.md#addbotactioninput)> |

___

### MutationaddDetectedFacesArgs

Ƭ  **MutationaddDetectedFacesArgs**: { input: Array\<[DetectedFaceInput](README.md#detectedfaceinput)>  }

*Defined in types/all-types.ts:1252*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[DetectedFaceInput](README.md#detectedfaceinput)> |

___

### MutationaddDocumentArgs

Ƭ  **MutationaddDocumentArgs**: { input: [Maybe](README.md#maybe)\<[AddDocumentInput](README.md#adddocumentinput)>  }

*Defined in types/all-types.ts:1256*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [Maybe](README.md#maybe)\<[AddDocumentInput](README.md#adddocumentinput)> |

___

### MutationaddDocumentsArgs

Ƭ  **MutationaddDocumentsArgs**: { input: Array\<[AddDocumentInput](README.md#adddocumentinput)>  }

*Defined in types/all-types.ts:1260*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[AddDocumentInput](README.md#adddocumentinput)> |

___

### MutationaddEntitiesArgs

Ƭ  **MutationaddEntitiesArgs**: { input: [AddEntitiesInput](README.md#addentitiesinput)  }

*Defined in types/all-types.ts:1264*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddEntitiesInput](README.md#addentitiesinput) |

___

### MutationaddImageArgs

Ƭ  **MutationaddImageArgs**: { input: [AddImageInput](README.md#addimageinput)  }

*Defined in types/all-types.ts:1268*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddImageInput](README.md#addimageinput) |

___

### MutationaddImagesArgs

Ƭ  **MutationaddImagesArgs**: { input: Array\<[AddImageInput](README.md#addimageinput)>  }

*Defined in types/all-types.ts:1272*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[AddImageInput](README.md#addimageinput)> |

___

### MutationaddInstanceArgs

Ƭ  **MutationaddInstanceArgs**: { input: [AddInstanceInput](README.md#addinstanceinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1276*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddInstanceInput](README.md#addinstanceinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationaddInstanceSetArgs

Ƭ  **MutationaddInstanceSetArgs**: { input: [AddInstanceSetInput](README.md#addinstancesetinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1281*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddInstanceSetInput](README.md#addinstancesetinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationaddKindArgs

Ƭ  **MutationaddKindArgs**: { input: [AddKindInput](README.md#addkindinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1286*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddKindInput](README.md#addkindinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationaddKindsArgs

Ƭ  **MutationaddKindsArgs**: { input: Array\<[AddKindInput](README.md#addkindinput)>  }

*Defined in types/all-types.ts:1291*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[AddKindInput](README.md#addkindinput)> |

___

### MutationaddLinkArgs

Ƭ  **MutationaddLinkArgs**: { input: [AddLinkInput](README.md#addlinkinput)  }

*Defined in types/all-types.ts:1295*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddLinkInput](README.md#addlinkinput) |

___

### MutationaddLinksArgs

Ƭ  **MutationaddLinksArgs**: { input: Array\<[Maybe](README.md#maybe)\<[AddLinkInput](README.md#addlinkinput)>>  }

*Defined in types/all-types.ts:1299*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[Maybe](README.md#maybe)\<[AddLinkInput](README.md#addlinkinput)>> |

___

### MutationaddRecognizedFacesArgs

Ƭ  **MutationaddRecognizedFacesArgs**: { input: Array\<[RecognizedFaceInput](README.md#recognizedfaceinput)>  }

*Defined in types/all-types.ts:1303*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[RecognizedFaceInput](README.md#recognizedfaceinput)> |

___

### MutationaddRelationArgs

Ƭ  **MutationaddRelationArgs**: { input: [AddRelationInput](README.md#addrelationinput)  }

*Defined in types/all-types.ts:1307*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddRelationInput](README.md#addrelationinput) |

___

### MutationaddServiceSourceArgs

Ƭ  **MutationaddServiceSourceArgs**: { input: [AddServiceSourceInput](README.md#addservicesourceinput)  }

*Defined in types/all-types.ts:1311*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AddServiceSourceInput](README.md#addservicesourceinput) |

___

### MutationcloneWorkspacesArgs

Ƭ  **MutationcloneWorkspacesArgs**: { input: Array\<[CloneWorkspaceInput](README.md#cloneworkspaceinput)>  }

*Defined in types/all-types.ts:1315*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CloneWorkspaceInput](README.md#cloneworkspaceinput)> |

___

### MutationcreateAssistantsArgs

Ƭ  **MutationcreateAssistantsArgs**: { input: Array\<[CreateAssistantInput](README.md#createassistantinput)>  }

*Defined in types/all-types.ts:1319*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateAssistantInput](README.md#createassistantinput)> |

___

### MutationcreateExternalGraphQLServicesArgs

Ƭ  **MutationcreateExternalGraphQLServicesArgs**: { input: Array\<[CreateExternalGraphQLServiceInput](README.md#createexternalgraphqlserviceinput)>  }

*Defined in types/all-types.ts:1323*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateExternalGraphQLServiceInput](README.md#createexternalgraphqlserviceinput)> |

___

### MutationcreateFilesArgs

Ƭ  **MutationcreateFilesArgs**: { input: Array\<[CreateFileInput](interfaces/createfileinput.md)>  }

*Defined in types/all-types.ts:1327*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateFileInput](interfaces/createfileinput.md)> |

___

### MutationcreateUsersArgs

Ƭ  **MutationcreateUsersArgs**: { input: Array\<[CreateUserInput](README.md#createuserinput)>  }

*Defined in types/all-types.ts:1331*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateUserInput](README.md#createuserinput)> |

___

### MutationcreateWorkspacesArgs

Ƭ  **MutationcreateWorkspacesArgs**: { input: Array\<[CreateWorkspaceInput](interfaces/createworkspaceinput.md)>  }

*Defined in types/all-types.ts:1335*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateWorkspaceInput](interfaces/createworkspaceinput.md)> |

___

### MutationcreateWorkspacesFromSchemaArgs

Ƭ  **MutationcreateWorkspacesFromSchemaArgs**: { input: Array\<[CreateWorkspaceFromSchemaInput](README.md#createworkspacefromschemainput)>  }

*Defined in types/all-types.ts:1339*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[CreateWorkspaceFromSchemaInput](README.md#createworkspacefromschemainput)> |

___

### MutationdeleteDocumentArgs

Ƭ  **MutationdeleteDocumentArgs**: { id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1343*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |

___

### MutationdeleteDocumentsArgs

Ƭ  **MutationdeleteDocumentsArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1347*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### MutationdeleteFilesArgs

Ƭ  **MutationdeleteFilesArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1351*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### MutationdeleteInstanceArgs

Ƭ  **MutationdeleteInstanceArgs**: { input: [DeleteInstanceInput](README.md#deleteinstanceinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1355*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [DeleteInstanceInput](README.md#deleteinstanceinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationdeleteInstanceSetArgs

Ƭ  **MutationdeleteInstanceSetArgs**: { input: [DeleteInstanceSetInput](README.md#deleteinstancesetinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1360*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [DeleteInstanceSetInput](README.md#deleteinstancesetinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationdeleteKindArgs

Ƭ  **MutationdeleteKindArgs**: { kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1365*

#### Type declaration:

Name | Type |
------ | ------ |
`kindId` | Scalars[\"ID\"] |

___

### MutationdeleteLinksArgs

Ƭ  **MutationdeleteLinksArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1369*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### MutationdeleteServicesArgs

Ƭ  **MutationdeleteServicesArgs**: { services: Array\<[ServiceRefInput](README.md#servicerefinput)>  }

*Defined in types/all-types.ts:1373*

#### Type declaration:

Name | Type |
------ | ------ |
`services` | Array\<[ServiceRefInput](README.md#servicerefinput)> |

___

### MutationdeleteWorkspacesArgs

Ƭ  **MutationdeleteWorkspacesArgs**: { workspaces: Array\<[WorkspaceRefInput](README.md#workspacerefinput)>  }

*Defined in types/all-types.ts:1377*

#### Type declaration:

Name | Type |
------ | ------ |
`workspaces` | Array\<[WorkspaceRefInput](README.md#workspacerefinput)> |

___

### MutationentitySearchActionArgs

Ƭ  **MutationentitySearchActionArgs**: { input: [EntitySearchInput](README.md#entitysearchinput) ; resultKey: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1381*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [EntitySearchInput](README.md#entitysearchinput) |
`resultKey` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### MutationentitySearchPurgeTemporariesArgs

Ƭ  **MutationentitySearchPurgeTemporariesArgs**: { resultKey: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1386*

#### Type declaration:

Name | Type |
------ | ------ |
`resultKey` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### MutationrefreshServicesArgs

Ƭ  **MutationrefreshServicesArgs**: { dryRun: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; services: Array\<[ServiceRefInput](README.md#servicerefinput)>  }

*Defined in types/all-types.ts:1390*

#### Type declaration:

Name | Type |
------ | ------ |
`dryRun` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`services` | Array\<[ServiceRefInput](README.md#servicerefinput)> |

___

### MutationsubmitFeedbackArgs

Ƭ  **MutationsubmitFeedbackArgs**: { attachments: Array\<[AttachmentInput](README.md#attachmentinput)> ; feedback: Scalars[\"String\"]  }

*Defined in types/all-types.ts:1395*

#### Type declaration:

Name | Type |
------ | ------ |
`attachments` | Array\<[AttachmentInput](README.md#attachmentinput)> |
`feedback` | Scalars[\"String\"] |

___

### MutationtestServiceConnectionArgs

Ƭ  **MutationtestServiceConnectionArgs**: { input: [TestConnectionInput](README.md#testconnectioninput)  }

*Defined in types/all-types.ts:1400*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [TestConnectionInput](README.md#testconnectioninput) |

___

### MutationupdateAssistantsArgs

Ƭ  **MutationupdateAssistantsArgs**: { input: Array\<[UpdateAssistantInput](interfaces/updateassistantinput.md)>  }

*Defined in types/all-types.ts:1404*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateAssistantInput](interfaces/updateassistantinput.md)> |

___

### MutationupdateBotActionArgs

Ƭ  **MutationupdateBotActionArgs**: { input: [Maybe](README.md#maybe)\<[UpdateBotActionInput](README.md#updatebotactioninput)>  }

*Defined in types/all-types.ts:1408*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [Maybe](README.md#maybe)\<[UpdateBotActionInput](README.md#updatebotactioninput)> |

___

### MutationupdateExternalGraphQLServicesArgs

Ƭ  **MutationupdateExternalGraphQLServicesArgs**: { input: Array\<[UpdateExternalGraphQLServiceInput](interfaces/updateexternalgraphqlserviceinput.md)>  }

*Defined in types/all-types.ts:1412*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateExternalGraphQLServiceInput](interfaces/updateexternalgraphqlserviceinput.md)> |

___

### MutationupdateFilesArgs

Ƭ  **MutationupdateFilesArgs**: { input: Array\<[UpdateFileInput](interfaces/updatefileinput.md)>  }

*Defined in types/all-types.ts:1416*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateFileInput](interfaces/updatefileinput.md)> |

___

### MutationupdateInstanceArgs

Ƭ  **MutationupdateInstanceArgs**: { input: [UpdateInstanceInput](README.md#updateinstanceinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1420*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [UpdateInstanceInput](README.md#updateinstanceinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationupdateKindArgs

Ƭ  **MutationupdateKindArgs**: { input: [UpdateKindInput](README.md#updatekindinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1425*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [UpdateKindInput](README.md#updatekindinput) |
`tenantId` | Scalars[\"ID\"] |

___

### MutationupdateKindsArgs

Ƭ  **MutationupdateKindsArgs**: { input: Array\<[UpdateKindInput](README.md#updatekindinput)>  }

*Defined in types/all-types.ts:1430*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateKindInput](README.md#updatekindinput)> |

___

### MutationupdateUsersArgs

Ƭ  **MutationupdateUsersArgs**: { input: Array\<[UpdateUserInput](README.md#updateuserinput)>  }

*Defined in types/all-types.ts:1434*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateUserInput](README.md#updateuserinput)> |

___

### MutationupdateWorkspacesArgs

Ƭ  **MutationupdateWorkspacesArgs**: { input: Array\<[UpdateWorkspaceInput](interfaces/updateworkspaceinput.md)>  }

*Defined in types/all-types.ts:1438*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateWorkspaceInput](interfaces/updateworkspaceinput.md)> |

___

### MutationupdateWorkspacesFromSchemaArgs

Ƭ  **MutationupdateWorkspacesFromSchemaArgs**: { input: Array\<[UpdateWorkspaceFromSchemaInput](README.md#updateworkspacefromschemainput)>  }

*Defined in types/all-types.ts:1442*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | Array\<[UpdateWorkspaceFromSchemaInput](README.md#updateworkspacefromschemainput)> |

___

### OperationNode

Ƭ  **OperationNode**: Node & { __typename: \"OperationNode\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; function: [Function](interfaces/function.md) ; id: Scalars[\"ID\"] ; isCollapsed: Array\<Scalars[\"String\"]> ; location?: [Maybe](README.md#maybe)\<[Position](interfaces/position.md)>  }

*Defined in types/all-types.ts:1482*

___

### OrderedList

Ƭ  **OrderedList**: { __typename: \"OrderedList\" ; id: Scalars[\"ID\"] ; items?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[OrderedListItem](README.md#orderedlistitem)>>> ; type?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1497*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"OrderedList\" |
`id` | Scalars[\"ID\"] |
`items?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[OrderedListItem](README.md#orderedlistitem)>>> |
`type?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### OrderedListItem

Ƭ  **OrderedListItem**: { __typename: \"OrderedListItem\" ; contents?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"] ; index?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:1504*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"OrderedListItem\" |
`contents?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |
`index?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |

___

### Page

Ƭ  **Page**: { __typename: \"Page\" ; contents?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; footer?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; header?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"] ; number?: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:1524*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Page\" |
`contents?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`footer?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`header?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |
`number?` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |

___

### Person

Ƭ  **Person**: { __typename: \"Person\" ; dateOfBirth?: [Maybe](README.md#maybe)\<Scalars[\"Date\"]> ; familyName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; givenName?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; images?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Image](README.md#image)>>> ; name: Scalars[\"String\"]  }

*Defined in types/all-types.ts:1533*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Person\" |
`dateOfBirth?` | [Maybe](README.md#maybe)\<Scalars[\"Date\"]> |
`familyName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`givenName?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`images?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Image](README.md#image)>>> |
`name` | Scalars[\"String\"] |

___

### QNodeType

Ƭ  **QNodeType**: \"Function\" \| \"Kind\"

*Defined in [types/index.ts:35](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L35)*

___

### QUpdateFunctionInput

Ƭ  **QUpdateFunctionInput**: { description?: string \| null ; functionType?: string ; graphqlOperationType?: [GraphqlOperationType](README.md#graphqloperationtype) ; id: string ; implementation?: { entrypoint: string ; operations: { argumentValues: any ; function: string ; id: string ; type: string  }[]  } ; name?: string ; outputKindId?: string ; outputModifiers?: [Modifier](README.md#modifier)[] ; outputType?: string  }

*Defined in [types/QUpdateFunctionInput.ts:3](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/QUpdateFunctionInput.ts#L3)*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | string \| null |
`functionType?` | string |
`graphqlOperationType?` | [GraphqlOperationType](README.md#graphqloperationtype) |
`id` | string |
`implementation?` | { entrypoint: string ; operations: { argumentValues: any ; function: string ; id: string ; type: string  }[]  } |
`name?` | string |
`outputKindId?` | string |
`outputModifiers?` | [Modifier](README.md#modifier)[] |
`outputType?` | string |

___

### Query

Ƭ  **Query**: { __typename: \"Query\" ; activities: Array\<[Activity](README.md#activity)> ; activityFeed: Array\<[Activity](README.md#activity)> ; allInstances?: [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> ; allKinds?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> ; allLinks?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; allReferencedInstances: Array\<[Instance](README.md#instance)> ; allReferencedKinds: Array\<[Kind](interfaces/kind.md)> ; allReferencedServices: Array\<Service> ; allRelations?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Relation](README.md#relation)>>> ; allServices: Array\<Service> ; allUsers: Array\<[User](interfaces/user.md)> ; botAction?: [Maybe](README.md#maybe)\<[BotAction](README.md#botaction)> ; botActions: Array\<[BotAction](README.md#botaction)> ; botActionsForServicesOnKind: Array\<[BotAction](README.md#botaction)> ; classification: Array\<[Link](README.md#link)> ; componentVersions: Array\<Scalars[\"String\"]> ; document?: [Maybe](README.md#maybe)\<[Document](README.md#document)> ; documents?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Document](README.md#document)>>> ; entitySearch?: [Maybe](README.md#maybe)\<Array\<[EntitySearchResult](README.md#entitysearchresult)>> ; entitySearchResult: [EntitySearchActionResult](README.md#entitysearchactionresult) ; files: Array\<[File](README.md#file)> ; image?: [Maybe](README.md#maybe)\<[Image](README.md#image)> ; images?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Image](README.md#image)>>> ; info: [Info](README.md#info) ; instance?: [Maybe](README.md#maybe)\<[Instance](README.md#instance)> ; instanceRef?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; instances?: [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> ; instancesByRef?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Instance](README.md#instance)>>> ; kind?: [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> ; kindDBKindQuery?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> ; kindDBQuery?: [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> ; kinds?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> ; link?: [Maybe](README.md#maybe)\<[Link](README.md#link)> ; links?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; populateInstanceRef?: [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> ; relation?: [Maybe](README.md#maybe)\<[Relation](README.md#relation)> ; relations?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Relation](README.md#relation)>>> ; search?: [Maybe](README.md#maybe)\<[SearchResult](README.md#searchresult)> ; services: Array\<[Maybe](README.md#maybe)\<Service>> ; users: Array\<[User](interfaces/user.md)> ; usersByEmail: Array\<[User](interfaces/user.md)> ; workspaces: Array\<[Workspace](interfaces/workspace.md)> ; workspacesFiltered: Array\<[Workspace](interfaces/workspace.md)>  }

*Defined in types/all-types.ts:1560*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`__typename` | \"Query\" | - |
`activities` | Array\<[Activity](README.md#activity)> | Returns activities by ID |
`activityFeed` | Array\<[Activity](README.md#activity)> | Returns the feed of recent activities. |
`allInstances?` | [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> | - |
`allKinds?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> | - |
`allLinks?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> | - |
`allReferencedInstances` | Array\<[Instance](README.md#instance)> | - |
`allReferencedKinds` | Array\<[Kind](interfaces/kind.md)> | - |
`allReferencedServices` | Array\<Service> | Goes though the signature tree on the on passed in entities, and returns the list of services referenced in that tree. This is inclusive, so the services that the incoming entities belong to are also returned.  Note: This query can get very slow when there are many services referenced while it transverses the references to build the list.  |
`allRelations?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Relation](README.md#relation)>>> | - |
`allServices` | Array\<Service> | Load all of the services, limited only by the inputs. |
`allUsers` | Array\<[User](interfaces/user.md)> | Returns all of the users in the system. |
`botAction?` | [Maybe](README.md#maybe)\<[BotAction](README.md#botaction)> | - |
`botActions` | Array\<[BotAction](README.md#botaction)> | - |
`botActionsForServicesOnKind` | Array\<[BotAction](README.md#botaction)> | - |
`classification` | Array\<[Link](README.md#link)> | - |
`componentVersions` | Array\<Scalars[\"String\"]> | Platform version information. |
`document?` | [Maybe](README.md#maybe)\<[Document](README.md#document)> | - |
`documents?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Document](README.md#document)>>> | - |
`entitySearch?` | [Maybe](README.md#maybe)\<Array\<[EntitySearchResult](README.md#entitysearchresult)>> | - |
`entitySearchResult` | [EntitySearchActionResult](README.md#entitysearchactionresult) | - |
`files` | Array\<[File](README.md#file)> | Returns a group of File entities with the given group of ids.  Allows for a partial update of the File based on the fields defined in the input. |
`image?` | [Maybe](README.md#maybe)\<[Image](README.md#image)> | - |
`images?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Image](README.md#image)>>> | - |
`info` | [Info](README.md#info) | Returns basic information about the service |
`instance?` | [Maybe](README.md#maybe)\<[Instance](README.md#instance)> | - |
`instanceRef?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> | - |
`instances?` | [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> | - |
`instancesByRef?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Instance](README.md#instance)>>> | - |
`kind?` | [Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)> | - |
`kindDBKindQuery?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> | Query KindDB for Kinds using a Kind Query. Only Kinds are returned. Instances are not supported. |
`kindDBQuery?` | [Maybe](README.md#maybe)\<[InstanceSet](README.md#instanceset)> | - |
`kinds?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Kind](interfaces/kind.md)>>> | - |
`link?` | [Maybe](README.md#maybe)\<[Link](README.md#link)> | - |
`links?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> | - |
`populateInstanceRef?` | [Maybe](README.md#maybe)\<[InstanceRef](README.md#instanceref)> | - |
`relation?` | [Maybe](README.md#maybe)\<[Relation](README.md#relation)> | - |
`relations?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Relation](README.md#relation)>>> | - |
`search?` | [Maybe](README.md#maybe)\<[SearchResult](README.md#searchresult)> | - |
`services` | Array\<[Maybe](README.md#maybe)\<Service>> | Load a list of services based on the provided IDs. |
`users` | Array\<[User](interfaces/user.md)> | Returns a list of users based on the provided IDs. |
`usersByEmail` | Array\<[User](interfaces/user.md)> | Returns a list of users by email address. |
`workspaces` | Array\<[Workspace](interfaces/workspace.md)> | - |
`workspacesFiltered` | Array\<[Workspace](interfaces/workspace.md)> | - |

___

### QueryactivitiesArgs

Ƭ  **QueryactivitiesArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1629*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryallInstancesArgs

Ƭ  **QueryallInstancesArgs**: { drop: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; fieldIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; kindId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindName: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; take: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; tenantId: Scalars[\"ID\"] ; token: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1633*

#### Type declaration:

Name | Type |
------ | ------ |
`drop` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`fieldIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`kindId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindName` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`take` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`tenantId` | Scalars[\"ID\"] |
`token` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### QueryallKindsArgs

Ƭ  **QueryallKindsArgs**: { includeSvc: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; serviceId: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; take: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1643*

#### Type declaration:

Name | Type |
------ | ------ |
`includeSvc` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`serviceId` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`take` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QueryallLinksArgs

Ƭ  **QueryallLinksArgs**: { relationId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1650*

#### Type declaration:

Name | Type |
------ | ------ |
`relationId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QueryallReferencedInstancesArgs

Ƭ  **QueryallReferencedInstancesArgs**: { instanceIdsByKind: Array\<[InstanceIdsByKind](README.md#instanceidsbykind)> ; instancesToSkipByKind: [Maybe](README.md#maybe)\<Array\<[InstanceIdsByKind](README.md#instanceidsbykind)>> ; maxDepth: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1655*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceIdsByKind` | Array\<[InstanceIdsByKind](README.md#instanceidsbykind)> |
`instancesToSkipByKind` | [Maybe](README.md#maybe)\<Array\<[InstanceIdsByKind](README.md#instanceidsbykind)>> |
`maxDepth` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QueryallReferencedKindsArgs

Ƭ  **QueryallReferencedKindsArgs**: { ids: Array\<Scalars[\"ID\"]> ; idsToSkip: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; maxDepth: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1662*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |
`idsToSkip` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`maxDepth` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QueryallReferencedServicesArgs

Ƭ  **QueryallReferencedServicesArgs**: { input: [AllReferencedServicesInput](README.md#allreferencedservicesinput)  }

*Defined in types/all-types.ts:1669*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [AllReferencedServicesInput](README.md#allreferencedservicesinput) |

___

### QueryallRelationsArgs

Ƭ  **QueryallRelationsArgs**: { tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1673*

#### Type declaration:

Name | Type |
------ | ------ |
`tenantId` | Scalars[\"ID\"] |

___

### QueryallServicesArgs

Ƭ  **QueryallServicesArgs**: { drop?: Scalars[\"Int\"] ; take?: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:1677*

#### Type declaration:

Name | Type |
------ | ------ |
`drop?` | Scalars[\"Int\"] |
`take?` | Scalars[\"Int\"] |

___

### QueryallUsersArgs

Ƭ  **QueryallUsersArgs**: { offset: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; take: [Maybe](README.md#maybe)\<Scalars[\"Int\"]>  }

*Defined in types/all-types.ts:1682*

#### Type declaration:

Name | Type |
------ | ------ |
`offset` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`take` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |

___

### QuerybotActionArgs

Ƭ  **QuerybotActionArgs**: { id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1687*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |

___

### QuerybotActionsArgs

Ƭ  **QuerybotActionsArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1691*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QuerybotActionsForServicesOnKindArgs

Ƭ  **QuerybotActionsForServicesOnKindArgs**: { kindId: Scalars[\"ID\"] ; serviceIds: Array\<Scalars[\"ID\"]> ; take: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; token: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1695*

#### Type declaration:

Name | Type |
------ | ------ |
`kindId` | Scalars[\"ID\"] |
`serviceIds` | Array\<Scalars[\"ID\"]> |
`take` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`token` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### QueryclassificationArgs

Ƭ  **QueryclassificationArgs**: { id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1702*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |

___

### QuerydocumentArgs

Ƭ  **QuerydocumentArgs**: { id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1706*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |

___

### QuerydocumentsArgs

Ƭ  **QuerydocumentsArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1710*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryentitySearchArgs

Ƭ  **QueryentitySearchArgs**: { input: [EntitySearchInput](README.md#entitysearchinput)  }

*Defined in types/all-types.ts:1714*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [EntitySearchInput](README.md#entitysearchinput) |

___

### QueryentitySearchResultArgs

Ƭ  **QueryentitySearchResultArgs**: { resultKey: Scalars[\"String\"] ; take: [Maybe](README.md#maybe)\<Scalars[\"Int\"]> ; token: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1718*

#### Type declaration:

Name | Type |
------ | ------ |
`resultKey` | Scalars[\"String\"] |
`take` | [Maybe](README.md#maybe)\<Scalars[\"Int\"]> |
`token` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### QueryfilesArgs

Ƭ  **QueryfilesArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1724*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryimageArgs

Ƭ  **QueryimageArgs**: { id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1728*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |

___

### QueryimagesArgs

Ƭ  **QueryimagesArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1732*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryinstanceArgs

Ƭ  **QueryinstanceArgs**: { instanceRef: [InstanceRefInput](README.md#instancerefinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1736*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceRef` | [InstanceRefInput](README.md#instancerefinput) |
`tenantId` | Scalars[\"ID\"] |

___

### QueryinstanceRefArgs

Ƭ  **QueryinstanceRefArgs**: { id: Scalars[\"ID\"] ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1741*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`tenantId` | Scalars[\"ID\"] |

___

### QueryinstancesArgs

Ƭ  **QueryinstancesArgs**: { ids: Array\<Scalars[\"ID\"]> ; kindId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindName: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1746*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |
`kindId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindName` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QueryinstancesByRefArgs

Ƭ  **QueryinstancesByRefArgs**: { instanceRefs: Array\<[InstanceRefInput](README.md#instancerefinput)> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1753*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceRefs` | Array\<[InstanceRefInput](README.md#instancerefinput)> |
`tenantId` | Scalars[\"ID\"] |

___

### QuerykindArgs

Ƭ  **QuerykindArgs**: { id: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1758*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QuerykindDBKindQueryArgs

Ƭ  **QuerykindDBKindQueryArgs**: { kindQuery: [KindQueryInput](README.md#kindqueryinput)  }

*Defined in types/all-types.ts:1764*

#### Type declaration:

Name | Type |
------ | ------ |
`kindQuery` | [KindQueryInput](README.md#kindqueryinput) |

___

### QuerykindDBQueryArgs

Ƭ  **QuerykindDBQueryArgs**: { kindQuery: [KindQueryInput](README.md#kindqueryinput)  }

*Defined in types/all-types.ts:1768*

#### Type declaration:

Name | Type |
------ | ------ |
`kindQuery` | [KindQueryInput](README.md#kindqueryinput) |

___

### QuerykindsArgs

Ƭ  **QuerykindsArgs**: { ids: Array\<Scalars[\"ID\"]> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1772*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |
`tenantId` | Scalars[\"ID\"] |

___

### QuerylinkArgs

Ƭ  **QuerylinkArgs**: { id: Scalars[\"ID\"] ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1777*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`tenantId` | Scalars[\"ID\"] |

___

### QuerylinksArgs

Ƭ  **QuerylinksArgs**: { ids: Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1782*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> |
`tenantId` | Scalars[\"ID\"] |

___

### QuerypopulateInstanceRefArgs

Ƭ  **QuerypopulateInstanceRefArgs**: { instanceRef: [InstanceRefInput](README.md#instancerefinput) ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1787*

#### Type declaration:

Name | Type |
------ | ------ |
`instanceRef` | [InstanceRefInput](README.md#instancerefinput) |
`tenantId` | Scalars[\"ID\"] |

___

### QueryrelationArgs

Ƭ  **QueryrelationArgs**: { id: Scalars[\"ID\"] ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1792*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`tenantId` | Scalars[\"ID\"] |

___

### QueryrelationsArgs

Ƭ  **QueryrelationsArgs**: { ids: Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> ; tenantId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1797*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> |
`tenantId` | Scalars[\"ID\"] |

___

### QuerysearchArgs

Ƭ  **QuerysearchArgs**: { scopes: Array\<[SearchScope](enums/searchscope.md)> ; term: Scalars[\"String\"] ; userId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1802*

#### Type declaration:

Name | Type |
------ | ------ |
`scopes` | Array\<[SearchScope](enums/searchscope.md)> |
`term` | Scalars[\"String\"] |
`userId` | Scalars[\"ID\"] |

___

### QueryservicesArgs

Ƭ  **QueryservicesArgs**: { ids: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>>  }

*Defined in types/all-types.ts:1808*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |

___

### QueryusersArgs

Ƭ  **QueryusersArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1812*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryusersByEmailArgs

Ƭ  **QueryusersByEmailArgs**: { emails: Array\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1816*

#### Type declaration:

Name | Type |
------ | ------ |
`emails` | Array\<Scalars[\"String\"]> |

___

### QueryworkspacesArgs

Ƭ  **QueryworkspacesArgs**: { ids: Array\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1820*

#### Type declaration:

Name | Type |
------ | ------ |
`ids` | Array\<Scalars[\"ID\"]> |

___

### QueryworkspacesFilteredArgs

Ƭ  **QueryworkspacesFilteredArgs**: { input: [WorkspaceFilterInput](README.md#workspacefilterinput)  }

*Defined in types/all-types.ts:1824*

#### Type declaration:

Name | Type |
------ | ------ |
`input` | [WorkspaceFilterInput](README.md#workspacefilterinput) |

___

### RecognizedFace

Ƭ  **RecognizedFace**: { __typename: \"RecognizedFace\" ; detectedFace?: [Maybe](README.md#maybe)\<[DetectedFace](README.md#detectedface)> ; detectedFaceId: Scalars[\"ID\"] ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; person: [Person](README.md#person) ; personId: Scalars[\"ID\"] ; recognitionConfidence: Scalars[\"Float\"]  }

*Defined in types/all-types.ts:1828*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"RecognizedFace\" |
`detectedFace?` | [Maybe](README.md#maybe)\<[DetectedFace](README.md#detectedface)> |
`detectedFaceId` | Scalars[\"ID\"] |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |
`person` | [Person](README.md#person) |
`personId` | Scalars[\"ID\"] |
`recognitionConfidence` | Scalars[\"Float\"] |

___

### RecognizedFaceInput

Ƭ  **RecognizedFaceInput**: { detectedFaceId: Scalars[\"ID\"] ; id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; name: Scalars[\"String\"] ; personId: Scalars[\"ID\"] ; recognitionConfidence: Scalars[\"Float\"]  }

*Defined in types/all-types.ts:1839*

#### Type declaration:

Name | Type |
------ | ------ |
`detectedFaceId` | Scalars[\"ID\"] |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`name` | Scalars[\"String\"] |
`personId` | Scalars[\"ID\"] |
`recognitionConfidence` | Scalars[\"Float\"] |

___

### Relation

Ƭ  **Relation**: { __typename: \"Relation\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; inverseName: Scalars[\"String\"] ; links?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> ; name: Scalars[\"String\"] ; undirected?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; weight?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]>  }

*Defined in types/all-types.ts:1847*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Relation\" |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`inverseName` | Scalars[\"String\"] |
`links?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Link](README.md#link)>>> |
`name` | Scalars[\"String\"] |
`undirected?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`weight?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |

___

### SearchCriteria

Ƭ  **SearchCriteria**: { id?: string ; name?: string  }

*Defined in [Clients/index.ts:10](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/index.ts#L10)*

#### Type declaration:

Name | Type |
------ | ------ |
`id?` | string |
`name?` | string |

___

### SearchResult

Ƭ  **SearchResult**: { __typename: \"SearchResult\" ; assistants?: [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> ; functions?: [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> ; kinds?: [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> ; services?: [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> ; workspaces?: [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>>  }

*Defined in types/all-types.ts:1858*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"SearchResult\" |
`assistants?` | [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> |
`functions?` | [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> |
`kinds?` | [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> |
`services?` | [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> |
`workspaces?` | [Maybe](README.md#maybe)\<Array\<[SearchResultItem](README.md#searchresultitem)>> |

___

### SearchResultItem

Ƭ  **SearchResultItem**: { __typename: \"SearchResultItem\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"] ; service?: [Maybe](README.md#maybe)\<[ServiceInfo](README.md#serviceinfo)>  }

*Defined in types/all-types.ts:1867*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"SearchResultItem\" |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |
`service?` | [Maybe](README.md#maybe)\<[ServiceInfo](README.md#serviceinfo)> |

___

### Section

Ƭ  **Section**: { __typename: \"Section\" ; contents?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"] ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; subSections?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Section](README.md#section)>>>  }

*Defined in types/all-types.ts:1883*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Section\" |
`contents?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`subSections?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Section](README.md#section)>>> |

___

### ServiceInfo

Ƭ  **ServiceInfo**: { __typename: \"ServiceInfo\" ; id: Scalars[\"ID\"] ; name: Scalars[\"String\"]  }

*Defined in types/all-types.ts:1902*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"ServiceInfo\" |
`id` | Scalars[\"ID\"] |
`name` | Scalars[\"String\"] |

___

### ServiceRefInput

Ƭ  **ServiceRefInput**: { id: Scalars[\"ID\"] ; version: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:1912*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`version` | Scalars[\"Int\"] |

___

### SnackType

Ƭ  **SnackType**: \"error\" \| \"alert\" \| \"in-progress\" \| \"success\"

*Defined in [types/index.ts:33](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L33)*

___

### Subscription

Ƭ  **Subscription**: { __typename: \"Subscription\" ; botActionAdded: [BotActionAddedEvent](README.md#botactionaddedevent) ; botActionUpdated: [BotActionUpdatedEvent](README.md#botactionupdatedevent) ; linkAdded: [Link](README.md#link)  }

*Defined in types/all-types.ts:1917*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Subscription\" |
`botActionAdded` | [BotActionAddedEvent](README.md#botactionaddedevent) |
`botActionUpdated` | [BotActionUpdatedEvent](README.md#botactionupdatedevent) |
`linkAdded` | [Link](README.md#link) |

___

### SubscriptionbotActionAddedArgs

Ƭ  **SubscriptionbotActionAddedArgs**: { botId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; kindId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; serviceId: [Maybe](README.md#maybe)\<Scalars[\"ID\"]>  }

*Defined in types/all-types.ts:1924*

#### Type declaration:

Name | Type |
------ | ------ |
`botId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`kindId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`serviceId` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |

___

### SubscriptionbotActionUpdatedArgs

Ƭ  **SubscriptionbotActionUpdatedArgs**: { botActionIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; botIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; kindIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; serviceIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>>  }

*Defined in types/all-types.ts:1930*

#### Type declaration:

Name | Type |
------ | ------ |
`botActionIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`botIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`kindIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`serviceIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |

___

### SubscriptionlinkAddedArgs

Ƭ  **SubscriptionlinkAddedArgs**: { fieldIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; instanceIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; kindIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; relationIds: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>>  }

*Defined in types/all-types.ts:1937*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`instanceIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`kindIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |
`relationIds` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> |

___

### Table

Ƭ  **Table**: { __typename: \"Table\" ; headers?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"] ; rows?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>>  }

*Defined in types/all-types.ts:1944*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"Table\" |
`headers?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |
`rows?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |

___

### TestConnectionInput

Ƭ  **TestConnectionInput**: { id?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; url?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1951*

#### Type declaration:

Name | Type |
------ | ------ |
`id?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`url?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### Type

Ƭ  **Type**: [EntityInterface](interfaces/entityinterface.md) & { __typename: \"Type\" ; description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; isManaged: Scalars[\"Boolean\"] ; name: Scalars[\"String\"] ; nameDescriptor?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; service: Service ; signature: Scalars[\"TypeExpression\"]  }

*Defined in types/all-types.ts:1962*

___

### TypeExpressionObject

Ƭ  **TypeExpressionObject**: TypeExpression

*Defined in Clients/AssistantAPIClient/models.ts:15*

Represents a JSON object used to express a type expression.

___

### UnknownFunction

Ƭ  **UnknownFunction**: (...args: any[]) => any

*Defined in [types/index.ts:27](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L27)*

___

### UnorderedList

Ƭ  **UnorderedList**: { __typename: \"UnorderedList\" ; id: Scalars[\"ID\"] ; items?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[UnorderedListItem](README.md#unorderedlistitem)>>> ; type?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:1973*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"UnorderedList\" |
`id` | Scalars[\"ID\"] |
`items?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[UnorderedListItem](README.md#unorderedlistitem)>>> |
`type?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### UnorderedListItem

Ƭ  **UnorderedListItem**: { __typename: \"UnorderedListItem\" ; contents?: [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> ; id: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:1980*

#### Type declaration:

Name | Type |
------ | ------ |
`__typename` | \"UnorderedListItem\" |
`contents?` | [Maybe](README.md#maybe)\<Array\<[Maybe](README.md#maybe)\<[Content](README.md#content)>>> |
`id` | Scalars[\"ID\"] |

___

### UntypedObject

Ƭ  **UntypedObject**: Record\<string, any>

*Defined in [types/index.ts:25](https://github.com/maana-io/q-assistant-client/blob/develop/src/types/index.ts#L25)*

___

### UpdateBotActionInput

Ƭ  **UpdateBotActionInput**: { error?: [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> ; id: Scalars[\"ID\"] ; progress?: [Maybe](README.md#maybe)\<Scalars[\"Float\"]> ; status: [BotActionStatus](enums/botactionstatus.md)  }

*Defined in types/all-types.ts:2013*

#### Type declaration:

Name | Type |
------ | ------ |
`error?` | [Maybe](README.md#maybe)\<Scalars[\"JSON\"]> |
`id` | Scalars[\"ID\"] |
`progress?` | [Maybe](README.md#maybe)\<Scalars[\"Float\"]> |
`status` | [BotActionStatus](enums/botactionstatus.md) |

___

### UpdateInstanceInput

Ƭ  **UpdateInstanceInput**: { fieldIds: Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> ; fieldValues: Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>> ; id: Scalars[\"ID\"] ; kindId: Scalars[\"ID\"]  }

*Defined in types/all-types.ts:2099*

#### Type declaration:

Name | Type |
------ | ------ |
`fieldIds` | Array\<[Maybe](README.md#maybe)\<Scalars[\"ID\"]>> |
`fieldValues` | Array\<[Maybe](README.md#maybe)\<[FieldValueInput](README.md#fieldvalueinput)>> |
`id` | Scalars[\"ID\"] |
`kindId` | Scalars[\"ID\"] |

___

### UpdateKindInput

Ƭ  **UpdateKindInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; isManaged?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isPublic?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isSystem?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; nameField?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; schema?: [Maybe](README.md#maybe)\<Array\<[FieldInput](README.md#fieldinput)>> ; serviceId?: [Maybe](README.md#maybe)\<Scalars[\"ID\"]> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]>  }

*Defined in types/all-types.ts:2106*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`isManaged?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isPublic?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isSystem?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`nameField?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`schema?` | [Maybe](README.md#maybe)\<Array\<[FieldInput](README.md#fieldinput)>> |
`serviceId?` | [Maybe](README.md#maybe)\<Scalars[\"ID\"]> |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |

___

### UpdateUserInput

Ƭ  **UpdateUserInput**: { addFavoriteItems?: [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> ; addOpenWorkspaces?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; addRecentItems?: [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> ; deleteFavoriteItems?: [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> ; deleteOpenWorkspaces?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; deleteRecentItems?: [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> ; id: Scalars[\"ID\"] ; theme?: [Maybe](README.md#maybe)\<[Theme](enums/theme.md)>  }

*Defined in types/all-types.ts:2166*

UpdateUser input - used to update an existing User.  Allows for a partial
update of the User based on the fields defined in the input.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`addFavoriteItems?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> | Adds entries to the users favorite items list. |
`addOpenWorkspaces?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> | Adds entries to the users open workpsaces list. |
`addRecentItems?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> | Adds entries to the users recent items list. |
`deleteFavoriteItems?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> | Deletes entries from the users favorite items list. |
`deleteOpenWorkspaces?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> | Deletes entries from the users open workspaces list. |
`deleteRecentItems?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"EntityIdentifier\"]>> | Deletes entries from the users recent items list. |
`id` | Scalars[\"ID\"] | - |
`theme?` | [Maybe](README.md#maybe)\<[Theme](enums/theme.md)> | Sets the current theme for the user. |

___

### UpdateWorkspaceFromSchemaInput

Ƭ  **UpdateWorkspaceFromSchemaInput**: { description?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; id: Scalars[\"ID\"] ; isPublic?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isTemplate?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; name?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; schema: Scalars[\"String\"] ; tags?: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> ; thumbnailUrl?: [Maybe](README.md#maybe)\<Scalars[\"String\"]> ; version: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:2184*

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`id` | Scalars[\"ID\"] |
`isPublic?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`isTemplate?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> |
`name?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`schema` | Scalars[\"String\"] |
`tags?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> |
`thumbnailUrl?` | [Maybe](README.md#maybe)\<Scalars[\"String\"]> |
`version` | Scalars[\"Int\"] |

___

### UrlLocation

Ƭ  **UrlLocation**: ServiceLocation & { __typename: \"UrlLocation\" ; url: Scalars[\"String\"]  }

*Defined in types/all-types.ts:2250*

___

### WorkspaceFilterInput

Ƭ  **WorkspaceFilterInput**: { drop?: Scalars[\"Int\"] ; ids?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; isPublic?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; isTemplate?: [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> ; names?: [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> ; owners?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; services?: [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> ; take?: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:2336*

WorkspaceFilter input - search criteria for workspaces. If a property is null,
this will not filter on that criteria.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`drop?` | Scalars[\"Int\"] | The number of services to skip prior to returning the number of services specified by take. |
`ids?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> | Filter workspaces by their ID. |
`isPublic?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> | If true, return only public services. If false, return non-public services. |
`isTemplate?` | [Maybe](README.md#maybe)\<Scalars[\"Boolean\"]> | If true, return only template services. If false, return non-template services. |
`names?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"String\"]>> | Filter workspaces by their name. |
`owners?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> | Filter workspaces by their owner. |
`services?` | [Maybe](README.md#maybe)\<Array\<Scalars[\"ID\"]>> | Filter workspaces by their underlying logic service. |
`take?` | Scalars[\"Int\"] | The maximum number of services to return. |

___

### WorkspaceRefInput

Ƭ  **WorkspaceRefInput**: { id: Scalars[\"ID\"] ; version: Scalars[\"Int\"]  }

*Defined in types/all-types.ts:2361*

#### Type declaration:

Name | Type |
------ | ------ |
`id` | Scalars[\"ID\"] |
`version` | Scalars[\"Int\"] |

## Variables

### CORE\_SERVICE\_ID

• `Const` **CORE\_SERVICE\_ID**: \"io.maana.core\" = "io.maana.core"

*Defined in Clients/AssistantAPIClient/constants.ts:17*

ID of the io.maana.core service

___

### CREATE\_LAMBDA

• `Const` **CREATE\_LAMBDA**: \"
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
\" = \` mutation createLambda( $id: ID! $name: String! $graphqlOperationType: GraphQLOperationType! $serviceId: ID! $runtimeId: ID! $code: String! $input: [FieldInput!] $kinds: [KindInput!] $outputKind: String! $outputModifiers: [Modifier!] ) { createLambda( input: { id: $id name: $name graphQLOperationType: $graphqlOperationType serviceId: $serviceId runtimeId: $runtimeId code: $code input: $input outputKind: $outputKind outputModifiers: $outputModifiers kinds: $kinds } ) { id name serviceId runtime { id } code input { name kind modifiers } outputKind outputModifiers kinds { name fields { name kind modifiers } } } }\`

*Defined in [GraphQL/index.ts:76](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L76)*

___

### CREATE\_LAMBDAS

• `Const` **CREATE\_LAMBDAS**: \"
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
\" = \` mutation createLambdas($inputs: [LambdaInput!]! ) { createLambdas( inputs: $inputs ) { id name sequenceNo serviceId runtime { id language host } code input { name kind modifiers } graphQLOperationType outputKind outputModifiers kinds { name fields { name kind modifiers } } } }\`

*Defined in [GraphQL/index.ts:129](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L129)*

___

### DELETE\_LAMBDA

• `Const` **DELETE\_LAMBDA**: \"
  mutation deleteLambda($id: ID!){
    deleteLambda(id: $id)
  }
\" = \` mutation deleteLambda($id: ID!){ deleteLambda(id: $id) }\`

*Defined in [GraphQL/index.ts:165](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L165)*

___

### GET\_LAMBDA

• `Const` **GET\_LAMBDA**: string = \` query getLambda($lambdaId: ID!) { getLambda(id: $lambdaId) { ...lambdaFields } } ${fragments.lambdaFields}\`

*Defined in [GraphQL/index.ts:67](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L67)*

___

### LAMBDA\_SERVICE\_ID\_POSTFIX

• `Const` **LAMBDA\_SERVICE\_ID\_POSTFIX**: \"\_lambda\" = "\_lambda"

*Defined in [Clients/ensureWSContainsRefreshedService.ts:4](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ensureWSContainsRefreshedService.ts#L4)*

___

### LIST\_LAMBDAS

• `Const` **LIST\_LAMBDAS**: string = \` query listLambdas($serviceId: ID!) { listLambdas(serviceId: $serviceId) { ...lambdaDetailed } } ${fragments.lambdaDetailed}\`

*Defined in [GraphQL/index.ts:58](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L58)*

___

### LIST\_RUNTIMES

• `Const` **LIST\_RUNTIMES**: \"
  query listRuntimes {
    listRuntimes {
      id
      host
      language
    }
  }
\" = \` query listRuntimes { listRuntimes { id host language } }\`

*Defined in [GraphQL/index.ts:171](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L171)*

## Functions

### createFunctionWithLambda

▸ **createFunctionWithLambda**(`functionToCreate`: [CreateFunctionInput](interfaces/createfunctioninput.md), `code`: string, `updateIfExists`: boolean, `wksClient`: [WorkspaceClient](classes/workspaceclient.md), `lambdaClient`: [LambdaClient](classes/lambdaclient.md)): Promise\<any>

*Defined in [Clients/createFunctionWithLambda.ts:7](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/createFunctionWithLambda.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`functionToCreate` | [CreateFunctionInput](interfaces/createfunctioninput.md) |
`code` | string |
`updateIfExists` | boolean |
`wksClient` | [WorkspaceClient](classes/workspaceclient.md) |
`lambdaClient` | [LambdaClient](classes/lambdaclient.md) |

**Returns:** Promise\<any>

___

### ensureWSContainsRefreshedLambdaSvc

▸ **ensureWSContainsRefreshedLambdaSvc**(`wksClient`: [WorkspaceClient](classes/workspaceclient.md), `lambdaClient`: [LambdaClient](classes/lambdaclient.md)): [ensureWSContainsRefreshedLambdaSvc](README.md#ensurewscontainsrefreshedlambdasvc)

*Defined in [Clients/ensureWSContainsRefreshedService.ts:14](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/ensureWSContainsRefreshedService.ts#L14)*

Makes sure this workspace has a local lambda service.
This should be called after lambda server has created a valid endpoint.
This will also import the service into the workspace and refresh/reload.

#### Parameters:

Name | Type |
------ | ------ |
`wksClient` | [WorkspaceClient](classes/workspaceclient.md) |
`lambdaClient` | [LambdaClient](classes/lambdaclient.md) |

**Returns:** [ensureWSContainsRefreshedLambdaSvc](README.md#ensurewscontainsrefreshedlambdasvc)

Resolves to true if successful, otherwise undefined.

___

### getLambdaArgumentValues

▸ `Const`**getLambdaArgumentValues**(`lambda`: [QFunction](interfaces/qfunction.md), `wsFunction`: [QFunction](interfaces/qfunction.md)): { argument: string = arg.id; argumentRef: string = wsFunction.arguments[key].id; operation: null = null }[]

*Defined in [Clients/implementFunctionWithLambda.ts:9](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/implementFunctionWithLambda.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`lambda` | [QFunction](interfaces/qfunction.md) |
`wsFunction` | [QFunction](interfaces/qfunction.md) |

**Returns:** { argument: string = arg.id; argumentRef: string = wsFunction.arguments[key].id; operation: null = null }[]

___

### implementFunctionWithLambda

▸ `Const`**implementFunctionWithLambda**(`parentFunctionId`: string, `lambda`: any, `wksClient`: [WorkspaceClient](classes/workspaceclient.md), `lambdaClient`: [LambdaClient](classes/lambdaclient.md)): Promise\<void>

*Defined in [Clients/implementFunctionWithLambda.ts:16](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/implementFunctionWithLambda.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`parentFunctionId` | string |
`lambda` | any |
`wksClient` | [WorkspaceClient](classes/workspaceclient.md) |
`lambdaClient` | [LambdaClient](classes/lambdaclient.md) |

**Returns:** Promise\<void>

___

### makeCreateLambdaInput

▸ **makeCreateLambdaInput**(`workspace`: [WorkspaceClient](classes/workspaceclient.md), `code`: string, `inventoryFunction`: [QFunction](interfaces/qfunction.md), `sequenceNo`: number): Promise\<[QCreateLambdaInput](interfaces/qcreatelambdainput.md)>

*Defined in [Clients/constructLambda.ts:65](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/constructLambda.ts#L65)*

#### Parameters:

Name | Type |
------ | ------ |
`workspace` | [WorkspaceClient](classes/workspaceclient.md) |
`code` | string |
`inventoryFunction` | [QFunction](interfaces/qfunction.md) |
`sequenceNo` | number |

**Returns:** Promise\<[QCreateLambdaInput](interfaces/qcreatelambdainput.md)>

___

### recursivelyRemoveKey

▸ **recursivelyRemoveKey**(`obj`: any, `key`: string): any

*Defined in [Clients/helpers.ts:6](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/helpers.ts#L6)*

Recursively removes a key from an object

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | Object to remove key from |
`key` | string | Key to remove  |

**Returns:** any

___

### recursivelyRemoveKeys

▸ **recursivelyRemoveKeys**(`obj`: any, `keys`: string[]): any

*Defined in [Clients/helpers.ts:23](https://github.com/maana-io/q-assistant-client/blob/develop/src/Clients/helpers.ts#L23)*

Removes all provided keys from provided object

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | Object to remove keys from |
`keys` | string[] | List of keys to remove from object  |

**Returns:** any

## Object literals

### fragments

▪ `Const` **fragments**: object

*Defined in [GraphQL/index.ts:1](https://github.com/maana-io/q-assistant-client/blob/develop/src/GraphQL/index.ts#L1)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`lambdaDetailed` | string | \`     fragment lambdaDetailed on Lambda {       id       serviceId       runtime {         id         host         language       }       code       input {         name         kind         modifiers       }       outputKind       outputModifiers       kinds {         name         fields {           name           kind           modifiers         }       }     }   \` |
`lambdaFields` | string | \`     fragment lambdaFields on Lambda {       id       name       serviceId       runtime {         id         language       }       code       input {         name         kind         modifiers       }       outputKind       outputModifiers       kinds {         name         fields {           name           kind           modifiers         }       }     }   \` |
