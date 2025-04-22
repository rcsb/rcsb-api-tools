"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.Mode = exports.IlluminationMode = exports.Cryogen = exports.AlignmentProcedure = exports.DetectorMode = exports.ReconstructionMethod = exports.AggregationState = exports.SymmetryType = exports.RefSpace = exports.RefProtocol = exports.PdbxScatteringType = exports.PdbxMonochromaticOrLaueML = exports.PdbxSerialCrystalExperiment = exports.DatabaseId = exports.UnpublishedFlag = exports.RcsbIsPrimary = exports.CoordinateLinkage = exports.Source = exports.Country = exports.Approved = exports.ReferenceDatabaseName = exports.RepresentAs = exports.ReleaseStatus = exports.Class = exports.NrpFlag = exports.Observed = exports.Hetero = exports.ProcessingSite = exports.PdbxReleaseStatus = exports.PdbxProcessingSite = exports.PdbxType = exports.LigandIsBound = exports.ValueOrder = exports.Role = exports.UncertaintyEstimateType = exports.ReferenceScheme = exports.ResourceName = exports.ProvenanceSource = exports.Name = exports.Kind = exports.SelectedPolymerEntityTypes = exports.PolymerComposition = exports.NaPolymerEntityTypes = exports.RcsbDetails = exports.RcsbCandidateAssembly = exports.StatusCode = exports.Status = exports.PropertyName = exports.Type = void 0;
exports.NstdLinkage = exports.RcsbPfamProvenanceCode = exports.RcsbPfamSeedSource = exports.TargetIsBound = exports.IsSubjectOfInvestigationProvenance = exports.IsSubjectOfInvestigation = exports.IsBestInstance = exports.InterfaceCharacter = exports.ProvenanceCode = exports.AggregationMethod = exports.CellSetting = exports.PdbxCaspFlag = exports.Language = exports.PdbxTlsResidualAdpFlag = exports.LsMatrixType = exports.StructureDeterminationMethodology = exports.IhmOrderedStateFlag = exports.IhmMultiStateFlag = exports.IhmMultiScaleFlag = exports.IhmEnsembleFlag = exports.ExperimentalMethod = exports.SourceDb = exports.HasReleasedExperimentalData = exports.BFactorType = exports.LigandsForBusterReport = exports.Method = exports.TemperatureUnits = exports.PHUnits = exports.IonicStrengthUnits = exports.SampleState = exports.SourceName = exports.GroupType = exports.StatusCodeSf = exports.StatusCodeMr = exports.StatusCodeCs = exports.ProcessSite = exports.PdbFormatCompatible = exports.MethodsDevelopmentCategory = exports.DepositSite = exports.SgEntry = exports.DbName = exports.Id = exports.Group = exports.Provider = exports.InitialOfCenter = exports.CryogenName = exports.VitrificationApplied = exports.StainingApplied = exports.ShadowingApplied = exports.EmbeddingApplied = void 0;
exports.PrereleaseSequenceAvailableFlag = exports.ShapeEntityType = exports.SimilarityFunction = exports.RankingCriteriaType = exports.GroupMembersGranularity = exports.GroupProvenanceId = exports.ReferenceName = exports.RcsbMembraneLineageProvenanceCode = exports.NeighborFlag = exports.BindingAssayValueType = exports.RelatedResourceName = exports.DatabaseName = exports.SrcMethod = exports.RcsbMultipleSourceFlag = exports.SourceType = exports.PdbxSeqType = exports.PdbxAltSourceFlag = exports.RcsbEntityPolymerType = exports.PdbxSequenceEvidenceCode = exports.NstdMonomer = void 0;
var Type;
(function (Type) {
    Type["Asa"] = "ASA";
    Type["AsaUnbound"] = "ASA_UNBOUND";
    Type["AsaBound"] = "ASA_BOUND";
    Type["ActiveSite"] = "ACTIVE_SITE";
    Type["BindingSite"] = "BINDING_SITE";
    Type["CalciumBindingRegion"] = "CALCIUM_BINDING_REGION";
    Type["Chain"] = "CHAIN";
    Type["CompositionallyBiasedRegion"] = "COMPOSITIONALLY_BIASED_REGION";
    Type["CrossLink"] = "CROSS_LINK";
    Type["DnaBindingRegion"] = "DNA_BINDING_REGION";
    Type["Domain"] = "DOMAIN";
    Type["GlycosylationSite"] = "GLYCOSYLATION_SITE";
    Type["InitiatorMethionine"] = "INITIATOR_METHIONINE";
    Type["LipidMoietyBindingRegion"] = "LIPID_MOIETY_BINDING_REGION";
    Type["MetalIonBindingSite"] = "METAL_ION_BINDING_SITE";
    Type["ModifiedResidue"] = "MODIFIED_RESIDUE";
    Type["MutagenesisSite"] = "MUTAGENESIS_SITE";
    Type["NonConsecutiveResidues"] = "NON_CONSECUTIVE_RESIDUES";
    Type["NonTerminalResidue"] = "NON_TERMINAL_RESIDUE";
    Type["NucleotidePhosphateBindingRegion"] = "NUCLEOTIDE_PHOSPHATE_BINDING_REGION";
    Type["Peptide"] = "PEPTIDE";
    Type["Propeptide"] = "PROPEPTIDE";
    Type["RegionOfInterest"] = "REGION_OF_INTEREST";
    Type["Repeat"] = "REPEAT";
    Type["NonStandardAminoAcid"] = "NON_STANDARD_AMINO_ACID";
    Type["SequenceConflict"] = "SEQUENCE_CONFLICT";
    Type["SequenceVariant"] = "SEQUENCE_VARIANT";
    Type["ShortSequenceMotif"] = "SHORT_SEQUENCE_MOTIF";
    Type["SignalPeptide"] = "SIGNAL_PEPTIDE";
    Type["Site"] = "SITE";
    Type["SpliceVariant"] = "SPLICE_VARIANT";
    Type["TopologicalDomain"] = "TOPOLOGICAL_DOMAIN";
    Type["TransitPeptide"] = "TRANSIT_PEPTIDE";
    Type["TransmembraneRegion"] = "TRANSMEMBRANE_REGION";
    Type["UnsureResidue"] = "UNSURE_RESIDUE";
    Type["ZincFingerRegion"] = "ZINC_FINGER_REGION";
    Type["IntramembraneRegion"] = "INTRAMEMBRANE_REGION";
    Type["Hydropathy"] = "hydropathy";
    Type["Disorder"] = "disorder";
    Type["DisorderBinding"] = "disorder_binding";
    Type["CardModel"] = "CARD_MODEL";
    Type["ImgtAntibodyDescription"] = "IMGT_ANTIBODY_DESCRIPTION";
    Type["ImgtAntibodyDomainName"] = "IMGT_ANTIBODY_DOMAIN_NAME";
    Type["ImgtAntibodyGeneAlleleName"] = "IMGT_ANTIBODY_GENE_ALLELE_NAME";
    Type["ImgtAntibodyOrganismName"] = "IMGT_ANTIBODY_ORGANISM_NAME";
    Type["ImgtAntibodyProteinName"] = "IMGT_ANTIBODY_PROTEIN_NAME";
    Type["ImgtAntibodyReceptorDescription"] = "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION";
    Type["ImgtAntibodyReceptorType"] = "IMGT_ANTIBODY_RECEPTOR_TYPE";
    Type["Pfam"] = "Pfam";
    Type["SabdabAntibodyAntigenName"] = "SABDAB_ANTIBODY_ANTIGEN_NAME";
    Type["SabdabAntibodyName"] = "SABDAB_ANTIBODY_NAME";
    Type["SabdabAntibodyTarget"] = "SABDAB_ANTIBODY_TARGET";
    Type["Artifact"] = "artifact";
    Type["ModifiedMonomer"] = "modified_monomer";
    Type["Mutation"] = "mutation";
    Type["AngleOutlier"] = "ANGLE_OUTLIER";
    Type["AngleOutliers"] = "ANGLE_OUTLIERS";
    Type["AverageOccupancy"] = "AVERAGE_OCCUPANCY";
    Type["Bend"] = "BEND";
    Type["BondOutlier"] = "BOND_OUTLIER";
    Type["BondOutliers"] = "BOND_OUTLIERS";
    Type["CMannosylationSite_"] = "C-MANNOSYLATION_SITE";
    Type["Cath"] = "CATH";
    Type["ChiralOutliers"] = "CHIRAL_OUTLIERS";
    Type["CisPeptide_"] = "CIS-PEPTIDE";
    Type["Clashes"] = "CLASHES";
    Type["Ecod"] = "ECOD";
    Type["HelixP"] = "HELIX_P";
    Type["HelxLhPpP"] = "HELX_LH_PP_P";
    Type["HelxRh3TP"] = "HELX_RH_3T_P";
    Type["HelxRhAlP"] = "HELX_RH_AL_P";
    Type["HelxRhPiP"] = "HELX_RH_PI_P";
    Type["LigandCovalentLinkage"] = "LIGAND_COVALENT_LINKAGE";
    Type["LigandInteraction"] = "LIGAND_INTERACTION";
    Type["LigandMetalCoordinationLinkage"] = "LIGAND_METAL_COORDINATION_LINKAGE";
    Type["MaQaMetricLocalTypeContactProbability"] = "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY";
    Type["MaQaMetricLocalTypeDistance"] = "MA_QA_METRIC_LOCAL_TYPE_DISTANCE";
    Type["MaQaMetricLocalTypeEnergy"] = "MA_QA_METRIC_LOCAL_TYPE_ENERGY";
    Type["MaQaMetricLocalTypeIptm"] = "MA_QA_METRIC_LOCAL_TYPE_IPTM";
    Type["MaQaMetricLocalTypeNormalizedScore"] = "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE";
    Type["MaQaMetricLocalTypeOther"] = "MA_QA_METRIC_LOCAL_TYPE_OTHER";
    Type["MaQaMetricLocalTypePae"] = "MA_QA_METRIC_LOCAL_TYPE_PAE";
    Type["MaQaMetricLocalTypePlddt"] = "MA_QA_METRIC_LOCAL_TYPE_PLDDT";
    Type["MaQaMetricLocalTypePlddtAllAtom_"] = "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM";
})(Type || (exports.Type = Type = {}));
var PropertyName;
(function (PropertyName) {
    PropertyName["Link"] = "LINK";
    PropertyName["WildType"] = "WILD_TYPE";
    PropertyName["MutatedType"] = "MUTATED_TYPE";
    PropertyName["ConsequenceType"] = "CONSEQUENCE_TYPE";
    PropertyName["PredictedImpact"] = "PREDICTED_IMPACT";
    PropertyName["ClinicalSignificance"] = "CLINICAL_SIGNIFICANCE";
    PropertyName["Evidence"] = "EVIDENCE";
    PropertyName["DiseaseType"] = "DISEASE_TYPE";
    PropertyName["StrainId"] = "STRAIN_ID";
    PropertyName["Subtype"] = "SUBTYPE";
    PropertyName["TargetId"] = "TARGET_ID";
    PropertyName["CardModelDescription"] = "CARD_MODEL_DESCRIPTION";
    PropertyName["CardModelOrganism"] = "CARD_MODEL_ORGANISM";
    PropertyName["ParentCompId"] = "PARENT_COMP_ID";
    PropertyName["CathDomainId"] = "CATH_DOMAIN_ID";
    PropertyName["CathName"] = "CATH_NAME";
    PropertyName["EcodDomainId"] = "ECOD_DOMAIN_ID";
    PropertyName["EcodFamilyName"] = "ECOD_FAMILY_NAME";
    PropertyName["ModelcifModelId"] = "MODELCIF_MODEL_ID";
    PropertyName["OmegaAngle"] = "OMEGA_ANGLE";
    PropertyName["PartnerAsymId"] = "PARTNER_ASYM_ID";
    PropertyName["PartnerBondDistance"] = "PARTNER_BOND_DISTANCE";
    PropertyName["PartnerCompId"] = "PARTNER_COMP_ID";
    PropertyName["PdbModelNum"] = "PDB_MODEL_NUM";
    PropertyName["Scop2DomainId"] = "SCOP2_DOMAIN_ID";
    PropertyName["Scop2FamilyId"] = "SCOP2_FAMILY_ID";
    PropertyName["Scop2FamilyName"] = "SCOP2_FAMILY_NAME";
    PropertyName["Scop2SuperfamilyId"] = "SCOP2_SUPERFAMILY_ID";
    PropertyName["Scop2SuperfamilyName"] = "SCOP2_SUPERFAMILY_NAME";
    PropertyName["ScopDomainId"] = "SCOP_DOMAIN_ID";
    PropertyName["ScopName"] = "SCOP_NAME";
    PropertyName["ScopSunId"] = "SCOP_SUN_ID";
    PropertyName["SheetSense"] = "SHEET_SENSE";
})(PropertyName || (exports.PropertyName = PropertyName = {}));
var Status;
(function (Status) {
    Status["Current"] = "CURRENT";
    Status["Removed"] = "REMOVED";
    Status["Unreleased"] = "UNRELEASED";
})(Status || (exports.Status = Status = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["Auco"] = "AUCO";
    StatusCode["Auth"] = "AUTH";
    StatusCode["Hold"] = "HOLD";
    StatusCode["Hpub"] = "HPUB";
    StatusCode["Obs"] = "OBS";
    StatusCode["Polc"] = "POLC";
    StatusCode["Proc"] = "PROC";
    StatusCode["Refi"] = "REFI";
    StatusCode["Rel"] = "REL";
    StatusCode["Repl"] = "REPL";
    StatusCode["Rmvd"] = "RMVD";
    StatusCode["Trsf"] = "TRSF";
    StatusCode["Wait"] = "WAIT";
    StatusCode["Wdrn"] = "WDRN";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
var RcsbCandidateAssembly;
(function (RcsbCandidateAssembly) {
    RcsbCandidateAssembly["N"] = "N";
    RcsbCandidateAssembly["Y"] = "Y";
})(RcsbCandidateAssembly || (exports.RcsbCandidateAssembly = RcsbCandidateAssembly = {}));
var RcsbDetails;
(function (RcsbDetails) {
    RcsbDetails["AuthorAndSoftwareDefinedAssembly"] = "author_and_software_defined_assembly";
    RcsbDetails["AuthorDefinedAssembly"] = "author_defined_assembly";
    RcsbDetails["SoftwareDefinedAssembly"] = "software_defined_assembly";
})(RcsbDetails || (exports.RcsbDetails = RcsbDetails = {}));
var NaPolymerEntityTypes;
(function (NaPolymerEntityTypes) {
    NaPolymerEntityTypes["DnAonly"] = "DNAonly";
    NaPolymerEntityTypes["DnaRnAonly_"] = "DNA/RNAonly";
    NaPolymerEntityTypes["NaHybridonly_"] = "NA-hybridonly";
    NaPolymerEntityTypes["Other"] = "Other";
    NaPolymerEntityTypes["RnAonly"] = "RNAonly";
})(NaPolymerEntityTypes || (exports.NaPolymerEntityTypes = NaPolymerEntityTypes = {}));
var PolymerComposition;
(function (PolymerComposition) {
    PolymerComposition["Dna"] = "DNA";
})(PolymerComposition || (exports.PolymerComposition = PolymerComposition = {}));
var SelectedPolymerEntityTypes;
(function (SelectedPolymerEntityTypes) {
    SelectedPolymerEntityTypes["Nucleicacidonly"] = "Nucleicacidonly";
    SelectedPolymerEntityTypes["Other"] = "Other";
    SelectedPolymerEntityTypes["Proteinonly"] = "Proteinonly";
    SelectedPolymerEntityTypes["ProteinNa_"] = "Protein/NA";
})(SelectedPolymerEntityTypes || (exports.SelectedPolymerEntityTypes = SelectedPolymerEntityTypes = {}));
var Kind;
(function (Kind) {
    Kind["GlobalSymmetry"] = "GlobalSymmetry";
    Kind["PseudoSymmetry"] = "PseudoSymmetry";
    Kind["LocalSymmetry"] = "LocalSymmetry";
})(Kind || (exports.Kind = Kind = {}));
var Name;
(function (Name) {
    Name["McsaMotifCompatibility"] = "MCSA_MOTIF_COMPATIBILITY";
})(Name || (exports.Name = Name = {}));
var ProvenanceSource;
(function (ProvenanceSource) {
    ProvenanceSource["Pdb"] = "PDB";
    ProvenanceSource["Rcsb"] = "RCSB";
})(ProvenanceSource || (exports.ProvenanceSource = ProvenanceSource = {}));
var ResourceName;
(function (ResourceName) {
    ResourceName["GlyCosmos"] = "GlyCosmos";
    ResourceName["GlyGen"] = "GlyGen";
    ResourceName["GlyTouCan"] = "GlyTouCan";
})(ResourceName || (exports.ResourceName = ResourceName = {}));
var ReferenceScheme;
(function (ReferenceScheme) {
    ReferenceScheme["PdBentity"] = "PDBentity";
})(ReferenceScheme || (exports.ReferenceScheme = ReferenceScheme = {}));
var UncertaintyEstimateType;
(function (UncertaintyEstimateType) {
    UncertaintyEstimateType["ZScore_"] = "Z-Score";
})(UncertaintyEstimateType || (exports.UncertaintyEstimateType = UncertaintyEstimateType = {}));
var Role;
(function (Role) {
    Role["CMannosylation_"] = "C-Mannosylation";
    Role["NGlycosylation_"] = "N-Glycosylation";
    Role["OGlycosylation_"] = "O-Glycosylation";
})(Role || (exports.Role = Role = {}));
var ValueOrder;
(function (ValueOrder) {
    ValueOrder["Doub"] = "doub";
    ValueOrder["Quad"] = "quad";
    ValueOrder["Sing"] = "sing";
    ValueOrder["Trip"] = "trip";
})(ValueOrder || (exports.ValueOrder = ValueOrder = {}));
var LigandIsBound;
(function (LigandIsBound) {
    LigandIsBound["N"] = "N";
    LigandIsBound["Y"] = "Y";
})(LigandIsBound || (exports.LigandIsBound = LigandIsBound = {}));
var PdbxType;
(function (PdbxType) {
    PdbxType["Atomn"] = "ATOMN";
    PdbxType["Atomp"] = "ATOMP";
    PdbxType["Atoms"] = "ATOMS";
    PdbxType["Hetac"] = "HETAC";
    PdbxType["Hetad"] = "HETAD";
    PdbxType["Hetai"] = "HETAI";
    PdbxType["Hetain"] = "HETAIN";
    PdbxType["Hetas"] = "HETAS";
    PdbxType["Hetic"] = "HETIC";
})(PdbxType || (exports.PdbxType = PdbxType = {}));
var PdbxProcessingSite;
(function (PdbxProcessingSite) {
    PdbxProcessingSite["Ebi"] = "EBI";
    PdbxProcessingSite["Pdbc"] = "PDBC";
    PdbxProcessingSite["Pdbe"] = "PDBE";
    PdbxProcessingSite["Pdbj"] = "PDBJ";
    PdbxProcessingSite["Rcsb"] = "RCSB";
})(PdbxProcessingSite || (exports.PdbxProcessingSite = PdbxProcessingSite = {}));
var PdbxReleaseStatus;
(function (PdbxReleaseStatus) {
    PdbxReleaseStatus["Del"] = "DEL";
    PdbxReleaseStatus["Hold"] = "HOLD";
    PdbxReleaseStatus["Hpub"] = "HPUB";
    PdbxReleaseStatus["Obs"] = "OBS";
    PdbxReleaseStatus["RefOnly"] = "REF_ONLY";
    PdbxReleaseStatus["Rel"] = "REL";
})(PdbxReleaseStatus || (exports.PdbxReleaseStatus = PdbxReleaseStatus = {}));
var ProcessingSite;
(function (ProcessingSite) {
    ProcessingSite["Bmrb"] = "BMRB";
    ProcessingSite["Pdbc"] = "PDBC";
    ProcessingSite["Pdbe"] = "PDBE";
    ProcessingSite["Pdbj"] = "PDBJ";
    ProcessingSite["Rcsb"] = "RCSB";
})(ProcessingSite || (exports.ProcessingSite = ProcessingSite = {}));
var Hetero;
(function (Hetero) {
    Hetero["N"] = "N";
    Hetero["Y"] = "Y";
})(Hetero || (exports.Hetero = Hetero = {}));
var Observed;
(function (Observed) {
    Observed["N"] = "N";
    Observed["Y"] = "Y";
})(Observed || (exports.Observed = Observed = {}));
var NrpFlag;
(function (NrpFlag) {
    NrpFlag["N"] = "N";
    NrpFlag["Y"] = "Y";
})(NrpFlag || (exports.NrpFlag = NrpFlag = {}));
var Class;
(function (Class) {
    Class["Antagonist"] = "Antagonist";
    Class["Anthelmintic"] = "Anthelmintic";
    Class["Antibiotic"] = "Antibiotic";
})(Class || (exports.Class = Class = {}));
var ReleaseStatus;
(function (ReleaseStatus) {
    ReleaseStatus["Hold"] = "HOLD";
    ReleaseStatus["Obs"] = "OBS";
    ReleaseStatus["Rel"] = "REL";
    ReleaseStatus["Wait"] = "WAIT";
    ReleaseStatus["Del"] = "DEL";
    ReleaseStatus["Hpub"] = "HPUB";
    ReleaseStatus["RefOnly"] = "REF_ONLY";
})(ReleaseStatus || (exports.ReleaseStatus = ReleaseStatus = {}));
var RepresentAs;
(function (RepresentAs) {
    RepresentAs["Branched"] = "branched";
    RepresentAs["Polymer"] = "polymer";
    RepresentAs["Singlemolecule"] = "singlemolecule";
})(RepresentAs || (exports.RepresentAs = RepresentAs = {}));
var ReferenceDatabaseName;
(function (ReferenceDatabaseName) {
    ReferenceDatabaseName["UniProt"] = "UniProt";
})(ReferenceDatabaseName || (exports.ReferenceDatabaseName = ReferenceDatabaseName = {}));
var Approved;
(function (Approved) {
    Approved["N"] = "N";
    Approved["Y"] = "Y";
})(Approved || (exports.Approved = Approved = {}));
var Country;
(function (Country) {
    Country["Canada"] = "Canada";
    Country["Eu"] = "EU";
    Country["Us"] = "US";
})(Country || (exports.Country = Country = {}));
var Source;
(function (Source) {
    Source["Dpd"] = "DPD";
    Source["Ema"] = "EMA";
    Source["Fdandc"] = "FDANDC";
})(Source || (exports.Source = Source = {}));
var CoordinateLinkage;
(function (CoordinateLinkage) {
    CoordinateLinkage["N"] = "n";
    CoordinateLinkage["No"] = "no";
    CoordinateLinkage["Y"] = "y";
    CoordinateLinkage["Yes"] = "yes";
})(CoordinateLinkage || (exports.CoordinateLinkage = CoordinateLinkage = {}));
var RcsbIsPrimary;
(function (RcsbIsPrimary) {
    RcsbIsPrimary["N"] = "N";
    RcsbIsPrimary["Y"] = "Y";
})(RcsbIsPrimary || (exports.RcsbIsPrimary = RcsbIsPrimary = {}));
var UnpublishedFlag;
(function (UnpublishedFlag) {
    UnpublishedFlag["N"] = "N";
    UnpublishedFlag["Y"] = "Y";
})(UnpublishedFlag || (exports.UnpublishedFlag = UnpublishedFlag = {}));
var DatabaseId;
(function (DatabaseId) {
    DatabaseId["AlphaFoldDb"] = "AlphaFoldDB";
    DatabaseId["Bmrb"] = "BMRB";
    DatabaseId["Ebi"] = "EBI";
    DatabaseId["Emdb"] = "EMDB";
    DatabaseId["Modbase"] = "MODBASE";
    DatabaseId["ModelArchive"] = "ModelArchive";
    DatabaseId["Ndb"] = "NDB";
    DatabaseId["Pdb"] = "PDB";
    DatabaseId["PdbDev_"] = "PDB-Dev";
    DatabaseId["Pdbe"] = "PDBE";
    DatabaseId["PdbAcc"] = "PDB_ACC";
    DatabaseId["Rcsb"] = "RCSB";
    DatabaseId["SwissModelRepository_"] = "SWISS-MODEL_REPOSITORY";
    DatabaseId["Wwpdb"] = "WWPDB";
})(DatabaseId || (exports.DatabaseId = DatabaseId = {}));
var PdbxSerialCrystalExperiment;
(function (PdbxSerialCrystalExperiment) {
    PdbxSerialCrystalExperiment["N"] = "N";
    PdbxSerialCrystalExperiment["Y"] = "Y";
})(PdbxSerialCrystalExperiment || (exports.PdbxSerialCrystalExperiment = PdbxSerialCrystalExperiment = {}));
var PdbxMonochromaticOrLaueML;
(function (PdbxMonochromaticOrLaueML) {
    PdbxMonochromaticOrLaueML["L"] = "L";
    PdbxMonochromaticOrLaueML["M"] = "M";
})(PdbxMonochromaticOrLaueML || (exports.PdbxMonochromaticOrLaueML = PdbxMonochromaticOrLaueML = {}));
var PdbxScatteringType;
(function (PdbxScatteringType) {
    PdbxScatteringType["Electron"] = "electron";
    PdbxScatteringType["Neutron"] = "neutron";
    PdbxScatteringType["XRay_"] = "x-ray";
})(PdbxScatteringType || (exports.PdbxScatteringType = PdbxScatteringType = {}));
var RefProtocol;
(function (RefProtocol) {
    RefProtocol["Abinitiomodel"] = "ABINITIOMODEL";
    RefProtocol["Backbonetrace"] = "BACKBONETRACE";
    RefProtocol["Flexiblefit"] = "FLEXIBLEFIT";
    RefProtocol["Other"] = "OTHER";
    RefProtocol["Rigidbodyfit"] = "RIGIDBODYFIT";
})(RefProtocol || (exports.RefProtocol = RefProtocol = {}));
var RefSpace;
(function (RefSpace) {
    RefSpace["Real"] = "REAL";
    RefSpace["Reciprocal"] = "RECIPROCAL";
})(RefSpace || (exports.RefSpace = RefSpace = {}));
var SymmetryType;
(function (SymmetryType) {
    SymmetryType["_2Dcrystal"] = "2DCRYSTAL";
    SymmetryType["_3Dcrystal"] = "3DCRYSTAL";
    SymmetryType["Helical"] = "HELICAL";
    SymmetryType["Point"] = "POINT";
})(SymmetryType || (exports.SymmetryType = SymmetryType = {}));
var AggregationState;
(function (AggregationState) {
    AggregationState["_2Darray"] = "2DARRAY";
    AggregationState["_3Darray"] = "3DARRAY";
    AggregationState["Cell"] = "CELL";
    AggregationState["Filament"] = "FILAMENT";
    AggregationState["Helicalarray"] = "HELICALARRAY";
    AggregationState["Particle"] = "PARTICLE";
    AggregationState["Tissue"] = "TISSUE";
})(AggregationState || (exports.AggregationState = AggregationState = {}));
var ReconstructionMethod;
(function (ReconstructionMethod) {
    ReconstructionMethod["Crystallography"] = "CRYSTALLOGRAPHY";
    ReconstructionMethod["Helical"] = "HELICAL";
    ReconstructionMethod["Singleparticle"] = "SINGLEPARTICLE";
    ReconstructionMethod["Subtomogramaveraging"] = "SUBTOMOGRAMAVERAGING";
    ReconstructionMethod["Tomography"] = "TOMOGRAPHY";
})(ReconstructionMethod || (exports.ReconstructionMethod = ReconstructionMethod = {}));
var DetectorMode;
(function (DetectorMode) {
    DetectorMode["Counting"] = "COUNTING";
    DetectorMode["Integrating"] = "INTEGRATING";
    DetectorMode["Other"] = "OTHER";
    DetectorMode["SuperResolution_"] = "SUPER-RESOLUTION";
})(DetectorMode || (exports.DetectorMode = DetectorMode = {}));
var AlignmentProcedure;
(function (AlignmentProcedure) {
    AlignmentProcedure["Basic"] = "BASIC";
    AlignmentProcedure["Comafree"] = "COMAFREE";
    AlignmentProcedure["None"] = "NONE";
    AlignmentProcedure["Other"] = "OTHER";
    AlignmentProcedure["Zemlintableau"] = "ZEMLINTABLEAU";
})(AlignmentProcedure || (exports.AlignmentProcedure = AlignmentProcedure = {}));
var Cryogen;
(function (Cryogen) {
    Cryogen["Helium"] = "HELIUM";
    Cryogen["Nitrogen"] = "NITROGEN";
})(Cryogen || (exports.Cryogen = Cryogen = {}));
var IlluminationMode;
(function (IlluminationMode) {
    IlluminationMode["Floodbeam"] = "FLOODBEAM";
    IlluminationMode["Other"] = "OTHER";
    IlluminationMode["Spotscan"] = "SPOTSCAN";
})(IlluminationMode || (exports.IlluminationMode = IlluminationMode = {}));
var Mode;
(function (Mode) {
    Mode["_4DStem_"] = "4D-STEM";
    Mode["Brightfield"] = "BRIGHTFIELD";
    Mode["Darkfield"] = "DARKFIELD";
    Mode["Diffraction"] = "DIFFRACTION";
    Mode["Other"] = "OTHER";
})(Mode || (exports.Mode = Mode = {}));
var Category;
(function (Category) {
    Category["Classification"] = "CLASSIFICATION";
})(Category || (exports.Category = Category = {}));
var EmbeddingApplied;
(function (EmbeddingApplied) {
    EmbeddingApplied["No"] = "NO";
    EmbeddingApplied["Yes"] = "YES";
})(EmbeddingApplied || (exports.EmbeddingApplied = EmbeddingApplied = {}));
var ShadowingApplied;
(function (ShadowingApplied) {
    ShadowingApplied["No"] = "NO";
    ShadowingApplied["Yes"] = "YES";
})(ShadowingApplied || (exports.ShadowingApplied = ShadowingApplied = {}));
var StainingApplied;
(function (StainingApplied) {
    StainingApplied["No"] = "NO";
    StainingApplied["Yes"] = "YES";
})(StainingApplied || (exports.StainingApplied = StainingApplied = {}));
var VitrificationApplied;
(function (VitrificationApplied) {
    VitrificationApplied["No"] = "NO";
    VitrificationApplied["Yes"] = "YES";
})(VitrificationApplied || (exports.VitrificationApplied = VitrificationApplied = {}));
var CryogenName;
(function (CryogenName) {
    CryogenName["Ethane"] = "ETHANE";
    CryogenName["EthanePropane_"] = "ETHANE-PROPANE";
})(CryogenName || (exports.CryogenName = CryogenName = {}));
var InitialOfCenter;
(function (InitialOfCenter) {
    InitialOfCenter["Atcg3D"] = "ATCG3D";
    InitialOfCenter["Bigs"] = "BIGS";
    InitialOfCenter["Bsgc"] = "BSGC";
    InitialOfCenter["Bsgi"] = "BSGI";
    InitialOfCenter["Cebs"] = "CEBS";
    InitialOfCenter["Cellmat"] = "CELLMAT";
    InitialOfCenter["Cesg"] = "CESG";
    InitialOfCenter["Chsam"] = "CHSAM";
    InitialOfCenter["Chtsb"] = "CHTSB";
    InitialOfCenter["Csbid"] = "CSBID";
    InitialOfCenter["Csgid"] = "CSGID";
    InitialOfCenter["Csmp"] = "CSMP";
    InitialOfCenter["Gpcr"] = "GPCR";
    InitialOfCenter["Ifn"] = "IFN";
    InitialOfCenter["Isfi"] = "ISFI";
    InitialOfCenter["Ispc"] = "ISPC";
    InitialOfCenter["Jcsg"] = "JCSG";
    InitialOfCenter["Mcmr"] = "MCMR";
    InitialOfCenter["Mcsg"] = "MCSG";
    InitialOfCenter["Mpid"] = "MPID";
    InitialOfCenter["Mpp"] = "MPP";
    InitialOfCenter["Mpsbc"] = "MPSBC";
    InitialOfCenter["MpSbyNmr"] = "MPSbyNMR";
    InitialOfCenter["Msgp"] = "MSGP";
    InitialOfCenter["Msgpp"] = "MSGPP";
    InitialOfCenter["Mtbi"] = "MTBI";
    InitialOfCenter["Nesg"] = "NESG";
    InitialOfCenter["NhRs"] = "NHRs";
    InitialOfCenter["NpcXstals"] = "NPCXstals";
    InitialOfCenter["Nycomps"] = "NYCOMPS";
    InitialOfCenter["Nysgrc"] = "NYSGRC";
    InitialOfCenter["Nysgxrc"] = "NYSGXRC";
    InitialOfCenter["NatPro"] = "NatPro";
    InitialOfCenter["Ocsp"] = "OCSP";
    InitialOfCenter["Oppf"] = "OPPF";
    InitialOfCenter["Pcsep"] = "PCSEP";
    InitialOfCenter["Psf"] = "PSF";
    InitialOfCenter["Rsgi"] = "RSGI";
    InitialOfCenter["S2F"] = "S2F";
    InitialOfCenter["Sastad"] = "SASTAD";
    InitialOfCenter["Secsg"] = "SECSG";
    InitialOfCenter["Sgc"] = "SGC";
    InitialOfCenter["Sgcges"] = "SGCGES";
    InitialOfCenter["Sgpp"] = "SGPP";
    InitialOfCenter["Spine"] = "SPINE";
    InitialOfCenter["Spine2_"] = "SPINE-2";
    InitialOfCenter["Ssgcid"] = "SSGCID";
    InitialOfCenter["Sspf"] = "SSPF";
    InitialOfCenter["Stemcell"] = "STEMCELL";
    InitialOfCenter["Tbsgc"] = "TBSGC";
    InitialOfCenter["Tcell"] = "TCELL";
    InitialOfCenter["Temimps"] = "TEMIMPS";
    InitialOfCenter["Tjmp"] = "TJMP";
    InitialOfCenter["Tmpc"] = "TMPC";
    InitialOfCenter["TransportPdb"] = "TransportPDB";
    InitialOfCenter["Uc4Cdi"] = "UC4CDI";
    InitialOfCenter["Xmtb"] = "XMTB";
    InitialOfCenter["Ysg"] = "YSG";
})(InitialOfCenter || (exports.InitialOfCenter = InitialOfCenter = {}));
var Provider;
(function (Provider) {
    Provider["Author"] = "author";
    Provider["Repository"] = "repository";
})(Provider || (exports.Provider = Provider = {}));
var Group;
(function (Group) {
    Group["Advisory"] = "Advisory";
})(Group || (exports.Group = Group = {}));
var Id;
(function (Id) {
    Id["Obslte"] = "OBSLTE";
    Id["Sprsde"] = "SPRSDE";
})(Id || (exports.Id = Id = {}));
var DbName;
(function (DbName) {
    DbName["Bioisis"] = "BIOISIS";
    DbName["Bmcd"] = "BMCD";
    DbName["Bmrb"] = "BMRB";
    DbName["Emdb"] = "EMDB";
    DbName["Ndb"] = "NDB";
    DbName["Pdb"] = "PDB";
    DbName["PdbDev_"] = "PDB-Dev";
    DbName["Sasbdb"] = "SASBDB";
    DbName["TargetDb"] = "TargetDB";
    DbName["TargetTrack"] = "TargetTrack";
    DbName["AlphaFoldDb"] = "AlphaFoldDB";
    DbName["BmRbig"] = "BMRbig";
    DbName["BioGrid"] = "BioGRID";
    DbName["Empiar"] = "EMPIAR";
    DbName["Massive"] = "MASSIVE";
    DbName["ModelArchive"] = "ModelArchive";
    DbName["Other"] = "Other";
    DbName["Pride"] = "PRIDE";
    DbName["ProXl"] = "ProXL";
    DbName["ProteomeXchange"] = "ProteomeXchange";
    DbName["IProX"] = "iProX";
    DbName["JPosTrepo"] = "jPOSTrepo";
})(DbName || (exports.DbName = DbName = {}));
var SgEntry;
(function (SgEntry) {
    SgEntry["N"] = "N";
    SgEntry["Y"] = "Y";
})(SgEntry || (exports.SgEntry = SgEntry = {}));
var DepositSite;
(function (DepositSite) {
    DepositSite["Bmrb"] = "BMRB";
    DepositSite["Bnl"] = "BNL";
    DepositSite["Ndb"] = "NDB";
    DepositSite["Pdbc"] = "PDBC";
    DepositSite["Pdbe"] = "PDBE";
    DepositSite["Pdbj"] = "PDBJ";
    DepositSite["Rcsb"] = "RCSB";
})(DepositSite || (exports.DepositSite = DepositSite = {}));
var MethodsDevelopmentCategory;
(function (MethodsDevelopmentCategory) {
    MethodsDevelopmentCategory["Capri"] = "CAPRI";
    MethodsDevelopmentCategory["CasdNmr_"] = "CASD-NMR";
    MethodsDevelopmentCategory["Casp"] = "CASP";
    MethodsDevelopmentCategory["D3R"] = "D3R";
    MethodsDevelopmentCategory["FoldIt"] = "FoldIt";
    MethodsDevelopmentCategory["GpcrDock"] = "GPCRDock";
    MethodsDevelopmentCategory["RnaPuzzles_"] = "RNA-Puzzles";
})(MethodsDevelopmentCategory || (exports.MethodsDevelopmentCategory = MethodsDevelopmentCategory = {}));
var PdbFormatCompatible;
(function (PdbFormatCompatible) {
    PdbFormatCompatible["N"] = "N";
    PdbFormatCompatible["Y"] = "Y";
})(PdbFormatCompatible || (exports.PdbFormatCompatible = PdbFormatCompatible = {}));
var ProcessSite;
(function (ProcessSite) {
    ProcessSite["Bnl"] = "BNL";
    ProcessSite["Ndb"] = "NDB";
    ProcessSite["Pdbc"] = "PDBC";
    ProcessSite["Pdbe"] = "PDBE";
    ProcessSite["Pdbj"] = "PDBJ";
    ProcessSite["Rcsb"] = "RCSB";
})(ProcessSite || (exports.ProcessSite = ProcessSite = {}));
var StatusCodeCs;
(function (StatusCodeCs) {
    StatusCodeCs["Auco"] = "AUCO";
    StatusCodeCs["Auth"] = "AUTH";
    StatusCodeCs["Hold"] = "HOLD";
    StatusCodeCs["Hpub"] = "HPUB";
    StatusCodeCs["Obs"] = "OBS";
    StatusCodeCs["Polc"] = "POLC";
    StatusCodeCs["Proc"] = "PROC";
    StatusCodeCs["Rel"] = "REL";
    StatusCodeCs["Repl"] = "REPL";
    StatusCodeCs["Rmvd"] = "RMVD";
    StatusCodeCs["Wait"] = "WAIT";
    StatusCodeCs["Wdrn"] = "WDRN";
})(StatusCodeCs || (exports.StatusCodeCs = StatusCodeCs = {}));
var StatusCodeMr;
(function (StatusCodeMr) {
    StatusCodeMr["Auco"] = "AUCO";
    StatusCodeMr["Auth"] = "AUTH";
    StatusCodeMr["Hold"] = "HOLD";
    StatusCodeMr["Hpub"] = "HPUB";
    StatusCodeMr["Obs"] = "OBS";
    StatusCodeMr["Polc"] = "POLC";
    StatusCodeMr["Proc"] = "PROC";
    StatusCodeMr["Rel"] = "REL";
    StatusCodeMr["Repl"] = "REPL";
    StatusCodeMr["Rmvd"] = "RMVD";
    StatusCodeMr["Wait"] = "WAIT";
    StatusCodeMr["Wdrn"] = "WDRN";
})(StatusCodeMr || (exports.StatusCodeMr = StatusCodeMr = {}));
var StatusCodeSf;
(function (StatusCodeSf) {
    StatusCodeSf["Auth"] = "AUTH";
    StatusCodeSf["Hold"] = "HOLD";
    StatusCodeSf["Hpub"] = "HPUB";
    StatusCodeSf["Obs"] = "OBS";
    StatusCodeSf["Polc"] = "POLC";
    StatusCodeSf["Proc"] = "PROC";
    StatusCodeSf["Rel"] = "REL";
    StatusCodeSf["Repl"] = "REPL";
    StatusCodeSf["Rmvd"] = "RMVD";
    StatusCodeSf["Wait"] = "WAIT";
    StatusCodeSf["Wdrn"] = "WDRN";
})(StatusCodeSf || (exports.StatusCodeSf = StatusCodeSf = {}));
var GroupType;
(function (GroupType) {
    GroupType["Changedstate"] = "changedstate";
    GroupType["Groundstate"] = "groundstate";
    GroupType["Undefined"] = "undefined";
})(GroupType || (exports.GroupType = GroupType = {}));
var SourceName;
(function (SourceName) {
    SourceName["AlphaFold"] = "AlphaFold";
    SourceName["ITasser"] = "ITasser";
    SourceName["InsightIi"] = "InsightII";
    SourceName["ModelArchive"] = "ModelArchive";
    SourceName["Modeller"] = "Modeller";
    SourceName["Other"] = "Other";
    SourceName["Pdb"] = "PDB";
    SourceName["PdbDev_"] = "PDB-Dev";
    SourceName["Phyre"] = "PHYRE";
    SourceName["Robetta"] = "Robetta";
    SourceName["RoseTtaFold"] = "RoseTTAFold";
    SourceName["SwissModel"] = "SwissModel";
})(SourceName || (exports.SourceName = SourceName = {}));
var SampleState;
(function (SampleState) {
    SampleState["Anisotropic"] = "anisotropic";
    SampleState["Isotropic"] = "isotropic";
})(SampleState || (exports.SampleState = SampleState = {}));
var IonicStrengthUnits;
(function (IonicStrengthUnits) {
    IonicStrengthUnits["M"] = "M";
    IonicStrengthUnits["Notdefined"] = "Notdefined";
    IonicStrengthUnits["MM"] = "mM";
})(IonicStrengthUnits || (exports.IonicStrengthUnits = IonicStrengthUnits = {}));
var PHUnits;
(function (PHUnits) {
    PHUnits["Notdefined"] = "Notdefined";
    PHUnits["PD"] = "pD";
    PHUnits["PH"] = "pH";
    PHUnits["PH_"] = "pH*";
})(PHUnits || (exports.PHUnits = PHUnits = {}));
var TemperatureUnits;
(function (TemperatureUnits) {
    TemperatureUnits["C"] = "C";
    TemperatureUnits["K"] = "K";
    TemperatureUnits["Notdefined"] = "Notdefined";
})(TemperatureUnits || (exports.TemperatureUnits = TemperatureUnits = {}));
var Method;
(function (Method) {
    Method["Fixedtarget"] = "fixedtarget";
    Method["Injection"] = "injection";
})(Method || (exports.Method = Method = {}));
var LigandsForBusterReport;
(function (LigandsForBusterReport) {
    LigandsForBusterReport["N"] = "N";
    LigandsForBusterReport["Y"] = "Y";
})(LigandsForBusterReport || (exports.LigandsForBusterReport = LigandsForBusterReport = {}));
var BFactorType;
(function (BFactorType) {
    BFactorType["Full"] = "FULL";
    BFactorType["Partial"] = "PARTIAL";
})(BFactorType || (exports.BFactorType = BFactorType = {}));
var HasReleasedExperimentalData;
(function (HasReleasedExperimentalData) {
    HasReleasedExperimentalData["N"] = "N";
    HasReleasedExperimentalData["Y"] = "Y";
})(HasReleasedExperimentalData || (exports.HasReleasedExperimentalData = HasReleasedExperimentalData = {}));
var SourceDb;
(function (SourceDb) {
    SourceDb["AlphaFoldDb"] = "AlphaFoldDB";
    SourceDb["ModelArchive"] = "ModelArchive";
})(SourceDb || (exports.SourceDb = SourceDb = {}));
var ExperimentalMethod;
(function (ExperimentalMethod) {
    ExperimentalMethod["Em"] = "EM";
    ExperimentalMethod["Integrative"] = "Integrative";
    ExperimentalMethod["Multiplemethods"] = "Multiplemethods";
    ExperimentalMethod["Nmr"] = "NMR";
    ExperimentalMethod["Neutron"] = "Neutron";
    ExperimentalMethod["Other"] = "Other";
    ExperimentalMethod["XRay_"] = "X-ray";
})(ExperimentalMethod || (exports.ExperimentalMethod = ExperimentalMethod = {}));
var IhmEnsembleFlag;
(function (IhmEnsembleFlag) {
    IhmEnsembleFlag["N"] = "N";
    IhmEnsembleFlag["Y"] = "Y";
})(IhmEnsembleFlag || (exports.IhmEnsembleFlag = IhmEnsembleFlag = {}));
var IhmMultiScaleFlag;
(function (IhmMultiScaleFlag) {
    IhmMultiScaleFlag["N"] = "N";
    IhmMultiScaleFlag["Y"] = "Y";
})(IhmMultiScaleFlag || (exports.IhmMultiScaleFlag = IhmMultiScaleFlag = {}));
var IhmMultiStateFlag;
(function (IhmMultiStateFlag) {
    IhmMultiStateFlag["N"] = "N";
    IhmMultiStateFlag["Y"] = "Y";
})(IhmMultiStateFlag || (exports.IhmMultiStateFlag = IhmMultiStateFlag = {}));
var IhmOrderedStateFlag;
(function (IhmOrderedStateFlag) {
    IhmOrderedStateFlag["N"] = "N";
    IhmOrderedStateFlag["Y"] = "Y";
})(IhmOrderedStateFlag || (exports.IhmOrderedStateFlag = IhmOrderedStateFlag = {}));
var StructureDeterminationMethodology;
(function (StructureDeterminationMethodology) {
    StructureDeterminationMethodology["Computational"] = "computational";
    StructureDeterminationMethodology["Experimental"] = "experimental";
    StructureDeterminationMethodology["Integrative"] = "integrative";
})(StructureDeterminationMethodology || (exports.StructureDeterminationMethodology = StructureDeterminationMethodology = {}));
var LsMatrixType;
(function (LsMatrixType) {
    LsMatrixType["Atomblock"] = "atomblock";
    LsMatrixType["Diagonal"] = "diagonal";
    LsMatrixType["Full"] = "full";
    LsMatrixType["Fullcycle"] = "fullcycle";
    LsMatrixType["Sparse"] = "sparse";
    LsMatrixType["Userblock"] = "userblock";
})(LsMatrixType || (exports.LsMatrixType = LsMatrixType = {}));
var PdbxTlsResidualAdpFlag;
(function (PdbxTlsResidualAdpFlag) {
    PdbxTlsResidualAdpFlag["Likelyresidual"] = "LIKELYRESIDUAL";
    PdbxTlsResidualAdpFlag["Unverified"] = "UNVERIFIED";
})(PdbxTlsResidualAdpFlag || (exports.PdbxTlsResidualAdpFlag = PdbxTlsResidualAdpFlag = {}));
var Language;
(function (Language) {
    Language["Ada"] = "Ada";
    Language["Awk"] = "Awk";
    Language["Basic"] = "Basic";
    Language["C"] = "C";
})(Language || (exports.Language = Language = {}));
var PdbxCaspFlag;
(function (PdbxCaspFlag) {
    PdbxCaspFlag["N"] = "N";
    PdbxCaspFlag["Y"] = "Y";
})(PdbxCaspFlag || (exports.PdbxCaspFlag = PdbxCaspFlag = {}));
var CellSetting;
(function (CellSetting) {
    CellSetting["Cubic"] = "cubic";
    CellSetting["Hexagonal"] = "hexagonal";
    CellSetting["Monoclinic"] = "monoclinic";
    CellSetting["Orthorhombic"] = "orthorhombic";
    CellSetting["Rhombohedral"] = "rhombohedral";
    CellSetting["Tetragonal"] = "tetragonal";
    CellSetting["Triclinic"] = "triclinic";
    CellSetting["Trigonal"] = "trigonal";
})(CellSetting || (exports.CellSetting = CellSetting = {}));
var AggregationMethod;
(function (AggregationMethod) {
    AggregationMethod["MatchingDepositGroupId"] = "matching_deposit_group_id";
})(AggregationMethod || (exports.AggregationMethod = AggregationMethod = {}));
var ProvenanceCode;
(function (ProvenanceCode) {
    ProvenanceCode["PdbBind"] = "PDBBind";
    ProvenanceCode["BindingMoad"] = "BindingMOAD";
    ProvenanceCode["BindingDb"] = "BindingDB";
})(ProvenanceCode || (exports.ProvenanceCode = ProvenanceCode = {}));
var InterfaceCharacter;
(function (InterfaceCharacter) {
    InterfaceCharacter["Homo"] = "homo";
    InterfaceCharacter["Hetero"] = "hetero";
})(InterfaceCharacter || (exports.InterfaceCharacter = InterfaceCharacter = {}));
var IsBestInstance;
(function (IsBestInstance) {
    IsBestInstance["N"] = "N";
    IsBestInstance["Y"] = "Y";
})(IsBestInstance || (exports.IsBestInstance = IsBestInstance = {}));
var IsSubjectOfInvestigation;
(function (IsSubjectOfInvestigation) {
    IsSubjectOfInvestigation["N"] = "N";
    IsSubjectOfInvestigation["Y"] = "Y";
})(IsSubjectOfInvestigation || (exports.IsSubjectOfInvestigation = IsSubjectOfInvestigation = {}));
var IsSubjectOfInvestigationProvenance;
(function (IsSubjectOfInvestigationProvenance) {
    IsSubjectOfInvestigationProvenance["Author"] = "Author";
    IsSubjectOfInvestigationProvenance["Rcsb"] = "RCSB";
})(IsSubjectOfInvestigationProvenance || (exports.IsSubjectOfInvestigationProvenance = IsSubjectOfInvestigationProvenance = {}));
var TargetIsBound;
(function (TargetIsBound) {
    TargetIsBound["N"] = "N";
    TargetIsBound["Y"] = "Y";
})(TargetIsBound || (exports.TargetIsBound = TargetIsBound = {}));
var RcsbPfamSeedSource;
(function (RcsbPfamSeedSource) {
    RcsbPfamSeedSource["Family"] = "Family";
    RcsbPfamSeedSource["Domain"] = "Domain";
    RcsbPfamSeedSource["Repeat"] = "Repeat";
    RcsbPfamSeedSource["Motif"] = "Motif";
    RcsbPfamSeedSource["Disordered"] = "Disordered";
    RcsbPfamSeedSource["CoiledCoil_"] = "Coiled-coil";
})(RcsbPfamSeedSource || (exports.RcsbPfamSeedSource = RcsbPfamSeedSource = {}));
var RcsbPfamProvenanceCode;
(function (RcsbPfamProvenanceCode) {
    RcsbPfamProvenanceCode["PfamA_"] = "Pfam-A";
})(RcsbPfamProvenanceCode || (exports.RcsbPfamProvenanceCode = RcsbPfamProvenanceCode = {}));
var NstdLinkage;
(function (NstdLinkage) {
    NstdLinkage["N"] = "n";
    NstdLinkage["No"] = "no";
    NstdLinkage["Y"] = "y";
    NstdLinkage["Yes"] = "yes";
})(NstdLinkage || (exports.NstdLinkage = NstdLinkage = {}));
var NstdMonomer;
(function (NstdMonomer) {
    NstdMonomer["N"] = "n";
    NstdMonomer["No"] = "no";
    NstdMonomer["Y"] = "y";
    NstdMonomer["Yes"] = "yes";
})(NstdMonomer || (exports.NstdMonomer = NstdMonomer = {}));
var PdbxSequenceEvidenceCode;
(function (PdbxSequenceEvidenceCode) {
    PdbxSequenceEvidenceCode["Depositorprovided"] = "depositorprovided";
    PdbxSequenceEvidenceCode["Derivedfromcoordinates"] = "derivedfromcoordinates";
})(PdbxSequenceEvidenceCode || (exports.PdbxSequenceEvidenceCode = PdbxSequenceEvidenceCode = {}));
var RcsbEntityPolymerType;
(function (RcsbEntityPolymerType) {
    RcsbEntityPolymerType["Dna"] = "DNA";
    RcsbEntityPolymerType["NaHybrid_"] = "NA-hybrid";
    RcsbEntityPolymerType["Other"] = "Other";
    RcsbEntityPolymerType["Protein"] = "Protein";
    RcsbEntityPolymerType["Rna"] = "RNA";
})(RcsbEntityPolymerType || (exports.RcsbEntityPolymerType = RcsbEntityPolymerType = {}));
var PdbxAltSourceFlag;
(function (PdbxAltSourceFlag) {
    PdbxAltSourceFlag["Model"] = "model";
    PdbxAltSourceFlag["Sample"] = "sample";
})(PdbxAltSourceFlag || (exports.PdbxAltSourceFlag = PdbxAltSourceFlag = {}));
var PdbxSeqType;
(function (PdbxSeqType) {
    PdbxSeqType["Biologicalsequence"] = "Biologicalsequence";
    PdbxSeqType["CTerminaltag_"] = "C-terminaltag";
    PdbxSeqType["Linker"] = "Linker";
    PdbxSeqType["NTerminaltag_"] = "N-terminaltag";
})(PdbxSeqType || (exports.PdbxSeqType = PdbxSeqType = {}));
var SourceType;
(function (SourceType) {
    SourceType["Geneticallyengineered"] = "geneticallyengineered";
    SourceType["Natural"] = "natural";
    SourceType["Synthetic"] = "synthetic";
})(SourceType || (exports.SourceType = SourceType = {}));
var RcsbMultipleSourceFlag;
(function (RcsbMultipleSourceFlag) {
    RcsbMultipleSourceFlag["N"] = "N";
    RcsbMultipleSourceFlag["Y"] = "Y";
})(RcsbMultipleSourceFlag || (exports.RcsbMultipleSourceFlag = RcsbMultipleSourceFlag = {}));
var SrcMethod;
(function (SrcMethod) {
    SrcMethod["Man"] = "man";
    SrcMethod["Nat"] = "nat";
    SrcMethod["Syn"] = "syn";
})(SrcMethod || (exports.SrcMethod = SrcMethod = {}));
var DatabaseName;
(function (DatabaseName) {
    DatabaseName["Embl"] = "EMBL";
    DatabaseName["GenBank"] = "GenBank";
    DatabaseName["Ndb"] = "NDB";
    DatabaseName["Norine"] = "NORINE";
    DatabaseName["Pdb"] = "PDB";
    DatabaseName["Pir"] = "PIR";
    DatabaseName["Prf"] = "PRF";
    DatabaseName["RefSeq"] = "RefSeq";
    DatabaseName["UniProt"] = "UniProt";
})(DatabaseName || (exports.DatabaseName = DatabaseName = {}));
var RelatedResourceName;
(function (RelatedResourceName) {
    RelatedResourceName["ChEmbl"] = "ChEMBL";
    RelatedResourceName["DrugBank"] = "DrugBank";
    RelatedResourceName["Pharos"] = "Pharos";
})(RelatedResourceName || (exports.RelatedResourceName = RelatedResourceName = {}));
var BindingAssayValueType;
(function (BindingAssayValueType) {
    BindingAssayValueType["PAc50"] = "pAC50";
    BindingAssayValueType["PEc50"] = "pEC50";
    BindingAssayValueType["PIc50"] = "pIC50";
    BindingAssayValueType["PKd"] = "pKd";
    BindingAssayValueType["PKi"] = "pKi";
})(BindingAssayValueType || (exports.BindingAssayValueType = BindingAssayValueType = {}));
var NeighborFlag;
(function (NeighborFlag) {
    NeighborFlag["N"] = "N";
    NeighborFlag["Y"] = "Y";
})(NeighborFlag || (exports.NeighborFlag = NeighborFlag = {}));
var RcsbMembraneLineageProvenanceCode;
(function (RcsbMembraneLineageProvenanceCode) {
    RcsbMembraneLineageProvenanceCode["Mpstruc"] = "Mpstruc";
    RcsbMembraneLineageProvenanceCode["Homology"] = "Homology";
})(RcsbMembraneLineageProvenanceCode || (exports.RcsbMembraneLineageProvenanceCode = RcsbMembraneLineageProvenanceCode = {}));
var ReferenceName;
(function (ReferenceName) {
    ReferenceName["Impc"] = "IMPC";
    ReferenceName["Gtex"] = "GTEX";
    ReferenceName["Pharos"] = "PHAROS";
})(ReferenceName || (exports.ReferenceName = ReferenceName = {}));
var GroupProvenanceId;
(function (GroupProvenanceId) {
    GroupProvenanceId["ProvenanceSequenceIdentity"] = "provenance_sequence_identity";
    GroupProvenanceId["ProvenanceMatchingUniprotAccession"] = "provenance_matching_uniprot_accession";
    GroupProvenanceId["ProvenanceMatchingDepositGroupId"] = "provenance_matching_deposit_group_id";
    GroupProvenanceId["ProvenanceMatchingChemicalComponentId"] = "provenance_matching_chemical_component_id";
})(GroupProvenanceId || (exports.GroupProvenanceId = GroupProvenanceId = {}));
var GroupMembersGranularity;
(function (GroupMembersGranularity) {
    GroupMembersGranularity["Assembly"] = "assembly";
    GroupMembersGranularity["Entry"] = "entry";
    GroupMembersGranularity["PolymerEntity"] = "polymer_entity";
    GroupMembersGranularity["NonPolymerEntity"] = "non_polymer_entity";
    GroupMembersGranularity["PolymerEntityInstance"] = "polymer_entity_instance";
})(GroupMembersGranularity || (exports.GroupMembersGranularity = GroupMembersGranularity = {}));
var RankingCriteriaType;
(function (RankingCriteriaType) {
    RankingCriteriaType["Coverage"] = "coverage";
})(RankingCriteriaType || (exports.RankingCriteriaType = RankingCriteriaType = {}));
var SimilarityFunction;
(function (SimilarityFunction) {
    SimilarityFunction["Rmsd"] = "rmsd";
    SimilarityFunction["SequenceIdentity"] = "sequence_identity";
})(SimilarityFunction || (exports.SimilarityFunction = SimilarityFunction = {}));
var ShapeEntityType;
(function (ShapeEntityType) {
    ShapeEntityType["Assembly"] = "assembly";
    ShapeEntityType["Chain"] = "chain";
    ShapeEntityType["Domain"] = "domain";
})(ShapeEntityType || (exports.ShapeEntityType = ShapeEntityType = {}));
var PrereleaseSequenceAvailableFlag;
(function (PrereleaseSequenceAvailableFlag) {
    PrereleaseSequenceAvailableFlag["N"] = "N";
    PrereleaseSequenceAvailableFlag["Y"] = "Y";
})(PrereleaseSequenceAvailableFlag || (exports.PrereleaseSequenceAvailableFlag = PrereleaseSequenceAvailableFlag = {}));
