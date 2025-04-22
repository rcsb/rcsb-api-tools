export declare enum Type {
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
    AngleOutliers = "ANGLE_OUTLIERS",
    AverageOccupancy = "AVERAGE_OCCUPANCY",
    Bend = "BEND",
    BondOutlier = "BOND_OUTLIER",
    BondOutliers = "BOND_OUTLIERS",
    CMannosylationSite_ = "C-MANNOSYLATION_SITE",
    Cath = "CATH",
    ChiralOutliers = "CHIRAL_OUTLIERS",
    CisPeptide_ = "CIS-PEPTIDE",
    Clashes = "CLASHES",
    Ecod = "ECOD",
    HelixP = "HELIX_P",
    HelxLhPpP = "HELX_LH_PP_P",
    HelxRh3TP = "HELX_RH_3T_P",
    HelxRhAlP = "HELX_RH_AL_P",
    HelxRhPiP = "HELX_RH_PI_P",
    LigandCovalentLinkage = "LIGAND_COVALENT_LINKAGE",
    LigandInteraction = "LIGAND_INTERACTION",
    LigandMetalCoordinationLinkage = "LIGAND_METAL_COORDINATION_LINKAGE",
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
export declare enum PropertyName {
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
    TargetId = "TARGET_ID",
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
    PdbModelNum = "PDB_MODEL_NUM",
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
export declare enum Status {
    Current = "CURRENT",
    Removed = "REMOVED",
    Unreleased = "UNRELEASED"
}
export declare enum StatusCode {
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
export declare enum RcsbCandidateAssembly {
    N = "N",
    Y = "Y"
}
export declare enum RcsbDetails {
    AuthorAndSoftwareDefinedAssembly = "author_and_software_defined_assembly",
    AuthorDefinedAssembly = "author_defined_assembly",
    SoftwareDefinedAssembly = "software_defined_assembly"
}
export declare enum NaPolymerEntityTypes {
    DnAonly = "DNAonly",
    DnaRnAonly_ = "DNA/RNAonly",
    NaHybridonly_ = "NA-hybridonly",
    Other = "Other",
    RnAonly = "RNAonly"
}
export declare enum PolymerComposition {
    Dna = "DNA"
}
export declare enum SelectedPolymerEntityTypes {
    Nucleicacidonly = "Nucleicacidonly",
    Other = "Other",
    Proteinonly = "Proteinonly",
    ProteinNa_ = "Protein/NA"
}
export declare enum Kind {
    GlobalSymmetry = "GlobalSymmetry",
    PseudoSymmetry = "PseudoSymmetry",
    LocalSymmetry = "LocalSymmetry"
}
export declare enum Name {
    McsaMotifCompatibility = "MCSA_MOTIF_COMPATIBILITY"
}
export declare enum ProvenanceSource {
    Pdb = "PDB",
    Rcsb = "RCSB"
}
export declare enum ResourceName {
    GlyCosmos = "GlyCosmos",
    GlyGen = "GlyGen",
    GlyTouCan = "GlyTouCan"
}
export declare enum ReferenceScheme {
    PdBentity = "PDBentity"
}
export declare enum UncertaintyEstimateType {
    ZScore_ = "Z-Score"
}
export declare enum Role {
    CMannosylation_ = "C-Mannosylation",
    NGlycosylation_ = "N-Glycosylation",
    OGlycosylation_ = "O-Glycosylation"
}
export declare enum ValueOrder {
    Doub = "doub",
    Quad = "quad",
    Sing = "sing",
    Trip = "trip"
}
export declare enum LigandIsBound {
    N = "N",
    Y = "Y"
}
export declare enum PdbxType {
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
export declare enum PdbxProcessingSite {
    Ebi = "EBI",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}
export declare enum PdbxReleaseStatus {
    Del = "DEL",
    Hold = "HOLD",
    Hpub = "HPUB",
    Obs = "OBS",
    RefOnly = "REF_ONLY",
    Rel = "REL"
}
export declare enum ProcessingSite {
    Bmrb = "BMRB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}
export declare enum Hetero {
    N = "N",
    Y = "Y"
}
export declare enum Observed {
    N = "N",
    Y = "Y"
}
export declare enum NrpFlag {
    N = "N",
    Y = "Y"
}
export declare enum Class {
    Antagonist = "Antagonist",
    Anthelmintic = "Anthelmintic",
    Antibiotic = "Antibiotic"
}
export declare enum ReleaseStatus {
    Hold = "HOLD",
    Obs = "OBS",
    Rel = "REL",
    Wait = "WAIT",
    Del = "DEL",
    Hpub = "HPUB",
    RefOnly = "REF_ONLY"
}
export declare enum RepresentAs {
    Branched = "branched",
    Polymer = "polymer",
    Singlemolecule = "singlemolecule"
}
export declare enum ReferenceDatabaseName {
    UniProt = "UniProt"
}
export declare enum Approved {
    N = "N",
    Y = "Y"
}
export declare enum Country {
    Canada = "Canada",
    Eu = "EU",
    Us = "US"
}
export declare enum Source {
    Dpd = "DPD",
    Ema = "EMA",
    Fdandc = "FDANDC"
}
export declare enum CoordinateLinkage {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}
export declare enum RcsbIsPrimary {
    N = "N",
    Y = "Y"
}
export declare enum UnpublishedFlag {
    N = "N",
    Y = "Y"
}
export declare enum DatabaseId {
    AlphaFoldDb = "AlphaFoldDB",
    Bmrb = "BMRB",
    Ebi = "EBI",
    Emdb = "EMDB",
    Modbase = "MODBASE",
    ModelArchive = "ModelArchive",
    Ndb = "NDB",
    Pdb = "PDB",
    PdbDev_ = "PDB-Dev",
    Pdbe = "PDBE",
    PdbAcc = "PDB_ACC",
    Rcsb = "RCSB",
    SwissModelRepository_ = "SWISS-MODEL_REPOSITORY",
    Wwpdb = "WWPDB"
}
export declare enum PdbxSerialCrystalExperiment {
    N = "N",
    Y = "Y"
}
export declare enum PdbxMonochromaticOrLaueML {
    L = "L",
    M = "M"
}
export declare enum PdbxScatteringType {
    Electron = "electron",
    Neutron = "neutron",
    XRay_ = "x-ray"
}
export declare enum RefProtocol {
    Abinitiomodel = "ABINITIOMODEL",
    Backbonetrace = "BACKBONETRACE",
    Flexiblefit = "FLEXIBLEFIT",
    Other = "OTHER",
    Rigidbodyfit = "RIGIDBODYFIT"
}
export declare enum RefSpace {
    Real = "REAL",
    Reciprocal = "RECIPROCAL"
}
export declare enum SymmetryType {
    _2Dcrystal = "2DCRYSTAL",
    _3Dcrystal = "3DCRYSTAL",
    Helical = "HELICAL",
    Point = "POINT"
}
export declare enum AggregationState {
    _2Darray = "2DARRAY",
    _3Darray = "3DARRAY",
    Cell = "CELL",
    Filament = "FILAMENT",
    Helicalarray = "HELICALARRAY",
    Particle = "PARTICLE",
    Tissue = "TISSUE"
}
export declare enum ReconstructionMethod {
    Crystallography = "CRYSTALLOGRAPHY",
    Helical = "HELICAL",
    Singleparticle = "SINGLEPARTICLE",
    Subtomogramaveraging = "SUBTOMOGRAMAVERAGING",
    Tomography = "TOMOGRAPHY"
}
export declare enum DetectorMode {
    Counting = "COUNTING",
    Integrating = "INTEGRATING",
    Other = "OTHER",
    SuperResolution_ = "SUPER-RESOLUTION"
}
export declare enum AlignmentProcedure {
    Basic = "BASIC",
    Comafree = "COMAFREE",
    None = "NONE",
    Other = "OTHER",
    Zemlintableau = "ZEMLINTABLEAU"
}
export declare enum Cryogen {
    Helium = "HELIUM",
    Nitrogen = "NITROGEN"
}
export declare enum IlluminationMode {
    Floodbeam = "FLOODBEAM",
    Other = "OTHER",
    Spotscan = "SPOTSCAN"
}
export declare enum Mode {
    _4DStem_ = "4D-STEM",
    Brightfield = "BRIGHTFIELD",
    Darkfield = "DARKFIELD",
    Diffraction = "DIFFRACTION",
    Other = "OTHER"
}
export declare enum Category {
    Classification = "CLASSIFICATION"
}
export declare enum EmbeddingApplied {
    No = "NO",
    Yes = "YES"
}
export declare enum ShadowingApplied {
    No = "NO",
    Yes = "YES"
}
export declare enum StainingApplied {
    No = "NO",
    Yes = "YES"
}
export declare enum VitrificationApplied {
    No = "NO",
    Yes = "YES"
}
export declare enum CryogenName {
    Ethane = "ETHANE",
    EthanePropane_ = "ETHANE-PROPANE"
}
export declare enum InitialOfCenter {
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
export declare enum Provider {
    Author = "author",
    Repository = "repository"
}
export declare enum Group {
    Advisory = "Advisory"
}
export declare enum Id {
    Obslte = "OBSLTE",
    Sprsde = "SPRSDE"
}
export declare enum DbName {
    Bioisis = "BIOISIS",
    Bmcd = "BMCD",
    Bmrb = "BMRB",
    Emdb = "EMDB",
    Ndb = "NDB",
    Pdb = "PDB",
    PdbDev_ = "PDB-Dev",
    Sasbdb = "SASBDB",
    TargetDb = "TargetDB",
    TargetTrack = "TargetTrack",
    AlphaFoldDb = "AlphaFoldDB",
    BmRbig = "BMRbig",
    BioGrid = "BioGRID",
    Empiar = "EMPIAR",
    Massive = "MASSIVE",
    ModelArchive = "ModelArchive",
    Other = "Other",
    Pride = "PRIDE",
    ProXl = "ProXL",
    ProteomeXchange = "ProteomeXchange",
    IProX = "iProX",
    JPosTrepo = "jPOSTrepo"
}
export declare enum SgEntry {
    N = "N",
    Y = "Y"
}
export declare enum DepositSite {
    Bmrb = "BMRB",
    Bnl = "BNL",
    Ndb = "NDB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}
export declare enum MethodsDevelopmentCategory {
    Capri = "CAPRI",
    CasdNmr_ = "CASD-NMR",
    Casp = "CASP",
    D3R = "D3R",
    FoldIt = "FoldIt",
    GpcrDock = "GPCRDock",
    RnaPuzzles_ = "RNA-Puzzles"
}
export declare enum PdbFormatCompatible {
    N = "N",
    Y = "Y"
}
export declare enum ProcessSite {
    Bnl = "BNL",
    Ndb = "NDB",
    Pdbc = "PDBC",
    Pdbe = "PDBE",
    Pdbj = "PDBJ",
    Rcsb = "RCSB"
}
export declare enum StatusCodeCs {
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
export declare enum StatusCodeMr {
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
export declare enum StatusCodeSf {
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
export declare enum GroupType {
    Changedstate = "changedstate",
    Groundstate = "groundstate",
    Undefined = "undefined"
}
export declare enum SourceName {
    AlphaFold = "AlphaFold",
    ITasser = "ITasser",
    InsightIi = "InsightII",
    ModelArchive = "ModelArchive",
    Modeller = "Modeller",
    Other = "Other",
    Pdb = "PDB",
    PdbDev_ = "PDB-Dev",
    Phyre = "PHYRE",
    Robetta = "Robetta",
    RoseTtaFold = "RoseTTAFold",
    SwissModel = "SwissModel"
}
export declare enum SampleState {
    Anisotropic = "anisotropic",
    Isotropic = "isotropic"
}
export declare enum IonicStrengthUnits {
    M = "M",
    Notdefined = "Notdefined",
    MM = "mM"
}
export declare enum PHUnits {
    Notdefined = "Notdefined",
    PD = "pD",
    PH = "pH",
    PH_ = "pH*"
}
export declare enum TemperatureUnits {
    C = "C",
    K = "K",
    Notdefined = "Notdefined"
}
export declare enum Method {
    Fixedtarget = "fixedtarget",
    Injection = "injection"
}
export declare enum LigandsForBusterReport {
    N = "N",
    Y = "Y"
}
export declare enum BFactorType {
    Full = "FULL",
    Partial = "PARTIAL"
}
export declare enum HasReleasedExperimentalData {
    N = "N",
    Y = "Y"
}
export declare enum SourceDb {
    AlphaFoldDb = "AlphaFoldDB",
    ModelArchive = "ModelArchive"
}
export declare enum ExperimentalMethod {
    Em = "EM",
    Integrative = "Integrative",
    Multiplemethods = "Multiplemethods",
    Nmr = "NMR",
    Neutron = "Neutron",
    Other = "Other",
    XRay_ = "X-ray"
}
export declare enum IhmEnsembleFlag {
    N = "N",
    Y = "Y"
}
export declare enum IhmMultiScaleFlag {
    N = "N",
    Y = "Y"
}
export declare enum IhmMultiStateFlag {
    N = "N",
    Y = "Y"
}
export declare enum IhmOrderedStateFlag {
    N = "N",
    Y = "Y"
}
export declare enum StructureDeterminationMethodology {
    Computational = "computational",
    Experimental = "experimental",
    Integrative = "integrative"
}
export declare enum LsMatrixType {
    Atomblock = "atomblock",
    Diagonal = "diagonal",
    Full = "full",
    Fullcycle = "fullcycle",
    Sparse = "sparse",
    Userblock = "userblock"
}
export declare enum PdbxTlsResidualAdpFlag {
    Likelyresidual = "LIKELYRESIDUAL",
    Unverified = "UNVERIFIED"
}
export declare enum Language {
    Ada = "Ada",
    Awk = "Awk",
    Basic = "Basic",
    C = "C"
}
export declare enum PdbxCaspFlag {
    N = "N",
    Y = "Y"
}
export declare enum CellSetting {
    Cubic = "cubic",
    Hexagonal = "hexagonal",
    Monoclinic = "monoclinic",
    Orthorhombic = "orthorhombic",
    Rhombohedral = "rhombohedral",
    Tetragonal = "tetragonal",
    Triclinic = "triclinic",
    Trigonal = "trigonal"
}
export declare enum AggregationMethod {
    MatchingDepositGroupId = "matching_deposit_group_id"
}
export declare enum ProvenanceCode {
    PdbBind = "PDBBind",
    BindingMoad = "BindingMOAD",
    BindingDb = "BindingDB"
}
export declare enum InterfaceCharacter {
    Homo = "homo",
    Hetero = "hetero"
}
export declare enum IsBestInstance {
    N = "N",
    Y = "Y"
}
export declare enum IsSubjectOfInvestigation {
    N = "N",
    Y = "Y"
}
export declare enum IsSubjectOfInvestigationProvenance {
    Author = "Author",
    Rcsb = "RCSB"
}
export declare enum TargetIsBound {
    N = "N",
    Y = "Y"
}
export declare enum RcsbPfamSeedSource {
    Family = "Family",
    Domain = "Domain",
    Repeat = "Repeat",
    Motif = "Motif",
    Disordered = "Disordered",
    CoiledCoil_ = "Coiled-coil"
}
export declare enum RcsbPfamProvenanceCode {
    PfamA_ = "Pfam-A"
}
export declare enum NstdLinkage {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}
export declare enum NstdMonomer {
    N = "n",
    No = "no",
    Y = "y",
    Yes = "yes"
}
export declare enum PdbxSequenceEvidenceCode {
    Depositorprovided = "depositorprovided",
    Derivedfromcoordinates = "derivedfromcoordinates"
}
export declare enum RcsbEntityPolymerType {
    Dna = "DNA",
    NaHybrid_ = "NA-hybrid",
    Other = "Other",
    Protein = "Protein",
    Rna = "RNA"
}
export declare enum PdbxAltSourceFlag {
    Model = "model",
    Sample = "sample"
}
export declare enum PdbxSeqType {
    Biologicalsequence = "Biologicalsequence",
    CTerminaltag_ = "C-terminaltag",
    Linker = "Linker",
    NTerminaltag_ = "N-terminaltag"
}
export declare enum SourceType {
    Geneticallyengineered = "geneticallyengineered",
    Natural = "natural",
    Synthetic = "synthetic"
}
export declare enum RcsbMultipleSourceFlag {
    N = "N",
    Y = "Y"
}
export declare enum SrcMethod {
    Man = "man",
    Nat = "nat",
    Syn = "syn"
}
export declare enum DatabaseName {
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
export declare enum RelatedResourceName {
    ChEmbl = "ChEMBL",
    DrugBank = "DrugBank",
    Pharos = "Pharos"
}
export declare enum BindingAssayValueType {
    PAc50 = "pAC50",
    PEc50 = "pEC50",
    PIc50 = "pIC50",
    PKd = "pKd",
    PKi = "pKi"
}
export declare enum NeighborFlag {
    N = "N",
    Y = "Y"
}
export declare enum RcsbMembraneLineageProvenanceCode {
    Mpstruc = "Mpstruc",
    Homology = "Homology"
}
export declare enum ReferenceName {
    Impc = "IMPC",
    Gtex = "GTEX",
    Pharos = "PHAROS"
}
export declare enum GroupProvenanceId {
    ProvenanceSequenceIdentity = "provenance_sequence_identity",
    ProvenanceMatchingUniprotAccession = "provenance_matching_uniprot_accession",
    ProvenanceMatchingDepositGroupId = "provenance_matching_deposit_group_id",
    ProvenanceMatchingChemicalComponentId = "provenance_matching_chemical_component_id"
}
export declare enum GroupMembersGranularity {
    Assembly = "assembly",
    Entry = "entry",
    PolymerEntity = "polymer_entity",
    NonPolymerEntity = "non_polymer_entity",
    PolymerEntityInstance = "polymer_entity_instance"
}
export declare enum RankingCriteriaType {
    Coverage = "coverage"
}
export declare enum SimilarityFunction {
    Rmsd = "rmsd",
    SequenceIdentity = "sequence_identity"
}
export declare enum ShapeEntityType {
    Assembly = "assembly",
    Chain = "chain",
    Domain = "domain"
}
export declare enum PrereleaseSequenceAvailableFlag {
    N = "N",
    Y = "Y"
}
