export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjectScalar: { input: any; output: any; }
}

export interface AdditionalProperty {
  __typename?: 'AdditionalProperty';
  /**
   * The additional property name.
   *
   * Examples:
   * PARENT_COMP_ID, CATH_NAME, PARTNER_BOND_DISTANCE
   *
   */
  property_name?: Maybe<PropertyName>;
  property_value?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface AlignedRegion {
  __typename?: 'AlignedRegion';
  /** List of genomic indexes that are needed to complete the last nucleotide triad of a genome-protein sequence alignment */
  exon_shift?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Query sequence start position */
  query_begin: Scalars['Int']['output'];
  /** Query sequence end position */
  query_end: Scalars['Int']['output'];
  /** Target sequence start position */
  target_begin: Scalars['Int']['output'];
  /** Target sequence start position */
  target_end: Scalars['Int']['output'];
}

export interface AlignmentLogo {
  __typename?: 'AlignmentLogo';
  symbol?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
}

export interface AlignmentResponse {
  __typename?: 'AlignmentResponse';
  /** Length of the alignment */
  alignment_length?: Maybe<Scalars['Int']['output']>;
  /** Multiple sequence alignment of group members. */
  alignment_logo?: Maybe<Array<Maybe<Array<Maybe<AlignmentLogo>>>>>;
  /** Full sequence of the query */
  query_sequence?: Maybe<Scalars['String']['output']>;
  /** JSON schema that describes the different alignments between the query sequence and targets */
  target_alignment?: Maybe<Array<Maybe<TargetAlignment>>>;
  /** Multiple sequence alignment of group members. */
  target_alignment_subset?: Maybe<TargetAlignmentConnection>;
}


export interface AlignmentResponseTarget_Alignment_SubsetArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
}

export interface AnnotationFeatures {
  __typename?: 'AnnotationFeatures';
  /** List of positional features */
  features?: Maybe<Array<Maybe<Feature>>>;
  /** Enumerated value that identifies the provenance type of the positional features */
  source?: Maybe<Source>;
  /** Database source entry identifier associated to the positional features */
  target_id?: Maybe<Scalars['String']['output']>;
  target_identifiers?: Maybe<TargetIdentifiers>;
}

export interface Coverage {
  __typename?: 'Coverage';
  /** Percentage of the query sequence covered byt the alignment */
  query_coverage?: Maybe<Scalars['Int']['output']>;
  /** Length of the full query sequence */
  query_length?: Maybe<Scalars['Int']['output']>;
  /** Percentage of the target sequence covered byt the alignment */
  target_coverage?: Maybe<Scalars['Int']['output']>;
  /** Length of the full target sequence */
  target_length?: Maybe<Scalars['Int']['output']>;
}

