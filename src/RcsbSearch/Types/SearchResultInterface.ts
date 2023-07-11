/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Specifies the type of the returned identifiers.
 */
export type ReturnType =
  | "entry"
  | "polymer_entity"
  | "non_polymer_entity"
  | "polymer_instance"
  | "assembly"
  | "mol_definition";
/**
 * Search results are ordered by the relevancy scores by default, from the most relevant matches to the least relevant matches (higher score to lower score).
 */
export type RelevanceScoreRankingOption = "score";
export type NumericValue = number;
export type DateValue = string;
/**
 * The order in which to sort. Defaults to “desc”.
 */
export type SortDirection = "asc" | "desc";

/**
 * Provides a generic interface to represent the RCSB PDB search query result
 */
export interface QueryResult {
  /**
   * The query ID of the result set
   */
  query_id: string;
  result_type: ReturnType;
  /**
   * The total number of hits returned by search
   */
  total_count: number;
  /**
   * The number of hits returned by group_by operation
   */
  group_by_count?: number;
  /**
   * The number returned by group_by operation that counts hits that are not members of requested groups
   */
  ungrouped_count?: number;
  explain_metadata?: ExplainMetadata;
  /**
   * A list of search result identifiers including each identifier's score and the service query where the identifier was rendered from.
   *
   * @minItems 1
   */
  result_set?: [string | ServiceIdentifier, ...(string | ServiceIdentifier)[]];
  /**
   * Provides summaries of the search result by aggregating the result data on different attributes.
   *
   * @minItems 1
   */
  facets?: [BucketFacet | SingleValueMetricsFacet, ...(BucketFacet | SingleValueMetricsFacet)[]];
  /**
   * Allows partitioning search results into groups
   */
  group_by?: GroupByDepositID | GroupBySequenceIdentity | GroupByUniProtAccession;
  /**
   * A list of search result identifiers returned as groups
   *
   * @minItems 1
   */
  group_set?: [string | GroupIdentifier, ...(string | GroupIdentifier)[]];
}
/**
 * Explains the query execution time.
 */
