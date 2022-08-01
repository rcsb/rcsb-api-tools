/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * RCSB Exchange Database JSON schema derived from the repository_holdings content type schema. This schema supports collection repository_holdings_removed_entry version 3.3.0. This schema is hosted in repository https://github.com/rcsb/py-rcsb.db/tree/master/rcsb.db/data/json-schema/json-schema-min-repository_holdings_removed_entry.json and follows JSON schema specification version 4
 */
export interface SchemaRepositoryHoldingsCollectionRepositoryHoldingsRemovedEntryVersion330 {
  rcsb_repository_holdings_insilico_models?: {
    audit_authors?: string[];
    /**
     * The entry deposition date.
     */
    deposit_date?: string;
    id_codes_replaced_by?: string[];
    /**
     * The release date for the entry.
     */
    release_date?: string;
    /**
     * The removal date for the entry.
     */
    remove_date?: string;
    /**
     * The release status for the entry.
     */
    status_code?: "OBS" | "TRSF" | "WDRN";
    /**
     * The entry title.
     */
    title?: string;
  };
  rcsb_repository_holdings_removed?: {
    audit_authors?: string[];
    /**
     * The entry deposition date.
     */
    deposit_date?: string;
    /**
     * The entry title.
     */
    details?: string;
    id_codes_replaced_by?: string[];
    /**
     * The initial date the entry was released in the PDB repository.
     */
    release_date?: string;
    /**
     * The date the entry was removed from the PDB repository.
     */
    remove_date?: string;
    repository_content_types?: (
      | "Combined NMR data (NEF)"
      | "Combined NMR data (NMR-STAR)"
      | "NMR chemical shifts"
      | "NMR restraints V1"
      | "NMR restraints V2"
      | "assembly PDB"
      | "assembly mmCIF"
      | "entry PDB"
      | "entry PDB bundle"
      | "entry PDBML"
      | "entry mmCIF"
      | "structure factors"
    )[];
    /**
     * The entry title.
     */
    title?: string;
  };
  /**
   * @minItems 1
   */
  rcsb_repository_holdings_removed_audit_author?: [
    {
      /**
       * Name of the audit author of the entry.
       */
      audit_author?: string;
      /**
       * An ordinal identifier for an audit author in an entry.
       */
      ordinal_id: number;
    },
    ...{
      /**
       * Name of the audit author of the entry.
       */
      audit_author?: string;
      /**
       * An ordinal identifier for an audit author in an entry.
       */
      ordinal_id: number;
    }[]
  ];
  rcsb_repository_holdings_removed_entry_container_identifiers?: {
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
  rcsb_repository_holdings_superseded?: {
    id_codes_superseded?: string[];
  };
  rcsb_repository_holdings_transferred?: {
    audit_authors?: string[];
    /**
     * The entry deposition date.
     */
    deposit_date?: string;
    /**
     * The release date for the entry.
     */
    release_date?: string;
    /**
     * The prerelease status for the molecular sequences for the entry .
     */
    remote_accession_code?: string;
    /**
     * For the transferred content, the remote repository name.
     */
    remote_repository_name?: string;
    repository_content_types?: (
      | "Combined NMR data (NEF)"
      | "Combined NMR data (NMR-STAR)"
      | "NMR chemical shifts"
      | "NMR restraints"
      | "coordinates"
      | "structure factors"
    )[];
    /**
     * The release status for the entry.
     */
    status_code?: "TRSF";
    /**
     * The entry title.
     */
    title?: string;
  };
  /**
   * The RCSB entry identifier.
   */
  rcsb_id: string;
}
