export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in scalar for dynamic values */
  ObjectScalar: any;
  /** Use SPQR's SchemaPrinter to remove this from SDL */
  UNREPRESENTABLE: any;
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
  property_value?: Maybe<Array<Maybe<Scalars['ObjectScalar']>>>;
}

export interface AlignedRegion {
  __typename?: 'AlignedRegion';
  /** List of genomic indexes that are needed to complete the last nucleotide triad of a genome-protein sequence alignment */
  exon_shift?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Query sequence start position */
  query_begin: Scalars['Int'];
  /** Query sequence end position */
  query_end: Scalars['Int'];
  /** Target sequence start position */
  target_begin: Scalars['Int'];
  /** Target sequence start position */
  target_end: Scalars['Int'];
}

export interface AlignmentLogo {
  __typename?: 'AlignmentLogo';
  symbol?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
}

export interface AlignmentResponse {
  __typename?: 'AlignmentResponse';
  /** Length of the alignment */
  alignment_length?: Maybe<Scalars['Int']>;
  alignment_logo?: Maybe<Array<Maybe<Array<Maybe<AlignmentLogo>>>>>;
  /** Full sequence of the query */
  query_sequence?: Maybe<Scalars['String']>;
  /** JSON schema that describes the different alignments between the query sequence and targets */
  target_alignment?: Maybe<Array<Maybe<TargetAlignment>>>;
}

export interface AnnotationFeatures {
  __typename?: 'AnnotationFeatures';
  /** List of positional features */
  features?: Maybe<Array<Maybe<Feature>>>;
  /** Enumerated value that identifies the provenance type of the positional features */
  source?: Maybe<Source>;
  /** Database source entry identifier associated to the positional features */
  target_id?: Maybe<Scalars['String']>;
  target_identifiers?: Maybe<TargetIdentifiers>;
}

export interface Coverage {
  __typename?: 'Coverage';
  /** Percentage of the query sequence covered byt the alignment */
  query_coverage?: Maybe<Scalars['Int']>;
  /** Length of the full query sequence */
  query_length?: Maybe<Scalars['Int']>;
  /** Percentage of the target sequence covered byt the alignment */
  target_coverage?: Maybe<Scalars['Int']>;
  /** Length of the full target sequence */
  target_length?: Maybe<Scalars['Int']>;
}

export interface Feature {
  __typename?: 'Feature';
  additional_properties?: Maybe<Array<Maybe<AdditionalProperty>>>;
  /** Free-form text describing the feature */
  description?: Maybe<Scalars['String']>;
  /** Identifier of the feature */
  feature_id?: Maybe<Scalars['String']>;
  /**  List of documents that describes the location of the feature */
  feature_positions?: Maybe<Array<Maybe<FeaturePosition>>>;
  /** Name associated to the feature */
  name?: Maybe<Scalars['String']>;
  /** Original database or software name used to obtain the feature */
  provenance_source?: Maybe<Scalars['String']>;
  /**
   * The connection type.
   *
   * Examples:
   * ASA_UNBOUND, BINDING_SITE, mutation, artifact, CATH, SCOP
   *
   */
  type?: Maybe<Type>;
  /** Numerical value associated with the feature */
  value?: Maybe<Scalars['Float']>;
}

export interface FeaturePosition {
  __typename?: 'FeaturePosition';
  /** Index at which this segment of the feature begins on the original provenance_source. When reference and source point to the same reference system this file will be null */
  beg_ori_id?: Maybe<Scalars['Int']>;
  /** Index at which this segment of the feature begins */
  beg_seq_id?: Maybe<Scalars['Int']>;
  /** Index at which this segment of the feature ends on the original provenance_source. If the positional feature maps to a single residue this field will be null. When reference and source point to the same reference system this file will be null */
  end_ori_id?: Maybe<Scalars['Int']>;
  /** Index at which this segment of the feature ends. If the positional feature maps to a single residue this field will be null */
  end_seq_id?: Maybe<Scalars['Int']>;
  /** Flag that indicates the feature begins before the feature index begin */
  open_begin?: Maybe<Scalars['Boolean']>;
  /** Flag that indicates the feature end after the feature index end */
  open_end?: Maybe<Scalars['Boolean']>;
  /** Fragment identifier that groups a set of ranges resulting from gaps */
  range_id?: Maybe<Scalars['String']>;
  /** The value for the feature at this region */
  value?: Maybe<Scalars['Float']>;
  /** The value(s) for the feature at this region */
  values?: Maybe<Array<Maybe<Scalars['Float']>>>;
}

export interface FilterInput {
  field?: InputMaybe<FieldName>;
  operation?: InputMaybe<OperationType>;
  source?: InputMaybe<Source>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  WildType = 'WILD_TYPE'
}

/** Query root */
export interface Query {
  __typename?: 'Query';
  /** Get sequence alignments */
  alignment?: Maybe<AlignmentResponse>;
  /** Get positional features */
  annotations?: Maybe<Array<Maybe<AnnotationFeatures>>>;
}


/** Query root */
export interface QueryAlignmentArgs {
  from?: InputMaybe<SequenceReference>;
  queryId: Scalars['String'];
  range?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  to?: InputMaybe<SequenceReference>;
}


/** Query root */
export interface QueryAnnotationsArgs {
  filters?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  queryId: Scalars['String'];
  range?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  reference?: InputMaybe<SequenceReference>;
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
  orientation?: Maybe<Scalars['Int']>;
  /** Database identifier of the target */
  target_id?: Maybe<Scalars['String']>;
  /** Full sequence of the target */
  target_sequence?: Maybe<Scalars['String']>;
}

export interface TargetIdentifiers {
  __typename?: 'TargetIdentifiers';
  assembly_id?: Maybe<Scalars['String']>;
  asym_id?: Maybe<Scalars['String']>;
  entity_id?: Maybe<Scalars['String']>;
  entry_id?: Maybe<Scalars['String']>;
  interface_id?: Maybe<Scalars['String']>;
  interface_partner_index?: Maybe<Scalars['Int']>;
  target_id?: Maybe<Scalars['String']>;
  uniprot_id?: Maybe<Scalars['String']>;
}

export enum Type {
  ActiveSite = 'ACTIVE_SITE',
  AngleOutlier = 'ANGLE_OUTLIER',
  Artifact = 'ARTIFACT',
  Asa = 'ASA',
  AsaBound = 'ASA_BOUND',
  AsaUnbound = 'ASA_UNBOUND',
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
  LipidMoietyBindingRegion = 'LIPID_MOIETY_BINDING_REGION',
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
  SGlycosylationSite = 'S_GLYCOSYLATION_SITE',
  TopologicalDomain = 'TOPOLOGICAL_DOMAIN',
  TransitPeptide = 'TRANSIT_PEPTIDE',
  TransmembraneRegion = 'TRANSMEMBRANE_REGION',
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
