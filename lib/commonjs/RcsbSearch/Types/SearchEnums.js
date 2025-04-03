"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = exports.MotifPruningStrategy = exports.AtomPairingScheme = exports.PatternType = exports.MatchType = exports.DescriptorType = exports.Format = exports.TargetSearchSpace = exports.SequenceType = exports.Target = exports.Service = exports.SortBy = exports.AggregationMethod = exports.Operator = exports.LogicalOperator = exports.Type = exports.Interval = exports.AggregationType = exports.ScoringStrategy = exports.GroupByReturnType = exports.Src = exports.ReturnType = exports.SortOptionGroupsSortBy = exports.SortDirection = exports.RelevanceScoreRankingOption = exports.RequestOptionsResultsVerbosity = void 0;
var RequestOptionsResultsVerbosity;
(function (RequestOptionsResultsVerbosity) {
    RequestOptionsResultsVerbosity["Compact"] = "compact";
    RequestOptionsResultsVerbosity["Minimal"] = "minimal";
    RequestOptionsResultsVerbosity["Verbose"] = "verbose";
})(RequestOptionsResultsVerbosity || (exports.RequestOptionsResultsVerbosity = RequestOptionsResultsVerbosity = {}));
var RelevanceScoreRankingOption;
(function (RelevanceScoreRankingOption) {
    RelevanceScoreRankingOption["Score"] = "score";
})(RelevanceScoreRankingOption || (exports.RelevanceScoreRankingOption = RelevanceScoreRankingOption = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "asc";
    SortDirection["Desc"] = "desc";
})(SortDirection || (exports.SortDirection = SortDirection = {}));
var SortOptionGroupsSortBy;
(function (SortOptionGroupsSortBy) {
    SortOptionGroupsSortBy["Size"] = "size";
    SortOptionGroupsSortBy["Count"] = "count";
})(SortOptionGroupsSortBy || (exports.SortOptionGroupsSortBy = SortOptionGroupsSortBy = {}));
var ReturnType;
(function (ReturnType) {
    ReturnType["Entry"] = "entry";
    ReturnType["PolymerEntity"] = "polymer_entity";
    ReturnType["NonPolymerEntity"] = "non_polymer_entity";
    ReturnType["PolymerInstance"] = "polymer_instance";
    ReturnType["Assembly"] = "assembly";
    ReturnType["MolDefinition"] = "mol_definition";
})(ReturnType || (exports.ReturnType = ReturnType = {}));
var Src;
(function (Src) {
    Src["Ui"] = "ui";
    Src["MypdbService"] = "mypdb_service";
    Src["MypdbUser"] = "mypdb_user";
    Src["RcsbTest"] = "rcsb_test";
})(Src || (exports.Src = Src = {}));
var GroupByReturnType;
(function (GroupByReturnType) {
    GroupByReturnType["Groups"] = "groups";
    GroupByReturnType["Representatives"] = "representatives";
})(GroupByReturnType || (exports.GroupByReturnType = GroupByReturnType = {}));
var ScoringStrategy;
(function (ScoringStrategy) {
    ScoringStrategy["Combined"] = "combined";
    ScoringStrategy["Sequence"] = "sequence";
    ScoringStrategy["Seqmotif"] = "seqmotif";
    ScoringStrategy["Strucmotif"] = "strucmotif";
    ScoringStrategy["Structure"] = "structure";
    ScoringStrategy["Chemical"] = "chemical";
    ScoringStrategy["Text"] = "text";
    ScoringStrategy["TextChem"] = "text_chem";
    ScoringStrategy["FullText"] = "full_text";
})(ScoringStrategy || (exports.ScoringStrategy = ScoringStrategy = {}));
var AggregationType;
(function (AggregationType) {
    AggregationType["Terms"] = "terms";
    AggregationType["Histogram"] = "histogram";
    AggregationType["DateHistogram"] = "date_histogram";
    AggregationType["Range"] = "range";
    AggregationType["DateRange"] = "date_range";
    AggregationType["Cardinality"] = "cardinality";
})(AggregationType || (exports.AggregationType = AggregationType = {}));
var Interval;
(function (Interval) {
    Interval["Year"] = "year";
})(Interval || (exports.Interval = Interval = {}));
var Type;
(function (Type) {
    Type["Group"] = "group";
    Type["Terminal"] = "terminal";
    Type["Formula"] = "formula";
    Type["Descriptor"] = "descriptor";
})(Type || (exports.Type = Type = {}));
var LogicalOperator;
(function (LogicalOperator) {
    LogicalOperator["Or"] = "or";
    LogicalOperator["And"] = "and";
})(LogicalOperator || (exports.LogicalOperator = LogicalOperator = {}));
var Operator;
(function (Operator) {
    Operator["Equals"] = "equals";
    Operator["Greater"] = "greater";
    Operator["GreaterOrEqual"] = "greater_or_equal";
    Operator["Less"] = "less";
    Operator["LessOrEqual"] = "less_or_equal";
    Operator["Range"] = "range";
    Operator["ExactMatch"] = "exact_match";
    Operator["In"] = "in";
    Operator["Exists"] = "exists";
    Operator["ContainsWords"] = "contains_words";
    Operator["ContainsPhrase"] = "contains_phrase";
    Operator["StrictShapeMatch"] = "strict_shape_match";
    Operator["RelaxedShapeMatch"] = "relaxed_shape_match";
})(Operator || (exports.Operator = Operator = {}));
var AggregationMethod;
(function (AggregationMethod) {
    AggregationMethod["MatchingDepositGroupId"] = "matching_deposit_group_id";
    AggregationMethod["SequenceIdentity"] = "sequence_identity";
    AggregationMethod["MatchingUniprotAccession"] = "matching_uniprot_accession";
})(AggregationMethod || (exports.AggregationMethod = AggregationMethod = {}));
var SortBy;
(function (SortBy) {
    SortBy["Coverage"] = "coverage";
})(SortBy || (exports.SortBy = SortBy = {}));
var Service;
(function (Service) {
    Service["FullText"] = "full_text";
    Service["Text"] = "text";
    Service["TextChem"] = "text_chem";
    Service["Sequence"] = "sequence";
    Service["Structure"] = "structure";
    Service["Chemical"] = "chemical";
    Service["Seqmotif"] = "seqmotif";
    Service["Strucmotif"] = "strucmotif";
})(Service || (exports.Service = Service = {}));
var Target;
(function (Target) {
    Target["PdbProteinSequence"] = "pdb_protein_sequence";
    Target["PdbRnaSequence"] = "pdb_rna_sequence";
    Target["PdbDnaSequence"] = "pdb_dna_sequence";
})(Target || (exports.Target = Target = {}));
var SequenceType;
(function (SequenceType) {
    SequenceType["Protein"] = "protein";
    SequenceType["Rna"] = "rna";
    SequenceType["Dna"] = "dna";
})(SequenceType || (exports.SequenceType = SequenceType = {}));
var TargetSearchSpace;
(function (TargetSearchSpace) {
    TargetSearchSpace["Assembly"] = "assembly";
    TargetSearchSpace["PolymerEntityInstance"] = "polymer_entity_instance";
})(TargetSearchSpace || (exports.TargetSearchSpace = TargetSearchSpace = {}));
var Format;
(function (Format) {
    Format["Cif"] = "cif";
    Format["Bcif"] = "bcif";
    Format["Pdb"] = "pdb";
})(Format || (exports.Format = Format = {}));
var DescriptorType;
(function (DescriptorType) {
    DescriptorType["Smiles"] = "SMILES";
    DescriptorType["InChI"] = "InChI";
})(DescriptorType || (exports.DescriptorType = DescriptorType = {}));
var MatchType;
(function (MatchType) {
    MatchType["GraphExact_"] = "graph-exact";
    MatchType["GraphStrict_"] = "graph-strict";
    MatchType["GraphRelaxed_"] = "graph-relaxed";
    MatchType["GraphRelaxedStereo_"] = "graph-relaxed-stereo";
    MatchType["FingerprintSimilarity_"] = "fingerprint-similarity";
    MatchType["SubStructGraphExact_"] = "sub-struct-graph-exact";
    MatchType["SubStructGraphStrict_"] = "sub-struct-graph-strict";
    MatchType["SubStructGraphRelaxed_"] = "sub-struct-graph-relaxed";
    MatchType["SubStructGraphRelaxedStereo_"] = "sub-struct-graph-relaxed-stereo";
})(MatchType || (exports.MatchType = MatchType = {}));
var PatternType;
(function (PatternType) {
    PatternType["Simple"] = "simple";
    PatternType["Prosite"] = "prosite";
    PatternType["Regex"] = "regex";
})(PatternType || (exports.PatternType = PatternType = {}));
var AtomPairingScheme;
(function (AtomPairingScheme) {
    AtomPairingScheme["All"] = "ALL";
    AtomPairingScheme["Backbone"] = "BACKBONE";
    AtomPairingScheme["SideChain"] = "SIDE_CHAIN";
    AtomPairingScheme["PseudoAtoms"] = "PSEUDO_ATOMS";
})(AtomPairingScheme || (exports.AtomPairingScheme = AtomPairingScheme = {}));
var MotifPruningStrategy;
(function (MotifPruningStrategy) {
    MotifPruningStrategy["None"] = "NONE";
    MotifPruningStrategy["Kruskal"] = "KRUSKAL";
})(MotifPruningStrategy || (exports.MotifPruningStrategy = MotifPruningStrategy = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["FullText"] = "full_text";
    ServiceType["Text"] = "text";
    ServiceType["TextChem"] = "text_chem";
    ServiceType["Sequence"] = "sequence";
    ServiceType["Structure"] = "structure";
    ServiceType["Chemical"] = "chemical";
    ServiceType["Seqmotif"] = "seqmotif";
    ServiceType["Strucmotif"] = "strucmotif";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
