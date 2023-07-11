export enum Type {
    Asa = "ASA",
    AsaUnbound = "ASA_UNBOUND",
    AsaBound = "ASA_BOUND",
    ActiveSite = "ACTIVE_SITE",
    BindingSite = "BINDING_SITE",
    CalciumBindingRegion = "CALCIUM_BINDING_REGION",
    Chain = "CHAIN",
    CompositionallyBiasedRegion = "COMPOSITIONALLY_BIASED_REGION",
    CrossLink = "CROSS_LINK",
    DnaBindingRegion = "DNA_BINDING_REGION",
    Domain = "DOMAIN",
    GlycosylationSite = "GLYCOSYLATION_SITE",
    InitiatorMethionine = "INITIATOR_METHIONINE",
    LipidMoietyBindingRegion = "LIPID_MOIETY_BINDING_REGION",
    MetalIonBindingSite = "METAL_ION_BINDING_SITE",
    ModifiedResidue = "MODIFIED_RESIDUE",
    MutagenesisSite = "MUTAGENESIS_SITE",
    NonConsecutiveResidues = "NON_CONSECUTIVE_RESIDUES",
    NonTerminalResidue = "NON_TERMINAL_RESIDUE",
    NucleotidePhosphateBindingRegion = "NUCLEOTIDE_PHOSPHATE_BINDING_REGION",
    Peptide = "PEPTIDE",
    Propeptide = "PROPEPTIDE",
    RegionOfInterest = "REGION_OF_INTEREST",
    Repeat = "REPEAT",
    NonStandardAminoAcid = "NON_STANDARD_AMINO_ACID",
    SequenceConflict = "SEQUENCE_CONFLICT",
    SequenceVariant = "SEQUENCE_VARIANT",
    ShortSequenceMotif = "SHORT_SEQUENCE_MOTIF",
    SignalPeptide = "SIGNAL_PEPTIDE",
    Site = "SITE",
    SpliceVariant = "SPLICE_VARIANT",
    TopologicalDomain = "TOPOLOGICAL_DOMAIN",
    TransitPeptide = "TRANSIT_PEPTIDE",
    TransmembraneRegion = "TRANSMEMBRANE_REGION",
    UnsureResidue = "UNSURE_RESIDUE",
    ZincFingerRegion = "ZINC_FINGER_REGION",
    IntramembraneRegion = "INTRAMEMBRANE_REGION",
    Hydropathy = "hydropathy",
    Disorder = "disorder",
    DisorderBinding = "disorder_binding",
    CardModel = "CARD_MODEL",
    ImgtAntibodyDescription = "IMGT_ANTIBODY_DESCRIPTION",
    ImgtAntibodyDomainName = "IMGT_ANTIBODY_DOMAIN_NAME",
    ImgtAntibodyGeneAlleleName = "IMGT_ANTIBODY_GENE_ALLELE_NAME",
    ImgtAntibodyOrganismName = "IMGT_ANTIBODY_ORGANISM_NAME",
    ImgtAntibodyProteinName = "IMGT_ANTIBODY_PROTEIN_NAME",
    ImgtAntibodyReceptorDescription = "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION",
    ImgtAntibodyReceptorType = "IMGT_ANTIBODY_RECEPTOR_TYPE",
    Pfam = "Pfam",
    SabdabAntibodyAntigenName = "SABDAB_ANTIBODY_ANTIGEN_NAME",
    SabdabAntibodyName = "SABDAB_ANTIBODY_NAME",
    SabdabAntibodyTarget = "SABDAB_ANTIBODY_TARGET",
    Artifact = "artifact",
    ModifiedMonomer = "modified_monomer",
    Mutation = "mutation",
    AngleOutlier = "ANGLE_OUTLIER",
    Bend = "BEND",
    BondOutlier = "BOND_OUTLIER",
    CMannosylationSite_ = "C-MANNOSYLATION_SITE",
    Cath = "CATH",
    CisPeptide_ = "CIS-PEPTIDE",
    Ecod = "ECOD",
    HelixP = "HELIX_P",
    HelxLhPpP = "HELX_LH_PP_P",
    HelxRh3TP = "HELX_RH_3T_P",
    HelxRhAlP = "HELX_RH_AL_P",
    HelxRhPiP = "HELX_RH_PI_P",
    MaQaMetricLocalTypeContactProbability = "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY",
    MaQaMetricLocalTypeDistance = "MA_QA_METRIC_LOCAL_TYPE_DISTANCE",
    MaQaMetricLocalTypeEnergy = "MA_QA_METRIC_LOCAL_TYPE_ENERGY",
    MaQaMetricLocalTypeIptm = "MA_QA_METRIC_LOCAL_TYPE_IPTM",
    MaQaMetricLocalTypeNormalizedScore = "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE",
    MaQaMetricLocalTypeOther = "MA_QA_METRIC_LOCAL_TYPE_OTHER",
    MaQaMetricLocalTypePae = "MA_QA_METRIC_LOCAL_TYPE_PAE",
    MaQaMetricLocalTypePlddt = "MA_QA_METRIC_LOCAL_TYPE_PLDDT",
    MaQaMetricLocalTypePlddtAllAtom_ = "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM"
}

