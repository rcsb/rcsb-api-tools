/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * @minItems 1
 */
export type ResultsContentType = ["experimental" | "computational", ...("experimental" | "computational")[]];
/**
 * Allows obtaining the aggregations relevant to the search query. When absent, aggregations are not returned. Multi-dimensional aggregations are allowed.
 *
 * @minItems 1
 */
export type RequestOptionsFacets = [
  TermsFacet | HistogramFacet | DateHistogramFacet | RangeFacet | DateRangeFacet | CardinalityFacet | FilterFacet,
  ...(TermsFacet | HistogramFacet | DateHistogramFacet | RangeFacet | DateRangeFacet | CardinalityFacet | FilterFacet)[]
];
/**
 * Search results are ordered by the relevancy scores by default, from the most relevant matches to the least relevant matches (higher score to lower score).
 */
export type RelevanceScoreRankingOption = "score";
/**
 * The order in which to sort. Defaults to “desc”.
 */
export type SortDirection = "asc" | "desc";
/**
 * Sort options supported for results returned as groups
 */
export type SortOptionGroupsSortBy = "size" | "count";

/**
 * Provides a generic interface to represent the RCSB Search API query language.
 */
export interface SearchQuery {
  /**
   * Information about the query.
   */
  request_info?: {
    /**
     * The ID of a query is globally unique and unambiguously identifies a query.
     */
    query_id?: string;
    /**
     * The origin of the query: <br /> - 'mypdb' indicates that the query was run by the MyPDB service that allows users to have searches run periodically and have the results emailed to them; <br /> - 'system' indicates programmatic access.
     */
    src?: "ui" | "mypdb_service" | "mypdb_user" | "rcsb_test";
  };
  request_options?: RequestOptions;
  /**
   * Specifies the type of the returned identifiers.
   */
  return_type: "entry" | "polymer_entity" | "non_polymer_entity" | "polymer_instance" | "assembly" | "mol_definition";
  /**
   * Any valid query string as per the Search Aggregator query syntax is permitted. A search consists of one or more groups combined.
   */
  query?: GroupNode | TerminalNode;
}
export interface RequestOptions {
  results_content_type?: ResultsContentType;
  /**
   * Controls the additional metadata returned with search results such as scores returned by individual services and context of the match, e.g. alignments from sequence search service
   */
  results_verbosity?: "compact" | "minimal" | "verbose";
  facets?: RequestOptionsFacets;
  /**
   * Allows partitioning search results into groups
   */
  group_by?: GroupByDepositID | GroupBySequenceIdentity | GroupByUniProtAccession;
  /**
   * Determines the representation of grouped data: 'groups' - search results are divided into groups and each group is returned with all associated search hits; 'representatives' - only a single search hit is returned per group
   */
  group_by_return_type?: "groups" | "representatives";
  /**
   * @minItems 1
   */
  sort?: [SortOptionAttributes | SortOptionGroups, ...(SortOptionAttributes | SortOptionGroups)[]];
  /**
   * Pagination allows returning only a portion, rather than the whole, result set. By default, only top 10 search matches
   */
  paginate?: {
    /**
     * Specifies how many matches should be skipped from the top of the search results
     */
    start?: number;
    /**
     * Number of matched returned in the result set
     */
    rows?: number;
  };
  /**
   * Scoring algorithm to be used for scores calculation of the final result set
   */
  scoring_strategy?:
    | "combined"
    | "sequence"
    | "seqmotif"
    | "strucmotif"
    | "structure"
    | "chemical"
    | "text"
    | "text_chem"
    | "full_text";
  /**
   * When set to true, all search matches are returned. It cannot be used together with pagination or return count parameters
   */
  return_all_hits?: boolean;
  /**
   * Allows obtaining the counts only instead of identifiers. When undefined, search result identifiers are returned
   */
  return_counts?: boolean;
  /**
   * When enabled, the search results are return with profiling information, e.g. execution timings
   */
  return_explain_metadata?: boolean;
}
/**
 * This aggregation dynamically builds buckets - one per unique value
 */
export interface TermsFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "terms";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * Minimum number of items in the bin required for the bin to be returned
   */
  min_interval_population?: number;
  /**
   * Maximum number of intervals to return for a given facet
   */
  max_num_intervals?: number;
  facets?: RequestOptionsFacets;
}
/**
 * This aggregation dynamically builds fixed size (a.k.a. interval) buckets over the values. Can only be used with numeric values
 */
export interface HistogramFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "histogram";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * Size of the intervals into which a given set of values is divided
   */
  interval: number | number;
  /**
   * Minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  facets?: RequestOptionsFacets;
}
/**
 * This aggregation dynamically builds fixed size (a.k.a. interval) buckets over the values. Can only be used with date values
 */