export interface ExplainMetadata {
  /**
   * The total time taken in milliseconds to produce the query result
   */
  total_timing: number;
  /**
   * The time taken in milliseconds to produce facets
   */
  facet_timing?: number;
  /**
   * The time taken in milliseconds to sort the result identifiers
   */
  sort_timing?: number;
  /**
   * The time taken in milliseconds to group the result identifiers
   */
  grouping_timing?: number;
  /**
   * The time taken in milliseconds in retrieving the result identifiers from each service type query node. Multiple text service nodes are bundled to a single text service query.
   */
  terminal_node_timings: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ServiceIdentifier {
  /**
   * A result identifier, e.g. entry_id, entity_id, assembly_id, etc.
   */
  identifier: string;
  /**
   * The calculated score based on the normalized score from each service and the scoring strategy.
   */
  score: number;
  /**
   * Shows the query node that rendered the identifier and the scoring details.
   *
   * @minItems 1
   */
  services?: [
    {
      /**
       * The search service that is responsible for running the query and retrieving the search results.
       */
      service_type:
        | "full_text"
        | "text"
        | "text_chem"
        | "sequence"
        | "structure"
        | "chemical"
        | "seqmotif"
        | "strucmotif";
      /**
       * Provides the result identifier scoring details.
       *
       * @minItems 1
       */
      nodes: [
        {
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        },
        ...{
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        }[]
      ];
      [k: string]: unknown;
    },
    ...{
      /**
       * The search service that is responsible for running the query and retrieving the search results.
       */
      service_type:
        | "full_text"
        | "text"
        | "text_chem"
        | "sequence"
        | "structure"
        | "chemical"
        | "seqmotif"
        | "strucmotif";
      /**
       * Provides the result identifier scoring details.
       *
       * @minItems 1
       */
      nodes: [
        {
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        },
        ...{
          /**
           * The node ID pertaining to the input search query.
           */
          node_id: number;
          /**
           * The original score provided by the service provider.
           */
          original_score: number;
          /**
           * The normalized score calculated using the normalization tool.
           */
          norm_score: number;
          /**
           * Data about the context of the match, specific to the service_type.
           */
          match_context?: (
            | SequenceServiceMatchContext
            | ShapeServiceMatchContext
            | SeqmotifServiceMatchContext
            | StrucmotifServiceMatchContext
          )[];
          [k: string]: unknown;
        }[]
      ];
      [k: string]: unknown;
    }[]
  ];
}
export interface SequenceServiceMatchContext {
  /**
   * Sequence identity between query and subject. Range: 0-1.
   */
  sequence_identity: number;
  /**
   * The match's e-value.
   */
  evalue: number;
  /**
   * The match's bit score.
   */
  bitscore: number;
  /**
   * The length of the alignment.
   */
  alignment_length?: number;
  /**
   * The number of mismatches in the alignment.
   */
  mismatches?: number;
  /**
   * The number of gap openings in the alignment.
   */
  gaps_opened?: number;
  /**
   * The start index (1-based) in the query sequence.
   */
  query_beg?: number;
  /**
   * The end index (1-based) in the query sequence.
   */
  query_end?: number;
  /**
   * The start index (1-based) in the subject sequence.
   */
  subject_beg?: number;
  /**
   * The end index (1-based) in the subject sequence.
   */
  subject_end?: number;
  /**
   * The length of the query sequence's aligned region.
   */
  query_length?: number;
  /**
   * The length of the subject sequence's aligned region.
   */
  subject_length?: number;
  /**
   * The aligned query sequence (including gaps, as '-') over the aligned region query_beg to query_end
   */
  query_aligned_seq?: string;
  /**
   * The aligned subject sequence (including gaps, as '-') over the aligned region subject_beg to subject_end
   */
  subject_aligned_seq?: string;
}
export interface ShapeServiceMatchContext {
  /**
   * The BioZernike score, expressing the likelihood of the match being relevant. Range: 0-1.
   */
  biozernike_score: number;
  /**
   * The score calculated from the GEO descriptors. Range: 0-1.
   */
  geo_score: number;
}
export interface SeqmotifServiceMatchContext {
  /**
   * The start index (1-based) in the matched sequence.
   */
  start: number;
  /**
   * The end index (1-based) in the matched sequence.
   */
  end: number;
}
export interface StrucmotifServiceMatchContext {
  /**
   * Provides the set of residue identifiers that were matched to the query.
   */
  residue_ids: ResidueIdentifier[];
  /**
   * The root-mean-square deviation between atoms of the query and this particular match context.
   */
  score: number;
  /**
   * Three-letter-codes of matched positions.
   */
  residue_types?: string[];
  /**
   * 4x4 transformation matrix in a column major (j * 4 + i indexing) format
   *
   * @minItems 16
   * @maxItems 16
   */
  transformation?: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
}
export interface ResidueIdentifier {
  /**
   * Chain identifier of this residue.
   */
  label_asym_id: string;
  /**
   * Identifier of the assembly generating operation that was used to determine the coordinates of this residue. Chaining of operations is expressed by '1stx2nd'.
   */
  struct_oper_id?: string;
  /**
   * Sequence identifier of this residue.
   */
  label_seq_id: number;
}
export interface BucketFacet {
  /**
   * Aggregation name
   */
  name: string;
  /**
   * A list of buckets built by executing an aggregation
   *
   * @minItems 1
   */
  buckets: [
    {
      /**
       * Describes the content of the bucket
       */
      label: string;
      /**
       * Number of items in the bucket
       */
      population: number;
      facets?: (BucketFacet | SingleValueMetricsFacet)[];
      [k: string]: unknown;
    },
    ...{
      /**
       * Describes the content of the bucket
       */
      label: string;
      /**
       * Number of items in the bucket
       */
      population: number;
      facets?: (BucketFacet | SingleValueMetricsFacet)[];
      [k: string]: unknown;
    }[]
  ];
}
export interface SingleValueMetricsFacet {
  /**
   * Aggregation name
   */
  name: string;
  value: number | number;
}
export interface GroupByDepositID {
  /**
   * The method used to group search hits on the basis of common identifier for a group of entries deposited as a collection
   */
  aggregation_method: "matching_deposit_group_id";
  ranking_criteria_type?: SortOptionAttributes;
}
export interface SortOptionAttributes {
  sort_by: RelevanceScoreRankingOption | string;
  filter?: FilterQueryGroupNode | FilterQueryTerminalNode;
  direction?: SortDirection;
}
export interface FilterQueryGroupNode {
  /**
   * The type of the node.
   */
  type: "group";
  /**
   * Boolean operator connects and defines the relationship between the child nodes.
   */
  logical_operator: "or" | "and";
  /**
   * @minItems 1
   */
  nodes: [FilterQueryTerminalNode | FilterQueryGroupNode, ...(FilterQueryTerminalNode | FilterQueryGroupNode)[]];
}
/**
 * A terminal node is an atomic-level element within a query.
 */
export interface FilterQueryTerminalNode {
  /**
   * The type of the node.
   */
  type: "terminal";
  parameters: {
    /**
     * The search term(s). Can be a single or multiple words, numbers, dates, date math expressions, or ranges.
     */
    value?: string | number | boolean | Range | DateRange | [string | number | number, ...(string | number | number)[]];
    /**
     * The search field. Must exist in the current schema.
     */
    attribute: string;
    /**
     * Indicates if the operator is negated.
     */
    negation?: boolean;
    /**
     * The operator allows specifying the evaluation expression.
     */
    operator:
      | "equals"
      | "greater"
      | "greater_or_equal"
      | "less"
      | "less_or_equal"
      | "range"
      | "exact_match"
      | "in"
      | "exists";
    /**
     * Allows case sensitive matching of the value with the indexed attribute values when set to true. Default is false which means the case insensitivity of matching.
     */
    case_sensitive?: boolean;
  };
  [k: string]: unknown;
}
export interface Range {
  from?: NumericValue;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  to?: NumericValue;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
}
export interface DateRange {
  from?: DateValue;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  to?: DateValue;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
}
export interface GroupBySequenceIdentity {
  /**
   * The method used to group search hits on the basis of protein sequence clusters that meet a predefined identity threshold
   */
  aggregation_method: "sequence_identity";
  similarity_cutoff: 100 | 95 | 90 | 70 | 50 | 30;
  ranking_criteria_type?: SortOptionAttributes;
}
export interface GroupByUniProtAccession {
  /**
   * The method used to group search hits on the basis of common UniProt accession
   */
  aggregation_method: "matching_uniprot_accession";
  /**
   * Predefined set of criteria used to determine group members ranking
   */
  ranking_criteria_type?: SortOptionAttributes | UniprotAccessionGroupRankingOption;
}
export interface UniprotAccessionGroupRankingOption {
  sort_by: "coverage";
}
export interface GroupIdentifier {
  /**
   * Group identifier
   */
  identifier: string;
  /**
   * The relevance score for the group given the query, calculated from the members relevance scores. Highest is more relevant. From 0 to 1
   */
  score: number;
  /**
   * The number of group members that match the search query
   */
  count?: number;
  /**
   * The group members that match the query
   */
  result_set: ServiceIdentifier[];
}
