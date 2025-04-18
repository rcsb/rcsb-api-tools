/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * JSON schema for core PubMed collection in RCSB Data Warehouse.
 */
export interface CorePubMed {
    /**
     * Unique integer value assigned to each PubMed record.
     */
    rcsb_id?: string;
    rcsb_pubmed_container_identifiers: {
        /**
         * UID assigned to each PubMed record.
         */
        pubmed_id?: number;
    };
    /**
     * Unique integer value assigned to each PubMed Central record.
     */
    rcsb_pubmed_central_id?: string;
    /**
     * Persistent identifier used to provide a link to an article location on the Internet.
     */
    rcsb_pubmed_doi?: string;
    /**
     * A concise, accurate and factual mini-version of the paper contents.
     */
    rcsb_pubmed_abstract_text?: string;
    /**
     * The institution(s) that the author is affiliated with. Multiple affiliations per author are allowed.
     *
     * @minItems 1
     */
    rcsb_pubmed_affiliation_info?: [string, ...string[]];
    /**
     * NLM controlled vocabulary, Medical Subject Headings (MeSH), is used to characterize the content of the articles represented by MEDLINE citations.
     *
     * @minItems 1
     */
    rcsb_pubmed_mesh_descriptors?: [string, ...string[]];
    /**
     * Members of the MeSH classification lineage.
     *
     * @minItems 1
     */
    rcsb_pubmed_mesh_descriptors_lineage?: [
        {
            /**
             * Identifier for MeSH classification term.
             */
            id?: string;
            /**
             * MeSH classification term.
             */
            name?: string;
            /**
             * Hierarchy depth.
             */
            depth?: number;
        },
        ...{
            /**
             * Identifier for MeSH classification term.
             */
            id?: string;
            /**
             * MeSH classification term.
             */
            name?: string;
            /**
             * Hierarchy depth.
             */
            depth?: number;
        }[]
    ];
}
