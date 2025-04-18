/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * RCSB Exchange Database JSON schema derived from the repository_holdings content type schema. This schema supports collection repository_holdings_unreleased_entry version 3.5.0. This schema is hosted in repository https://github.com/rcsb/py-rcsb.db/tree/master/rcsb.db/data/json-schema/json-schema-min-repository_holdings_unreleased_entry.json and follows JSON schema specification version 4
 */
export interface SchemaRepositoryHoldingsCollectionRepositoryHoldingsUnreleasedEntryVersion350 {
    /**
     * @minItems 1
     */
    rcsb_repository_holdings_prerelease?: [
        {
            /**
             * The polymer entity identifier.
             */
            entity_id: string;
            /**
             * Chemical sequence expressed as string of one-letter amino acid codes.
             *  Modifications and non-standard amino acids are represented parenthetically
             *  as 3-letter codes.
             */
            seq_one_letter_code?: string;
        },
        ...{
            /**
             * The polymer entity identifier.
             */
            entity_id: string;
            /**
             * Chemical sequence expressed as string of one-letter amino acid codes.
             *  Modifications and non-standard amino acids are represented parenthetically
             *  as 3-letter codes.
             */
            seq_one_letter_code?: string;
        }[]
    ];
    rcsb_repository_holdings_unreleased?: {
        audit_authors?: string[];
        /**
         * The prerelease status for the molecular sequences for the entry .
         */
        author_prerelease_sequence_status?: "HOLD FOR PUBLICATION" | "HOLD FOR RELEASE" | "RELEASE IMMEDIATELY" | "RELEASE NOW";
        /**
         * The entry deposition date.
         */
        deposit_date?: string;
        /**
         * The deposition date of entry coordinate data.
         */
        deposit_date_coordinates?: string;
        /**
         * The deposition date of entry NMR restraint data.
         */
        deposit_date_nmr_restraints?: string;
        /**
         * The deposition date of entry structure factor data.
         */
        deposit_date_structure_factors?: string;
        /**
         * The embargo date of entry coordinate data.
         */
        hold_date_coordinates?: string;
        /**
         * The embargo date of entry NMR restraint data.
         */
        hold_date_nmr_restraints?: string;
        /**
         * The embargo date of entry structure factor data.
         */
        hold_date_structure_factors?: string;
        /**
         * A flag to indicate the molecular sequences for an unreleased entry are available.
         */
        prerelease_sequence_available_flag?: "N" | "Y";
        /**
         * The release date for the entry.
         */
        release_date?: string;
        /**
         * The release status for the entry.
         */
        status_code?: "AUCO" | "AUTH" | "HOLD" | "HPUB" | "POLC" | "PROC" | "REFI" | "REPL" | "WAIT" | "WDRN";
        /**
         * The entry title.
         */
        title?: string;
    };
    rcsb_repository_holdings_unreleased_entry_container_identifiers?: {
        /**
         * The PDB entry accession code.
         */
        entry_id: string;
        /**
         * The RCSB entry identifier.
         */
        rcsb_id?: string;
        /**
         * Identifier for the data exchange status record.
         */
        update_id?: string;
    };
    /**
     * The RCSB entry identifier.
     */
    rcsb_id: string;
}
