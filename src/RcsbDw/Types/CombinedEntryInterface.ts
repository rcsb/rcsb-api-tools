/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * RCSB Exchange Database JSON schema derived from the repository_holdings content type schema. This schema supports collection repository_holdings_combined_entry version 1.0.0. This schema is hosted in repository https://github.com/rcsb/py-rcsb.db/tree/master/rcsb.db/data/json-schema/json-schema-min-repository_holdings_combined_entry.json and follows JSON schema specification version 4
 */
export interface SchemaRepositoryHoldingsCollectionRepositoryHoldingsCombinedEntryVersion100 {
  rcsb_repository_holdings_combined?: {
    /**
     * The latest superseding PDB accession code for the removed entry.
     */
    id_code_replaced_by_latest?: string;
    /**
     * The status category for the entry.
     */
    status?: "CURRENT" | "REMOVED" | "UNRELEASED";
    /**
     * The status code for the entry.
     */
    status_code?:
      | "AUCO"
      | "AUTH"
      | "HOLD"
      | "HPUB"
      | "OBS"
      | "POLC"
      | "PROC"
      | "REFI"
      | "REL"
      | "REPL"
      | "RMVD"
      | "TRSF"
      | "WAIT"
      | "WDRN";
  };
  rcsb_repository_holdings_combined_entry_container_identifiers?: {
    /**
     * The PDB entry accession code.
     */
    entry_id: string;
    /**
     * The RCSB entry identifier.
     */
    rcsb_id?: string;
    /**
     * Identifier for the current data exchange status record.
     */
    update_id?: string;
  };
  /**
   * The RCSB entry identifier.
   */
  rcsb_id: string;
}