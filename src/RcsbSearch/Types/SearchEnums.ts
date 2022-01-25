export enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}

export enum SortOptionGroupsSortBy {
    Size = "size",
    Count = "count"
}

export enum Src {
    Ui = "ui",
    MypdbService = "mypdb_service",
    MypdbUser = "mypdb_user",
    RcsbTest = "rcsb_test"
}

export enum ReturnType {
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerInstance = "polymer_instance",
    Assembly = "assembly",
    MolDefinition = "mol_definition"
}

export enum GroupByReturnType {
    Groups = "groups",
    Representatives = "representatives"
}

export enum ScoringStrategy {
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

export enum ResultsVerbosity {
    Compact = "compact",
    Minimal = "minimal",
    Verbose = "verbose"
}

export enum AggregationType {
    Terms = "terms",
    Histogram = "histogram",
    DateHistogram = "date_histogram",
    Range = "range",
    DateRange = "date_range",
    Cardinality = "cardinality"
}

export enum Interval {
    Year = "year"
}

export enum Type {
    Group = "group",
    Terminal = "terminal",
    Formula = "formula",
    Descriptor = "descriptor"
}

export enum LogicalOperator {
    Or = "or",
    And = "and"
}

export enum Service {
    Text = "text",
    TextChem = "text_chem",
    FullText = "full_text",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}

export enum Operator {
    Equals = "equals",
    Greater = "greater",
    GreaterOrEqual = "greater_or_equal",
    Less = "less",
    LessOrEqual = "less_or_equal",
    Range = "range",
    RangeClosed = "range_closed",
    ContainsWords = "contains_words",
    ContainsPhrase = "contains_phrase",
    ExactMatch = "exact_match",
    In = "in",
    Exists = "exists",
    StrictShapeMatch = "strict_shape_match",
    RelaxedShapeMatch = "relaxed_shape_match"
}

export enum AggregationMethod {
    MatchingDepositGroupId = "matching_deposit_group_id",
    SequenceIdentity = "sequence_identity",
    MatchingUniprotAccession = "matching_uniprot_accession"
}

export enum SortBy {
    Coverage = "coverage"
}

export enum Target {
    PdbProteinSequence = "pdb_protein_sequence",
    PdbRnaSequence = "pdb_rna_sequence",
    PdbDnaSequence = "pdb_dna_sequence"
}

export enum FileFormat {
    Cif = "cif",
    Bcif = "bcif",
    Pdb = "pdb",
    Ccp4 = "ccp4"
}

export enum DescriptorType {
    Smiles = "SMILES",
    InChI = "InChI"
}

export enum MatchType {
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

export enum PatternType {
    Simple = "simple",
    Prosite = "prosite",
    Regex = "regex"
}

export enum Allowed {
    Ala = "ALA",
    Cys = "CYS",
    Asp = "ASP",
    Glu = "GLU",
    Phe = "PHE",
    Gly = "GLY",
    His = "HIS",
    Ile = "ILE",
    Lys = "LYS",
    Leu = "LEU",
    Met = "MET",
    Asn = "ASN",
    Pro = "PRO",
    Gln = "GLN",
    Arg = "ARG",
    Ser = "SER",
    Thr = "THR",
    Val = "VAL",
    Trp = "TRP",
    Tyr = "TYR",
    A = "A",
    C = "C",
    Da = "DA",
    Dc = "DC",
    Dg = "DG",
    G = "G",
    T = "T",
    U = "U",
    Unk = "UNK",
    N = "N"
}

export enum AtomPairingScheme {
    All = "ALL",
    Backbone = "BACKBONE",
    SideChain = "SIDE_CHAIN",
    PseudoAtoms = "PSEUDO_ATOMS"
}

export enum MotifPruningStrategy {
    None = "NONE",
    Kruskal = "KRUSKAL"
}

export enum ResultType {
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerInstance = "polymer_instance",
    Assembly = "assembly",
    MolDefinition = "mol_definition"
}

export enum ServiceType {
    FullText = "full_text",
    Text = "text",
    TextChem = "text_chem",
    Sequence = "sequence",
    Structure = "structure",
    Chemical = "chemical",
    Seqmotif = "seqmotif",
    Strucmotif = "strucmotif"
}