export enum PropertyName {
    Link = "LINK",
    WildType = "WILD_TYPE",
    MutatedType = "MUTATED_TYPE",
    ConsequenceType = "CONSEQUENCE_TYPE",
    PredictedImpact = "PREDICTED_IMPACT",
    ClinicalSignificance = "CLINICAL_SIGNIFICANCE",
    Evidence = "EVIDENCE",
    DiseaseType = "DISEASE_TYPE",
    StrainId = "STRAIN_ID",
    Subtype = "SUBTYPE",
    CardModelDescription = "CARD_MODEL_DESCRIPTION",
    CardModelOrganism = "CARD_MODEL_ORGANISM",
    ParentCompId = "PARENT_COMP_ID",
    CathDomainId = "CATH_DOMAIN_ID",
    CathName = "CATH_NAME",
    EcodDomainId = "ECOD_DOMAIN_ID",
    EcodFamilyName = "ECOD_FAMILY_NAME",
    ModelcifModelId = "MODELCIF_MODEL_ID",
    OmegaAngle = "OMEGA_ANGLE",
    PartnerAsymId = "PARTNER_ASYM_ID",
    PartnerBondDistance = "PARTNER_BOND_DISTANCE",
    PartnerCompId = "PARTNER_COMP_ID",
    Scop2DomainId = "SCOP2_DOMAIN_ID",
    Scop2FamilyId = "SCOP2_FAMILY_ID",
    Scop2FamilyName = "SCOP2_FAMILY_NAME",
    Scop2SuperfamilyId = "SCOP2_SUPERFAMILY_ID",
    Scop2SuperfamilyName = "SCOP2_SUPERFAMILY_NAME",
    ScopDomainId = "SCOP_DOMAIN_ID",
    ScopName = "SCOP_NAME",
    ScopSunId = "SCOP_SUN_ID",
    SheetSense = "SHEET_SENSE"
}




export enum Status {
    Current = "CURRENT",
    Removed = "REMOVED",
    Unreleased = "UNRELEASED"
}

export enum StatusCode {
    Auco = "AUCO",
    Auth = "AUTH",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    Polc = "POLC",
    Proc = "PROC",
    Refi = "REFI",
    Rel = "REL",
    Repl = "REPL",
    Rmvd = "RMVD",
    Trsf = "TRSF",
    Wait = "WAIT",
    Wdrn = "WDRN"
}

export enum RcsbCandidateAssembly {
    N = "N",
    Y = "Y"
}

export enum RcsbDetails {
    AuthorAndSoftwareDefinedAssembly = "author_and_software_defined_assembly",
    AuthorDefinedAssembly = "author_defined_assembly",
    SoftwareDefinedAssembly = "software_defined_assembly"
}

export enum NaPolymerEntityTypes {
    DnAonly = "DNAonly",
    DnaRnAonly_ = "DNA/RNAonly",
    NaHybridonly_ = "NA-hybridonly",
    Other = "Other",
    RnAonly = "RNAonly"
}

export enum PolymerComposition {
    Dna = "DNA"
}