export interface DateHistogramFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "date_histogram";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * Size of the intervals into which a given set of values is divided
   */
  interval: "year";
  /**
   * Minimum number of items in the bin required for the bin to be returned.
   */
  min_interval_population?: number;
  facets?: RequestOptionsFacets;
}
/**
 * This aggregation enables to define a set of ranges - each representing a bucket. Dedicated for numeric values
 */
export interface RangeFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "range";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * A set of ranges, each representing a bucket. Note that this aggregation includes the 'from' value and excludes the 'to' value for each range
   *
   * @minItems 1
   */
  ranges: [
    {
      /**
       * The starting value of the range.
       */
      from?: number;
      /**
       * The end of the range.
       */
      to?: number;
      [k: string]: unknown;
    },
    ...{
      /**
       * The starting value of the range.
       */
      from?: number;
      /**
       * The end of the range.
       */
      to?: number;
      [k: string]: unknown;
    }[]
  ];
  facets?: RequestOptionsFacets;
}
/**
 * This aggregation enables to define a set of ranges - each representing a bucket. Dedicated for date values with an ability to express 'from' and 'to' values as date math expression
 */
export interface DateRangeFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "date_range";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * A set of ranges, each representing a bucket. Note that this aggregation includes the 'from' value and excludes the 'to' value for each range.
   *
   * @minItems 1
   */
  ranges: [
    {
      /**
       * The starting value of the range.
       */
      from?: string;
      /**
       * The end of the range.
       */
      to?: string;
    },
    ...{
      /**
       * The starting value of the range.
       */
      from?: string;
      /**
       * The end of the range.
       */
      to?: string;
    }[]
  ];
  facets?: RequestOptionsFacets;
}
/**
 * A single-value metrics aggregation that calculates an approximate count of distinct values
 */
export interface CardinalityFacet {
  /**
   * Specifies the name of the aggregation
   */
  name: string;
  /**
   * Specifies the type of the aggregation
   */
  aggregation_type: "cardinality";
  /**
   * Specifies the full attribute name to aggregate on
   */
  attribute: string;
  /**
   * Allows to trade memory for accuracy, and defines a unique count below which counts are expected to be close to accurate
   */
  precision_threshold?: number;
}
/**
 * A single bucket aggregation that narrows the set of documents to those that match a filter query
 */
