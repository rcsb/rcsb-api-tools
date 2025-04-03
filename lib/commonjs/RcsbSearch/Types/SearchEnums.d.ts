export declare enum RequestOptionsResultsVerbosity {
    Compact = "compact",
    Minimal = "minimal",
    Verbose = "verbose"
}
export declare enum RelevanceScoreRankingOption {
    Score = "score"
}
export declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SortOptionGroupsSortBy {
    Size = "size",
    Count = "count"
}
export declare enum ReturnType {
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerInstance = "polymer_instance",
    Assembly = "assembly",
    MolDefinition = "mol_definition"
}
export declare enum Src {
    Ui = "ui",
    MypdbService = "mypdb_service",
    MypdbUser = "mypdb_user",
    RcsbTest = "rcsb_test"
}
export declare enum GroupByReturnType {
    Groups = "groups",
    Representatives = "representatives"
}
export declare enum ScoringStrategy {
    Combined = "combined",
    Sequence = "sequence",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif",
    Structure = "structure",
    Chemical = "chemical",
    Text = "text",
    TextChem = "text_chem",
    FullText = "full_text"
}
export declare enum AggregationType {
    Terms = "terms",
    Histogram = "histogram",
    DateHistogram = "date_histogram",
    Range = "range",
    DateRange = "date_range",
    Cardinality = "cardinality"
}
export declare enum Interval {
    Year = "year"
}
export declare enum Type {
    Group = "group",
    Terminal = "terminal",
    Formula = "formula",
    Descriptor = "descriptor"
}
export declare enum LogicalOperator {
    Or = "or",
    And = "and"
}
export declare enum Operator {
    Equals = "equals",
    Greater = "greater",
    GreaterOrEqual = "greater_or_equal",
    Less = "less",
    LessOrEqual = "less_or_equal",
    Range = "range",
    ExactMatch = "exact_match",
    In = "in",
    Exists = "exists",
    ContainsWords = "contains_words",
    ContainsPhrase = "contains_phrase",
    StrictShapeMatch = "strict_shape_match",
    RelaxedShapeMatch = "relaxed_shape_match"
}
export declare enum AggregationMethod {
    MatchingDepositGroupId = "matching_deposit_group_id",
    SequenceIdentity = "sequence_identity",
    MatchingUniprotAccession = "matching_uniprot_accession"
}
export declare enum SortBy {
    Coverage = "coverage"
}
export declare enum Service {
    FullText = "full_text",
    Text = "text",
    TextChem = "text_chem",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}
export declare enum Target {
    PdbProteinSequence = "pdb_protein_sequence",
    PdbRnaSequence = "pdb_rna_sequence",
    PdbDnaSequence = "pdb_dna_sequence"
}
export declare enum SequenceType {
    Protein = "protein",
    Rna = "rna",
    Dna = "dna"
}
export declare enum TargetSearchSpace {
    Assembly = "assembly",
    PolymerEntityInstance = "polymer_entity_instance"
}
export declare enum Format {
    Cif = "cif",
    Bcif = "bcif",
    Pdb = "pdb"
}
export declare enum DescriptorType {
    Smiles = "SMILES",
    InChI = "InChI"
}
export declare enum MatchType {
    GraphExact_ = "graph-exact",
    GraphStrict_ = "graph-strict",
    GraphRelaxed_ = "graph-relaxed",
    GraphRelaxedStereo_ = "graph-relaxed-stereo",
    FingerprintSimilarity_ = "fingerprint-similarity",
    SubStructGraphExact_ = "sub-struct-graph-exact",
    SubStructGraphStrict_ = "sub-struct-graph-strict",
    SubStructGraphRelaxed_ = "sub-struct-graph-relaxed",
    SubStructGraphRelaxedStereo_ = "sub-struct-graph-relaxed-stereo"
}
export declare enum PatternType {
    Simple = "simple",
    Prosite = "prosite",
    Regex = "regex"
}
export declare enum AtomPairingScheme {
    All = "ALL",
    Backbone = "BACKBONE",
    SideChain = "SIDE_CHAIN",
    PseudoAtoms = "PSEUDO_ATOMS"
}
export declare enum MotifPruningStrategy {
    None = "NONE",
    Kruskal = "KRUSKAL"
}
export declare enum ServiceType {
    FullText = "full_text",
    Text = "text",
    TextChem = "text_chem",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}