export enum SelectedPolymerEntityTypes {
    Nucleicacidonly = "Nucleicacidonly",
    Other = "Other",
    Proteinonly = "Proteinonly",
    ProteinNa_ = "Protein/NA"
}

export enum Kind {
    GlobalSymmetry = "GlobalSymmetry",
    PseudoSymmetry = "PseudoSymmetry",
    LocalSymmetry = "LocalSymmetry"
}

export enum ProvenanceSource {
    Pdb = "PDB",
    Rcsb = "RCSB"
}

export enum ResourceName {
    GlyCosmos = "GlyCosmos",
    GlyGen = "GlyGen",
    GlyTouCan = "GlyTouCan"
}

export enum ReferenceScheme {
    PdBentity = "PDBentity"
}

export enum UncertaintyEstimateType {
    ZScore_ = "Z-Score"
}

export enum Role {
    CMannosylation_ = "C-Mannosylation",
    NGlycosylation_ = "N-Glycosylation",
    OGlycosylation_ = "O-Glycosylation"
}

export enum ValueOrder {
    Doub = "doub",
    Quad = "quad",
    Sing = "sing",
    Trip = "trip"
}

export enum LigandIsBound {
    N = "N",
    Y = "Y"
}

export enum PdbxType {
    Atomn = "ATOMN",
    Atomp = "ATOMP",
    Atoms = "ATOMS",
    Hetac = "HETAC",
    Hetad = "HETAD",
    Hetai = "HETAI",
    Hetain = "HETAIN",
    Hetas = "HETAS",
    Hetic = "HETIC"
}

export enum PdbxProcessingSite {
    Ebi = "EBI",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}

export enum PdbxReleaseStatus {
    Del = "DEL",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    RefOnly = "REF_ONLY",
    Rel = "REL"
}