export interface Feature {
  __typename?: 'Feature';
  additional_properties?: Maybe<Array<Maybe<AdditionalProperty>>>;
  /** Free-form text describing the feature */
  description?: Maybe<Scalars['String']['output']>;
  /** Identifier of the feature */
  feature_id?: Maybe<Scalars['String']['output']>;
  /**  List of documents that describes the location of the feature */
  feature_positions?: Maybe<Array<Maybe<FeaturePosition>>>;
  /** Name associated to the feature */
  name?: Maybe<Scalars['String']['output']>;
  /** Original database or software name used to obtain the feature */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * The connection type.
   *
   * Examples:
   * ASA_UNBOUND, BINDING_SITE, mutation, artifact, CATH, SCOP
   *
   */
  type?: Maybe<Type>;
  /** Numerical value associated with the feature */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface FeaturePosition {
  __typename?: 'FeaturePosition';
  /** Index at which this segment of the feature begins on the original provenance_source. When reference and source point to the same reference system this file will be null */
  beg_ori_id?: Maybe<Scalars['Int']['output']>;
  /** Index at which this segment of the feature begins */
  beg_seq_id?: Maybe<Scalars['Int']['output']>;
  /** Index at which this segment of the feature ends on the original provenance_source. If the positional feature maps to a single residue this field will be null. When reference and source point to the same reference system this file will be null */
  end_ori_id?: Maybe<Scalars['Int']['output']>;
  /** Index at which this segment of the feature ends. If the positional feature maps to a single residue this field will be null */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /** Flag that indicates the feature begins before the feature index begin */
  open_begin?: Maybe<Scalars['Boolean']['output']>;
  /** Flag that indicates the feature end after the feature index end */
  open_end?: Maybe<Scalars['Boolean']['output']>;
  /** Fragment identifier that groups a set of ranges resulting from gaps */
  range_id?: Maybe<Scalars['String']['output']>;
  /** The value for the feature at this region */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) for the feature at this region */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface FilterInput {
  field?: InputMaybe<FieldName>;
  operation?: InputMaybe<OperationType>;
  source?: InputMaybe<Source>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export enum GroupReference {
  MatchingUniprotAccession = 'matching_uniprot_accession',
  SequenceIdentity = 'sequence_identity'
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
}

export enum PropertyName {
  CardModelDescription = 'CARD_MODEL_DESCRIPTION',
  CardModelOrganism = 'CARD_MODEL_ORGANISM',
  CathDomainId = 'CATH_DOMAIN_ID',
  CathName = 'CATH_NAME',
  ClinicalSignificance = 'CLINICAL_SIGNIFICANCE',
  ConsequenceType = 'CONSEQUENCE_TYPE',
  DiseaseType = 'DISEASE_TYPE',
  EcodDomainId = 'ECOD_DOMAIN_ID',
  EcodFamilyName = 'ECOD_FAMILY_NAME',
  Evidence = 'EVIDENCE',
  Link = 'LINK',
  ModelcifModelId = 'MODELCIF_MODEL_ID',
  MutatedType = 'MUTATED_TYPE',
  OmegaAngle = 'OMEGA_ANGLE',
  ParentCompId = 'PARENT_COMP_ID',
  PartnerAsymId = 'PARTNER_ASYM_ID',
  PartnerBondDistance = 'PARTNER_BOND_DISTANCE',
  PartnerCompId = 'PARTNER_COMP_ID',
  PredictedImpact = 'PREDICTED_IMPACT',
  Scop_2DomainId = 'SCOP_2_DOMAIN_ID',
  Scop_2FamilyId = 'SCOP_2_FAMILY_ID',
  Scop_2FamilyName = 'SCOP_2_FAMILY_NAME',
  Scop_2SuperfamilyId = 'SCOP_2_SUPERFAMILY_ID',
  Scop_2SuperfamilyName = 'SCOP_2_SUPERFAMILY_NAME',
  ScopDomainId = 'SCOP_DOMAIN_ID',
  ScopName = 'SCOP_NAME',
  ScopSunId = 'SCOP_SUN_ID',
  SheetSense = 'SHEET_SENSE',
  StrainId = 'STRAIN_ID',
  Subtype = 'SUBTYPE',
  TargetId = 'TARGET_ID',
  WildType = 'WILD_TYPE'
}

/** Query root */
export interface Query {
  __typename?: 'Query';
  /** Get sequence alignments */
  alignment?: Maybe<AlignmentResponse>;
  /** Get positional features */
  annotations?: Maybe<Array<Maybe<AnnotationFeatures>>>;
  /** Get group sequence alignments */
  group_alignment?: Maybe<AlignmentResponse>;
  /** Get group positional features */
  group_annotations?: Maybe<Array<Maybe<AnnotationFeatures>>>;
}


/** Query root */
export interface QueryAlignmentArgs {
  from?: InputMaybe<SequenceReference>;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  to?: InputMaybe<SequenceReference>;
}


/** Query root */
export interface QueryAnnotationsArgs {
  filters?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reference?: InputMaybe<SequenceReference>;
  sources?: InputMaybe<Array<InputMaybe<Source>>>;
}


/** Query root */
export interface QueryGroup_AlignmentArgs {
  filter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  group: GroupReference;
  groupId?: InputMaybe<Scalars['String']['input']>;
}


/** Query root */
export interface QueryGroup_AnnotationsArgs {
  filters?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
  histogram?: InputMaybe<Scalars['Boolean']['input']>;
  sources?: InputMaybe<Array<InputMaybe<Source>>>;
}

export enum SequenceReference {
  NcbiGenome = 'NCBI_GENOME',
  NcbiProtein = 'NCBI_PROTEIN',
  PdbEntity = 'PDB_ENTITY',
  PdbInstance = 'PDB_INSTANCE',
  Uniprot = 'UNIPROT'
}

export enum Source {
  PdbEntity = 'PDB_ENTITY',
  PdbInstance = 'PDB_INSTANCE',
  PdbInterface = 'PDB_INTERFACE',
  Uniprot = 'UNIPROT'
}

export interface TargetAlignment {
  __typename?: 'TargetAlignment';
  /** Aligned region */
  aligned_regions?: Maybe<Array<Maybe<AlignedRegion>>>;
  /** Alignment scores */
  coverage?: Maybe<Coverage>;
  /** integer that identifies the DNA strand of genome alignments (1 positive strand / -1 negative strand) */
  orientation?: Maybe<Scalars['Int']['output']>;
  /** Database identifier of the target */
  target_id?: Maybe<Scalars['String']['output']>;
  /** Full sequence of the target */
  target_sequence?: Maybe<Scalars['String']['output']>;
}

/** A connection to a list of items. */
export interface TargetAlignmentConnection {
  __typename?: 'TargetAlignmentConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<TargetAlignmentEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
}

/** An edge in a connection */
export interface TargetAlignmentEdge {
  __typename?: 'TargetAlignmentEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TargetAlignment>;
}

export interface TargetIdentifiers {
  __typename?: 'TargetIdentifiers';
  assembly_id?: Maybe<Scalars['String']['output']>;
  asym_id?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  entry_id?: Maybe<Scalars['String']['output']>;
  interface_id?: Maybe<Scalars['String']['output']>;
  interface_partner_index?: Maybe<Scalars['Int']['output']>;
  target_id?: Maybe<Scalars['String']['output']>;
  uniprot_id?: Maybe<Scalars['String']['output']>;
}

export enum Type {
  ActiveSite = 'ACTIVE_SITE',
  AngleOutlier = 'ANGLE_OUTLIER',
  Artifact = 'ARTIFACT',
  Asa = 'ASA',
  AsaBound = 'ASA_BOUND',
  AsaUnbound = 'ASA_UNBOUND',
  Bend = 'BEND',
  BindingSite = 'BINDING_SITE',
  BondOutlier = 'BOND_OUTLIER',
  CalciumBindingRegion = 'CALCIUM_BINDING_REGION',
  CardModel = 'CARD_MODEL',
  Cath = 'CATH',
  Chain = 'CHAIN',
  CisPeptide = 'CIS_PEPTIDE',
  CompositionallyBiasedRegion = 'COMPOSITIONALLY_BIASED_REGION',
  CovalentBond = 'COVALENT_BOND',
  CovalentModificationOfANucleotideBase = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_BASE',
  CovalentModificationOfANucleotidePhosphate = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_PHOSPHATE',
  CovalentModificationOfANucleotideSugar = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_SUGAR',
  CovalentResidueModification = 'COVALENT_RESIDUE_MODIFICATION',
  CrossLink = 'CROSS_LINK',
  CMannosylationSite = 'C_MANNOSYLATION_SITE',
  Disorder = 'DISORDER',
  DisorderBinding = 'DISORDER_BINDING',
  DisulfideBridge = 'DISULFIDE_BRIDGE',
  DnaBindingRegion = 'DNA_BINDING_REGION',
  Domain = 'DOMAIN',
  Ecod = 'ECOD',
  GlycosylationSite = 'GLYCOSYLATION_SITE',
  HelixP = 'HELIX_P',
  HelxLhPpP = 'HELX_LH_PP_P',
  HelxRh_3TP = 'HELX_RH_3_T_P',
  HelxRhAlP = 'HELX_RH_AL_P',
  HelxRhPiP = 'HELX_RH_PI_P',
  HydrogenBond = 'HYDROGEN_BOND',
  Hydropathy = 'HYDROPATHY',
  ImgtAntibodyDescription = 'IMGT_ANTIBODY_DESCRIPTION',
  ImgtAntibodyDomainName = 'IMGT_ANTIBODY_DOMAIN_NAME',
  ImgtAntibodyGeneAlleleName = 'IMGT_ANTIBODY_GENE_ALLELE_NAME',
  ImgtAntibodyOrganismName = 'IMGT_ANTIBODY_ORGANISM_NAME',
  ImgtAntibodyProteinName = 'IMGT_ANTIBODY_PROTEIN_NAME',
  ImgtAntibodyReceptorDescription = 'IMGT_ANTIBODY_RECEPTOR_DESCRIPTION',
  ImgtAntibodyReceptorType = 'IMGT_ANTIBODY_RECEPTOR_TYPE',
  InitiatorMethionine = 'INITIATOR_METHIONINE',
  IntramembraneRegion = 'INTRAMEMBRANE_REGION',
  IonicInteraction = 'IONIC_INTERACTION',
  LigandCovalentLinkage = 'LIGAND_COVALENT_LINKAGE',
  LigandInteraction = 'LIGAND_INTERACTION',
  LigandMetalCoordinationLinkage = 'LIGAND_METAL_COORDINATION_LINKAGE',
  LipidMoietyBindingRegion = 'LIPID_MOIETY_BINDING_REGION',
  MaQaMetricLocalTypeContactProbability = 'MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY',
  MaQaMetricLocalTypeDistance = 'MA_QA_METRIC_LOCAL_TYPE_DISTANCE',
  MaQaMetricLocalTypeEnergy = 'MA_QA_METRIC_LOCAL_TYPE_ENERGY',
  MaQaMetricLocalTypeIptm = 'MA_QA_METRIC_LOCAL_TYPE_IPTM',
  MaQaMetricLocalTypeNormalizedScore = 'MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE',
  MaQaMetricLocalTypeOther = 'MA_QA_METRIC_LOCAL_TYPE_OTHER',
  MaQaMetricLocalTypePae = 'MA_QA_METRIC_LOCAL_TYPE_PAE',
  MaQaMetricLocalTypePlddt = 'MA_QA_METRIC_LOCAL_TYPE_PLDDT',
  MaQaMetricLocalTypePlddt_0_1 = 'MA_QA_METRIC_LOCAL_TYPE_PLDDT_0_1',
  MaQaMetricLocalTypePlddtAllAtom = 'MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL_ATOM',
  MaQaMetricLocalTypePlddtAllAtom_0_1 = 'MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL_ATOM_0_1',
  MaQaMetricLocalTypePtm = 'MA_QA_METRIC_LOCAL_TYPE_PTM',
  MaQaMetricLocalTypeZscore = 'MA_QA_METRIC_LOCAL_TYPE_ZSCORE',
  MembraneSegment = 'MEMBRANE_SEGMENT',
  MetalCoordination = 'METAL_COORDINATION',
  MetalIonBindingSite = 'METAL_ION_BINDING_SITE',
  MismatchedBasePairs = 'MISMATCHED_BASE_PAIRS',
  ModifiedMonomer = 'MODIFIED_MONOMER',
  ModifiedResidue = 'MODIFIED_RESIDUE',
  MogulAngleOutlier = 'MOGUL_ANGLE_OUTLIER',
  MogulBondOutlier = 'MOGUL_BOND_OUTLIER',
  MutagenesisSite = 'MUTAGENESIS_SITE',
  Mutation = 'MUTATION',
  NonConsecutiveResidues = 'NON_CONSECUTIVE_RESIDUES',
  NonStandardAminoAcid = 'NON_STANDARD_AMINO_ACID',
  NonTerminalResidue = 'NON_TERMINAL_RESIDUE',
  NucleotidePhosphateBindingRegion = 'NUCLEOTIDE_PHOSPHATE_BINDING_REGION',
  NGlycosylationSite = 'N_GLYCOSYLATION_SITE',
  OGlycosylationSite = 'O_GLYCOSYLATION_SITE',
  Peptide = 'PEPTIDE',
  Pfam = 'PFAM',
  Propeptide = 'PROPEPTIDE',
  ProteinBinding = 'PROTEIN_BINDING',
  RamachandranOutlier = 'RAMACHANDRAN_OUTLIER',
  RegionOfInterest = 'REGION_OF_INTEREST',
  Repeat = 'REPEAT',
  RotamerOutlier = 'ROTAMER_OUTLIER',
  RsccOutlier = 'RSCC_OUTLIER',
  RsrzOutlier = 'RSRZ_OUTLIER',
  SabdabAntibodyAntigenName = 'SABDAB_ANTIBODY_ANTIGEN_NAME',
  SabdabAntibodyHeavyChainSubclass = 'SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS',
  SabdabAntibodyLightChainSubclass = 'SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS',
  SabdabAntibodyLightChainType = 'SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE',
  SabdabAntibodyName = 'SABDAB_ANTIBODY_NAME',
  SabdabAntibodyTarget = 'SABDAB_ANTIBODY_TARGET',
  Scop = 'SCOP',
  Scop_2BSuperfamily = 'SCOP_2_B_SUPERFAMILY',
  Scop_2Family = 'SCOP_2_FAMILY',
  Scop_2Superfamily = 'SCOP_2_SUPERFAMILY',
  SequenceConflict = 'SEQUENCE_CONFLICT',
  SequenceVariant = 'SEQUENCE_VARIANT',
  Sheet = 'SHEET',
  ShortSequenceMotif = 'SHORT_SEQUENCE_MOTIF',
  SignalPeptide = 'SIGNAL_PEPTIDE',
  Site = 'SITE',
  SpliceVariant = 'SPLICE_VARIANT',
  StereoOutlier = 'STEREO_OUTLIER',
  Strn = 'STRN',
  SGlycosylationSite = 'S_GLYCOSYLATION_SITE',
  TopologicalDomain = 'TOPOLOGICAL_DOMAIN',
  TransitPeptide = 'TRANSIT_PEPTIDE',
  TransmembraneRegion = 'TRANSMEMBRANE_REGION',
  TurnTy_1P = 'TURN_TY_1_P',
  UnassignedSecStruct = 'UNASSIGNED_SEC_STRUCT',
  UnobservedAtomXyz = 'UNOBSERVED_ATOM_XYZ',
  UnobservedResidueXyz = 'UNOBSERVED_RESIDUE_XYZ',
  UnsureResidue = 'UNSURE_RESIDUE',
  ZeroOccupancyAtomXyz = 'ZERO_OCCUPANCY_ATOM_XYZ',
  ZeroOccupancyResidueXyz = 'ZERO_OCCUPANCY_RESIDUE_XYZ',
  ZincFingerRegion = 'ZINC_FINGER_REGION'
}

export enum FieldName {
  TargetId = 'target_id',
  Type = 'type'
}

export enum OperationType {
  Contains = 'contains',
  Equals = 'equals'
}
