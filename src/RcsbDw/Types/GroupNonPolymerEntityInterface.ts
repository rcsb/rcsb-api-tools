/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface GroupNonPolymerEntity {
  /**
   * A unique textual identifier for a group
   */
  rcsb_id: string;
  rcsb_group_container_identifiers: {
    /**
     * A unique textual identifier for a group
     */
    group_id: string;
    /**
     * A unique group provenance identifier
     */
    group_provenance_id:
      | "provenance_sequence_identity"
      | "provenance_matching_uniprot_accession"
      | "provenance_matching_deposit_group_id"
      | "provenance_matching_chemical_component_id";
    /**
     * Member identifiers representing a higher level in the groping hierarchy that has parent-child relationship
     *
     * @minItems 1
     */
    parent_member_ids?: [string, ...string[]];
    /**
     * Member identifiers representing a group
     *
     * @minItems 1
     */
    group_member_ids: [string, ...string[]];
  };
  rcsb_group_info: {
    group_name?: string;
    group_description?: string;
    /**
     * Granularity of group members identifiers
     */
    group_members_granularity:
      | "assembly"
      | "entry"
      | "polymer_entity"
      | "non_polymer_entity"
      | "polymer_entity_instance";
    group_members_count: number;
    [k: string]: unknown;
  };
  rcsb_group_statistics?: {
    /**
     * The desired lower limit for the similarity between two members that belong to the same group
     */
    similarity_cutoff?: number;
    /**
     * Similarity score between two least similar group members
     */
    similarity_score_min?: number;
    /**
     * Similarity score between two most similar group members
     */
    similarity_score_max?: number;
  };
  rcsb_group_accession_info?: {
    /**
     * Identifies the version of the groups solution
     */
    version: number;
  };
  /**
   * @minItems 1
   */
  rcsb_group_related?: [
    {
      /**
       * A unique code assigned to a reference related the group
       */
      resource_accession_code?: string;
      /**
       * Defines the type of the resource describing related references
       */
      resource_name?: string;
      [k: string]: unknown;
    },
    ...{
      /**
       * A unique code assigned to a reference related the group
       */
      resource_accession_code?: string;
      /**
       * Defines the type of the resource describing related references
       */
      resource_name?: string;
      [k: string]: unknown;
    }[]
  ];
}