export enum ProcessingSite {
    Bmrb = "BMRB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}

export enum Hetero {
    N = "N",
    Y = "Y"
}

export enum Observed {
    N = "N",
    Y = "Y"
}

export enum NrpFlag {
    N = "N",
    Y = "Y"
}

export enum Class {
    Antagonist = "Antagonist",
    Anthelmintic = "Anthelmintic",
    Antibiotic = "Antibiotic"
}

export enum ReleaseStatus {
    Hold = "HOLD",
    Obs = "OBS",
    Rel = "REL",
    Wait = "WAIT",
    Del = "DEL",
    Hpub = "HPUB",
    RefOnly = "REF_ONLY"
}

export enum RepresentAs {
    Branched = "branched",
    Polymer = "polymer",
    Singlemolecule = "singlemolecule"
}

export enum ReferenceDatabaseName {
    UniProt = "UniProt"
}


export enum CoordinateLinkage {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}

export enum RcsbIsPrimary {
    N = "N",
    Y = "Y"
}

export enum UnpublishedFlag {
    N = "N",
    Y = "Y"
}

export enum PdbxMonochromaticOrLaueML {
    L = "L",
    M = "M"
}

export enum PdbxScatteringType {
    Electron = "electron",
    Neutron = "neutron",
    XRay_ = "x-ray"
}

export enum RefProtocol {
    Abinitiomodel = "ABINITIOMODEL",
    Backbonetrace = "BACKBONETRACE",
    Flexiblefit = "FLEXIBLEFIT",
    Other = "OTHER",
    Rigidbodyfit = "RIGIDBODYFIT"
}

export enum RefSpace {
    Real = "REAL",
    Reciprocal = "RECIPROCAL"
}

export enum SymmetryType {
    _2Dcrystal = "2DCRYSTAL",
    _3Dcrystal = "3DCRYSTAL",
    Helical = "HELICAL",
    Point = "POINT"
}

export enum Source {
    Multiplesources = "MULTIPLESOURCES",
    Natural = "NATURAL",
    Recombinant = "RECOMBINANT",
    Synthetic = "SYNTHETIC"
}

export enum AggregationState {
    _2Darray = "2DARRAY",
    _3Darray = "3DARRAY",
    Cell = "CELL",
    Filament = "FILAMENT",
    Helicalarray = "HELICALARRAY",
    Particle = "PARTICLE",
    Tissue = "TISSUE"
}

export enum ReconstructionMethod {
    Crystallography = "CRYSTALLOGRAPHY",
    Helical = "HELICAL",
    Singleparticle = "SINGLEPARTICLE",
    Subtomogramaveraging = "SUBTOMOGRAMAVERAGING",
    Tomography = "TOMOGRAPHY"
}

export enum DetectorMode {
    Counting = "COUNTING",
    Integrating = "INTEGRATING",
    Other = "OTHER",
    SuperResolution_ = "SUPER-RESOLUTION"
}

export enum AlignmentProcedure {
    Basic = "BASIC",
    Comafree = "COMAFREE",
    None = "NONE",
    Other = "OTHER",
    Zemlintableau = "ZEMLINTABLEAU"
}

export enum Cryogen {
    Helium = "HELIUM",
    Nitrogen = "NITROGEN"
}

export enum IlluminationMode {
    Floodbeam = "FLOODBEAM",
    Other = "OTHER",
    Spotscan = "SPOTSCAN"
}

export enum Mode {
    Brightfield = "BRIGHTFIELD",
    Darkfield = "DARKFIELD",
    Diffraction = "DIFFRACTION",
    Other = "OTHER"
}

export enum Category {
    Classification = "CLASSIFICATION"
}

export enum EmbeddingApplied {
    No = "NO",
    Yes = "YES"
}

export enum ShadowingApplied {
    No = "NO",
    Yes = "YES"
}

export enum StainingApplied {
    No = "NO",
    Yes = "YES"
}

export enum VitrificationApplied {
    No = "NO",
    Yes = "YES"
}

export enum CryogenName {
    Ethane = "ETHANE",
    EthanePropane_ = "ETHANE-PROPANE"
}

export enum InitialOfCenter {
    Atcg3D = "ATCG3D",
    Bigs = "BIGS",
    Bsgc = "BSGC",
    Bsgi = "BSGI",
    Cebs = "CEBS",
    Cellmat = "CELLMAT",
    Cesg = "CESG",
    Chsam = "CHSAM",
    Chtsb = "CHTSB",
    Csbid = "CSBID",
    Csgid = "CSGID",
    Csmp = "CSMP",
    Gpcr = "GPCR",
    Ifn = "IFN",
    Isfi = "ISFI",
    Ispc = "ISPC",
    Jcsg = "JCSG",
    Mcmr = "MCMR",
    Mcsg = "MCSG",
    Mpid = "MPID",
    Mpp = "MPP",
    Mpsbc = "MPSBC",
    MpSbyNmr = "MPSbyNMR",
    Msgp = "MSGP",
    Msgpp = "MSGPP",
    Mtbi = "MTBI",
    Nesg = "NESG",
    NhRs = "NHRs",
    NpcXstals = "NPCXstals",
    Nycomps = "NYCOMPS",
    Nysgrc = "NYSGRC",
    Nysgxrc = "NYSGXRC",
    NatPro = "NatPro",
    Ocsp = "OCSP",
    Oppf = "OPPF",
    Pcsep = "PCSEP",
    Psf = "PSF",
    Rsgi = "RSGI",
    S2F = "S2F",
    Sastad = "SASTAD",
    Secsg = "SECSG",
    Sgc = "SGC",
    Sgcges = "SGCGES",
    Sgpp = "SGPP",
    Spine = "SPINE",
    Spine2_ = "SPINE-2",
    Ssgcid = "SSGCID",
    Sspf = "SSPF",
    Stemcell = "STEMCELL",
    Tbsgc = "TBSGC",
    Tcell = "TCELL",
    Temimps = "TEMIMPS",
    Tjmp = "TJMP",
    Tmpc = "TMPC",
    TransportPdb = "TransportPDB",
    Uc4Cdi = "UC4CDI",
    Xmtb = "XMTB",
    Ysg = "YSG"
}

export enum Provider {
    Author = "author",
    Repository = "repository"
}

export enum Group {
    Advisory = "Advisory"
}

export enum Id {
    Obslte = "OBSLTE",
    Sprsde = "SPRSDE"
}

export enum SgEntry {
    N = "N",
    Y = "Y"
}

export enum DepositSite {
    Bmrb = "BMRB",
    Bnl = "BNL",
    Ndb = "NDB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}

export enum MethodsDevelopmentCategory {
    Capri = "CAPRI",
    CasdNmr_ = "CASD-NMR",
    Casp = "CASP",
    D3R = "D3R",
    FoldIt = "FoldIt",
    GpcrDock = "GPCRDock",
    RnaPuzzles_ = "RNA-Puzzles"
}

export enum PdbFormatCompatible {
    N = "N",
    Y = "Y"
}

export enum ProcessSite {
    Bnl = "BNL",
    Ndb = "NDB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}

export enum StatusCodeCs {
    Auco = "AUCO",
    Auth = "AUTH",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    Polc = "POLC",
    Proc = "PROC",
    Rel = "REL",
    Repl = "REPL",
    Rmvd = "RMVD",
    Wait = "WAIT",
    Wdrn = "WDRN"
}

export enum StatusCodeMr {
    Auco = "AUCO",
    Auth = "AUTH",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    Polc = "POLC",
    Proc = "PROC",
    Rel = "REL",
    Repl = "REPL",
    Rmvd = "RMVD",
    Wait = "WAIT",
    Wdrn = "WDRN"
}

export enum StatusCodeSf {
    Auth = "AUTH",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    Polc = "POLC",
    Proc = "PROC",
    Rel = "REL",
    Repl = "REPL",
    Rmvd = "RMVD",
    Wait = "WAIT",
    Wdrn = "WDRN"
}

export enum GroupType {
    Changedstate = "changedstate",
    Groundstate = "groundstate",
    Undefined = "undefined"
}

export enum SourceName {
    AlphaFold = "AlphaFold",
    ITasser = "ITasser",
    ModelArchive = "ModelArchive",
    Modeller = "Modeller",
    Other = "Other",
    Pdb = "PDB",
    RoseTtaFold = "RoseTTAFold",
    SwissModel = "SwissModel"
}

export enum SampleState {
    Anisotropic = "anisotropic",
    Isotropic = "isotropic"
}

export enum IonicStrengthUnits {
    M = "M",
    Notdefined = "Notdefined",
    MM = "mM"
}

export enum PHUnits {
    Notdefined = "Notdefined",
    PD = "pD",
    PH = "pH",
    PH_ = "pH*"
}

export enum TemperatureUnits {
    C = "C",
    K = "K",
    Notdefined = "Notdefined"
}

export enum Method {
    Fixedtarget = "fixedtarget",
    Injection = "injection"
}

export enum HasReleasedExperimentalData {
    N = "N",
    Y = "Y"
}

export enum SourceDb {
    AlphaFoldDb = "AlphaFoldDB",
    ModelArchive = "ModelArchive"
}

export enum ExperimentalMethod {
    Em = "EM",
    Multiplemethods = "Multiplemethods",
    Nmr = "NMR",
    Neutron = "Neutron",
    Other = "Other",
    XRay_ = "X-ray"
}

export enum StructureDeterminationMethodology {
    Computational = "computational",
    Experimental = "experimental"
}

export enum LsMatrixType {
    Atomblock = "atomblock",
    Diagonal = "diagonal",
    Full = "full",
    Fullcycle = "fullcycle",
    Sparse = "sparse",
    Userblock = "userblock"
}

export enum PdbxTlsResidualAdpFlag {
    Likelyresidual = "LIKELYRESIDUAL",
    Unverified = "UNVERIFIED"
}

export enum Language {
    Ada = "Ada",
    Awk = "Awk",
    Basic = "Basic",
    C = "C"
}

export enum PdbxCaspFlag {
    N = "N",
    Y = "Y"
}

export enum CellSetting {
    Cubic = "cubic",
    Hexagonal = "hexagonal",
    Monoclinic = "monoclinic",
    Orthorhombic = "orthorhombic",
    Rhombohedral = "rhombohedral",
    Tetragonal = "tetragonal",
    Triclinic = "triclinic",
    Trigonal = "trigonal"
}

export enum AggregationMethod {
    MatchingDepositGroupId = "matching_deposit_group_id"
}

export enum ProvenanceCode {
    PdbBind = "PDBBind",
    BindingMoad = "BindingMOAD",
    BindingDb = "BindingDB"
}

export enum Name {
    ToBeDefined = "TO_BE_DEFINED"
}

export enum InterfaceCharacter {
    Homo = "homo",
    Hetero = "hetero"
}



export enum IsBestInstance {
    N = "N",
    Y = "Y"
}

export enum IsSubjectOfInvestigation {
    N = "N",
    Y = "Y"
}

export enum IsSubjectOfInvestigationProvenance {
    Author = "Author",
    Rcsb = "RCSB"
}

export enum TargetIsBound {
    N = "N",
    Y = "Y"
}

export enum RcsbPfamSeedSource {
    Family = "Family",
    Domain = "Domain",
    Repeat = "Repeat",
    Motif = "Motif",
    Disordered = "Disordered",
    CoiledCoil_ = "Coiled-coil"
}

export enum RcsbPfamProvenanceCode {
    PfamA_ = "Pfam-A"
}

export enum NstdLinkage {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}

export enum NstdMonomer {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}

export enum PdbxSequenceEvidenceCode {
    Depositorprovided = "depositorprovided",
    Derivedfromcoordinates = "derivedfromcoordinates"
}

export enum RcsbEntityPolymerType {
    Dna = "DNA",
    NaHybrid_ = "NA-hybrid",
    Other = "Other",
    Protein = "Protein",
    Rna = "RNA"
}

export enum PdbxAltSourceFlag {
    Model = "model",
    Sample = "sample"
}

export enum PdbxSeqType {
    Biologicalsequence = "Biologicalsequence",
    CTerminaltag_ = "C-terminaltag",
    Linker = "Linker",
    NTerminaltag_ = "N-terminaltag"
}

export enum SourceType {
    Geneticallyengineered = "geneticallyengineered",
    Natural = "natural",
    Synthetic = "synthetic"
}

export enum RcsbMultipleSourceFlag {
    N = "N",
    Y = "Y"
}

export enum SrcMethod {
    Man = "man",
    Nat = "nat",
    Syn = "syn"
}

export enum DatabaseName {
    Embl = "EMBL",
    GenBank = "GenBank",
    Ndb = "NDB",
    Norine = "NORINE",
    Pdb = "PDB",
    Pir = "PIR",
    Prf = "PRF",
    RefSeq = "RefSeq",
    UniProt = "UniProt"
}

export enum RelatedResourceName {
    ChEmbl = "ChEMBL",
    DrugBank = "DrugBank",
    Pharos = "Pharos"
}

export enum BindingAssayValueType {
    PAc50 = "pAC50",
    PEc50 = "pEC50",
    PIc50 = "pIC50",
    PKd = "pKd",
    PKi = "pKi"
}

export enum NeighborFlag {
    N = "N",
    Y = "Y"
}

export enum RcsbMembraneLineageProvenanceCode {
    Mpstruc = "Mpstruc",
    Homology = "Homology"
}



export enum ReferenceName {
    Impc = "IMPC",
    Gtex = "GTEX",
    Pharos = "PHAROS"
}


export enum GroupProvenanceId {
    ProvenanceSequenceIdentity = "provenance_sequence_identity",
    ProvenanceMatchingUniprotAccession = "provenance_matching_uniprot_accession",
    ProvenanceMatchingDepositGroupId = "provenance_matching_deposit_group_id"
}

export enum GroupMembersGranularity {
    Assembly = "assembly",
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    PolymerEntityInstance = "polymer_entity_instance"
}

export enum RankingCriteriaType {
    Coverage = "coverage"
}

export enum SimilarityFunction {
    Rmsd = "rmsd",
    SequenceIdentity = "sequence_identity"
}



export enum ShapeEntityType {
    Assembly = "assembly",
    Chain = "chain",
    Domain = "domain"
}

export enum PrereleaseSequenceAvailableFlag {
    N = "N",
    Y = "Y"
}

