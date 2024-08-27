import {
    AnnotationReference,
    SequenceAlignments,
    SequenceAnnotations,
    SequenceReference
} from "../src/RcsbGraphQL/Types/Borrego/GqlTypes";
import {GraphQLRequest} from "../src/RcsbGraphQL/GraphQLRequest";
import fs from "fs";


describe('Testing Sequence Coordinates request', ()=>{

    const sequenceCoordinatesClient: GraphQLRequest = new GraphQLRequest("sequence-coordinates" , {fetch: fetch as any});

    test('Testing Sequence Coordinates alignments response', async ()=>{
        const sequenceAlignmentsQuery = fs.readFileSync(__dirname+"/Queries/SequenceCoordinates/Alignments.graphql", "utf-8");
        const response = await sequenceCoordinatesClient.request<{queryId: string; from: SequenceReference, to:SequenceReference},{alignments: SequenceAlignments}>(
            {
                queryId: "4HHB_1",
                from: SequenceReference.PdbEntity,
                to:SequenceReference.NcbiProtein
            },
            sequenceAlignmentsQuery
        );
        expect(response).toBeDefined();
        expect(response.alignments).toBeDefined();
        expect(response.alignments.target_alignments?.length).toBeGreaterThan(1);
        response.alignments.target_alignments?.forEach(ta=>{
            expect(ta?.target_id).toBeDefined();
            expect(ta?.aligned_regions?.length).toEqual(1);
        });
    });

    test('Testing Sequence Coordinates annotations response', async ()=> {
        const sequenceAnnotationsQuery = fs.readFileSync(__dirname+"/Queries/SequenceCoordinates/Annotations.graphql", "utf-8");
        const response = await sequenceCoordinatesClient.request<{
            queryId: string;
            reference: SequenceReference,
            sources: AnnotationReference[]
        },{
            annotations: SequenceAnnotations[]
        }>(
            {
                queryId: "2UZI.C",
                reference: SequenceReference.PdbInstance,
                sources: [
                    AnnotationReference.Uniprot,
                    AnnotationReference.PdbInterface,
                    AnnotationReference.PdbEntity,
                    AnnotationReference.PdbInstance
                ]
            },
            sequenceAnnotationsQuery
        );
        expect(response).toBeDefined();
        expect(response.annotations.length).toBeGreaterThan(0);
        response.annotations.forEach(a=>{
            expect(a.target_id).toBeDefined();
            expect(a.source).toBeDefined();
            expect(a.features?.length).toBeGreaterThan(0);
            a.features?.forEach(f=>{
                expect(f?.type).toBeDefined();
                expect(f?.feature_positions?.length).toBeGreaterThan(0)
            })
        });
    });

});