export interface FilterFacet {
  filter: FilterQueryGroupNode | FilterQueryTerminalNode;
  facets: RequestOptionsFacets;
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
  /**
   * An ID that is unique within the enclosing query.
   */
  node_id?: number;
  /**
   * The search service that is responsible for running the query and retrieving the search results.
   */
  service: "text" | "text_chem";
  parameters?: AttributeTextQueryParameters;
  [k: string]: unknown;
}
export interface AttributeTextQueryParameters {
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
    | "contains_words"
    | "contains_phrase"
    | "exact_match"
    | "in"
    | "exists";
  /**
   * Allows case sensitive matching of the value with the indexed attribute values when set to true. Default is false which means the case insensitivity of matching.
   */
  case_sensitive?: boolean;
}
export interface Range {
  /**
   * The starting value of the range.
   */
  from?: number;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  /**
   * The end of the range.
   */
  to?: number;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
}
export interface DateRange {
  /**
   * The starting value of the range.
   */
  from?: string;
  /**
   * Indicated an inclusive lower bound.
   */
  include_lower?: boolean;
  /**
   * The end of the range.
   */
  to?: string;
  /**
   * Indicated an inclusive upper bound.
   */
  include_upper?: boolean;
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
  direction?: SortDirection;
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
export interface SortOptionGroups {
  sort_by: RelevanceScoreRankingOption | SortOptionGroupsSortBy;
  direction?: SortDirection;
}
export interface GroupNode {
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
  nodes: [TerminalNode | GroupNode, ...(TerminalNode | GroupNode)[]];
  /**
   * A textual description of what the node represents.
   */
  label?: string;
}
/**
 * A terminal node is an atomic-level element within a query.
 */
export interface TerminalNode {
  /**
   * The type of the node.
   */
  type: "terminal";
  /**
   * An ID that is unique within the enclosing query.
   */
  node_id?: number;
  /**
   * The search service that is responsible for running the query and retrieving the search results.
   */
  service: "full_text" | "text" | "text_chem" | "sequence" | "structure" | "chemical" | "seqmotif" | "strucmotif";
  /**
   * Search parameters. Parameters are specific to the search service.
   */
  parameters?:
    | FullTextQueryParameters
    | AttributeTextQueryParameters
    | SequenceQueryParameters
    | StructureQueryParameters
    | ChemicalQueryFormulaParameters
    | ChemicalQueryDescriptorParameters
    | SeqmotifQueryParameters
    | StrucmotifQueryParameters;
  /**
   * A textual description of what the node represents.
   */
  label?: string;
}
export interface FullTextQueryParameters {
  /**
   * The search term(s).
   */
  value: string;
}
export interface SequenceQueryParameters {
  /**
   * Protein or nucleotide sequence
   */
  value: string;
  /**
   * Identifies a specific search scope
   */
  target: "pdb_protein_sequence" | "pdb_rna_sequence" | "pdb_dna_sequence";
  /**
   * Hits with sequence identity below this cutoff value are filtered out (range 0-1)
   */
  identity_cutoff?: number;
  /**
   * Hits with e-value above this cutoff value are filtered out
   */
  evalue_cutoff?: number;
}
export interface StructureQueryParameters {
  value: StructureQueryChainParameters | StructureQueryAssemblyParameters | StructureQueryFileParameters;
  /**
   * The operator allows specifying the evaluation expression.
   */
  operator?: "strict_shape_match" | "relaxed_shape_match";
}
/**
 * Compound structure identifier that includes PDB code and chain identifier.
 */
export interface StructureQueryChainParameters {
  /**
   * The PDB code that defines the structure.
   */
  entry_id: string;
  /**
   * The chain identifier.
   */
  asym_id: string;
}
/**
 * Compound structure identifier that includes PDB code and assembly identifier
 */
export interface StructureQueryAssemblyParameters {
  /**
   * The PDB code that defines the structure.
   */
  entry_id: string;
  /**
   * The assembly identifier.
   */
  assembly_id: string;
}
/**
 * Upload Base64-encoded file in one of the following formats: cif, bcif, pdb
 */
export interface StructureQueryFileParameters {
  /**
   * File content converted to a Base64 string
   */
  data: string;
  format: "cif" | "bcif" | "pdb";
}
export interface ChemicalQueryFormulaParameters {
  /**
   * Type of chemical search.
   */
  type: "formula";
  /**
   * Molecular formula.
   */
  value: string;
  /**
   * Find formulas satisfying only a subset of the query conditions.
   */
  match_subset?: boolean;
}
export interface ChemicalQueryDescriptorParameters {
  /**
   * Type of chemical search.
   */
  type: "descriptor";
  /**
   * SMILES or InChI chemical descriptor.
   */
  value: string;
  /**
   * Type of chemical descriptor (SMILES or InChI).
   */
  descriptor_type: "SMILES" | "InChI";
  /**
   * Qualitative graph matching or fingerprint comparison criteria, with adding the aromatic criteria. The following graph matching searches use a fingerprint prefilter so these are designed to find only similar molecules. These graph matching comparisons include: graph-exact (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, valence degree, atom hydrogen count), graph-strict (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, ring membership and valence degree), graph-relaxed (atom type, formal charge, bond type), graph-relaxed-stereo (atom type, formal charge, bond type, atom/bond stereochemistry), fingerprint-similarity (TREE and MACCS). The following graph matching searches perform an exhaustive substructure search with no pre-screening. These substructure graph matching comparisons include: sub-struct-graph-exact (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, valence degree, atom hydrogen count), sub-struct-graph-strict (atom type, formal charge, aromaticity, bond order, atom/bond stereochemistry, ring membership and valence degree), sub-struct-graph-relaxed (atom type, formal charge, bond type), sub-struct-graph-relaxed-stereo (atom type, formal charge, bond type, atom/bond stereochemistry)
   */
  match_type?:
    | "graph-exact"
    | "graph-strict"
    | "graph-relaxed"
    | "graph-relaxed-stereo"
    | "fingerprint-similarity"
    | "sub-struct-graph-exact"
    | "sub-struct-graph-strict"
    | "sub-struct-graph-relaxed"
    | "sub-struct-graph-relaxed-stereo";
}
export interface SeqmotifQueryParameters {
  /**
   * Protein sequence pattern.
   */
  value: string;
  /**
   * Identifies a specific search scope.
   */
  target: "pdb_protein_sequence" | "pdb_rna_sequence" | "pdb_dna_sequence";
  /**
   * Identifies the pattern type of the value parameter.
   */
  pattern_type: "simple" | "prosite" | "regex";
}
export interface StrucmotifQueryParameters {
  value: StrucmotifQueryEntryParameters | StrucmotifQueryFileParameters;
  /**
   * Allowed backbone distance tolerance in Angstrom.
   */
  backbone_distance_tolerance?: number;
  /**
   * Allowed side-chain distance tolerance in Angstrom.
   */
  side_chain_distance_tolerance?: number;
  /**
   * Allowed angle tolerance in multiples of 20 degrees.
   */
  angle_tolerance?: number;
  /**
   * Threshold above which hits will be filtered by RMSD.
   */
  rmsd_cutoff?: number;
  /**
   * Specifies all allowed amino acids at a certain position. You can specify non more than 16 allowed residues in total
   *
   * @minItems 1
   */
  exchanges?: [
    {
      residue_id: ResidueIdentifier;
      /**
       * @minItems 1
       * @maxItems 4
       */
      allowed?:
        | [
            | "ALA"
            | "CYS"
            | "ASP"
            | "GLU"
            | "PHE"
            | "GLY"
            | "HIS"
            | "ILE"
            | "LYS"
            | "LEU"
            | "MET"
            | "ASN"
            | "PRO"
            | "GLN"
            | "ARG"
            | "SER"
            | "THR"
            | "VAL"
            | "TRP"
            | "TYR"
            | "A"
            | "C"
            | "DA"
            | "DC"
            | "DG"
            | "G"
            | "T"
            | "U"
            | "UNK"
            | "N"
            | "?"
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ];
    },
    ...{
      residue_id: ResidueIdentifier;
      /**
       * @minItems 1
       * @maxItems 4
       */
      allowed?:
        | [
            | "ALA"
            | "CYS"
            | "ASP"
            | "GLU"
            | "PHE"
            | "GLY"
            | "HIS"
            | "ILE"
            | "LYS"
            | "LEU"
            | "MET"
            | "ASN"
            | "PRO"
            | "GLN"
            | "ARG"
            | "SER"
            | "THR"
            | "VAL"
            | "TRP"
            | "TYR"
            | "A"
            | "C"
            | "DA"
            | "DC"
            | "DG"
            | "G"
            | "T"
            | "U"
            | "UNK"
            | "N"
            | "?"
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ]
        | [
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            ),
            (
              | "ALA"
              | "CYS"
              | "ASP"
              | "GLU"
              | "PHE"
              | "GLY"
              | "HIS"
              | "ILE"
              | "LYS"
              | "LEU"
              | "MET"
              | "ASN"
              | "PRO"
              | "GLN"
              | "ARG"
              | "SER"
              | "THR"
              | "VAL"
              | "TRP"
              | "TYR"
              | "A"
              | "C"
              | "DA"
              | "DC"
              | "DG"
              | "G"
              | "T"
              | "U"
              | "UNK"
              | "N"
              | "?"
            )
          ];
    }[]
  ];
  /**
   * Optionally: Stop after accepting this many hits.
   */
  limit?: number;
  /**
   * Which atoms to consider to compute RMSD scores and transformations.
   */
  atom_pairing_scheme?: "ALL" | "BACKBONE" | "SIDE_CHAIN" | "PSEUDO_ATOMS";
  /**
   * Specifies how query motifs are pruned (i.e. simplified). The default option 'KRUSKAL' determines the minimum spanning tree of residue pairs in the query. This leads to less stringent queries and faster results.
   */
  motif_pruning_strategy?: "NONE" | "KRUSKAL";
  /**
   * If the list of structure identifiers is specified, the search will only consider those structures
   *
   * @minItems 1
   */
  allowed_structures?: [string, ...string[]];
  /**
   * If the list of structure identifiers is specified, the search will exclude those structures from the search space
   *
   * @minItems 1
   */
  excluded_structures?: [string, ...string[]];
}
/**
 * Compound structure identifier that includes PDB code and residue identifiers.
 */
export interface StrucmotifQueryEntryParameters {
  /**
   * The PDB code that defines the structure with the query motif.
   */
  entry_id: string;
  /**
   * Provides the set of residue identifiers that define the query.
   *
   * @minItems 2
   * @maxItems 10
   */
  residue_ids:
    | [ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
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
/**
 * Upload Base64-encoded file in one of the following formats: cif, bcif
 */
export interface StrucmotifQueryFileParameters {
  /**
   * File content converted to a Base64 string
   */
  data: string;
  format: "cif" | "bcif";
  /**
   * Provides the set of residue identifiers that define the query. Can be undefined if the submitted file property contains an extracted motif
   *
   * @minItems 2
   * @maxItems 10
   */
  residue_ids?:
    | [ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier, ResidueIdentifier]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ]
    | [
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier,
        ResidueIdentifier
      ];
}
