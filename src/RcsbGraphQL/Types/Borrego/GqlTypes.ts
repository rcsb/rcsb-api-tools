export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjectScalar: { input: unknown; output: unknown; }
}

export interface AlignedRegions {
  __typename?: 'AlignedRegions';
  /** List of genomic indexes that are needed to complete the last nucleotide codon of a genome-protein sequence alignment */
  exon_shift?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /**
   * Query sequence start position
   *
   * Examples:
   * null, null
   */
  query_begin: Scalars['Int']['output'];
  /**
   * Query sequence end position
   *
   * Examples:
   * null, null
   */
  query_end: Scalars['Int']['output'];
  /**
   * Target sequence start position
   *
   * Examples:
   * null, null
   */
  target_begin: Scalars['Int']['output'];
  /**
   * Target sequence start position
   *
   * Examples:
   * null, null
   */
  target_end: Scalars['Int']['output'];
}

export interface AlignmentLogo {
  __typename?: 'AlignmentLogo';
  symbol?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
}

export interface AnnotationFilterInput {
  field: FieldName;
  operation: OperationType;
  source?: InputMaybe<AnnotationReference>;
  values: Array<Scalars['String']['input']>;
}

export enum AnnotationReference {
  PdbEntity = 'PDB_ENTITY',
  PdbInstance = 'PDB_INSTANCE',
  PdbInterface = 'PDB_INTERFACE',
  Uniprot = 'UNIPROT'
}

export interface Coverage {
  __typename?: 'Coverage';
  /**
   * Fraction of the query sequence covered by the alignment
   *
   * Examples:
   * null, null
   */
  query_coverage: Scalars['Float']['output'];
  /**
   * Length of the full query sequence
   *
   * Examples:
   * null, null
   */
  query_length: Scalars['Int']['output'];
  /**
   * Fraction of the target sequence covered by the alignment
   *
   * Examples:
   * null, null
   */
  target_coverage: Scalars['Float']['output'];
  /**
   * Length of the full target sequence
   *
   * Examples:
   * null, null
   */
  target_length: Scalars['Int']['output'];
}

export interface Features {
  __typename?: 'Features';
  /** Attribute/Value list */
  additional_properties?: Maybe<Array<Maybe<FeaturesAdditionalProperties>>>;
  /**
   * Free-form text describing the feature
   *
   * Examples:
   * Software generated binding site for ligand entity 2 component HEM instance C chain A
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier of the feature
   *
   * Examples:
   * HELX_P11, AC1
   */
  feature_id?: Maybe<Scalars['String']['output']>;
  /** List of documents that describes the location of the feature */
  feature_positions?: Maybe<Array<Maybe<FeaturesFeaturePositions>>>;
  /**
   * Name associated to the feature
   *
   * Examples:
   * ligand HEM
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Original database or software name used to obtain the feature
   *
   * Examples:
   * PDB, UNIPROT
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * The type of protein modification.
   *
   * Examples:
   * ASA_UNBOUND, BINDING_SITE, mutation, artifact, CATH, SCOP, Named protein modification, Phosphorylation
   */
  type?: Maybe<FeaturesType>;
  /**
   * Numerical value associated with the feature
   *
   * Examples:
   * null, null
   */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface FeaturesAdditionalProperties {
  __typename?: 'FeaturesAdditionalProperties';
  /**
   * The additional property name.
   *
   * Examples:
   * PARENT_COMP_ID, CATH_NAME, PARTNER_BOND_DISTANCE
   */
  property_name?: Maybe<FeaturesAdditionalPropertiesPropertyName>;
  property_value?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export enum FeaturesAdditionalPropertiesPropertyName {
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
  PdbModelNum = 'PDB_MODEL_NUM',
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

export interface FeaturesFeaturePositions {
  __typename?: 'FeaturesFeaturePositions';
  /**
   * Index at which this segment of the feature begins on the original provenance_source. When reference and source point to the same reference system this file will be null
   *
   * Examples:
   * null, null
   */
  beg_ori_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Index at which this segment of the feature begins
   *
   * Examples:
   * null, null
   */
  beg_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Index at which this segment of the feature ends on the original provenance_source. If the positional feature maps to a single residue this field will be null. When reference and source point to the same reference system this file will be null
   *
   * Examples:
   * null, null
   */
  end_ori_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Index at which this segment of the feature ends. If the positional feature maps to a single residue this field will be null
   *
   * Examples:
   * null, null
   */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Flag that indicates the feature begins before the feature index begin
   *
   * Examples:
   * null, null
   */
  open_begin?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Flag that indicates the feature end after the feature index end
   *
   * Examples:
   * null, null
   */
  open_end?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Fragment identifier that groups a set of ranges resulting from gaps
   *
   * Examples:
   * range-1, range-2
   */
  range_id?: Maybe<Scalars['String']['output']>;
  /**
   * The value for the feature at this region
   *
   * Examples:
   * null, null, null
   */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) for the feature at this region */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export enum FeaturesType {
  Acetamidation = 'ACETAMIDATION',
  Acetamidomethylation = 'ACETAMIDOMETHYLATION',
  Acetylation = 'ACETYLATION',
  ActiveSite = 'ACTIVE_SITE',
  AdpRibose = 'ADP_RIBOSE',
  AdpRibosylation = 'ADP_RIBOSYLATION',
  AdpRiboxanation = 'ADP_RIBOXANATION',
  Alanylation = 'ALANYLATION',
  Allysine = 'ALLYSINE',
  Amination = 'AMINATION',
  AminoAcid = 'AMINO_ACID',
  AmPylation = 'AM_PYLATION',
  AngleOutlier = 'ANGLE_OUTLIER',
  AngleOutliers = 'ANGLE_OUTLIERS',
  Arachidoylation = 'ARACHIDOYLATION',
  Archaeol = 'ARCHAEOL',
  Arginylation = 'ARGINYLATION',
  Arsenylation = 'ARSENYLATION',
  Artifact = 'ARTIFACT',
  Asa = 'ASA',
  AsaBound = 'ASA_BOUND',
  AsaUnbound = 'ASA_UNBOUND',
  Asparaginylation = 'ASPARAGINYLATION',
  Aspartylation = 'ASPARTYLATION',
  AverageOccupancy = 'AVERAGE_OCCUPANCY',
  Bacillithiolation = 'BACILLITHIOLATION',
  Bend = 'BEND',
  Benzoylation = 'BENZOYLATION',
  Benzylation = 'BENZYLATION',
  BetaAminoAcid = 'BETA_AMINO_ACID',
  BetaHydroxybutyrylation = 'BETA_HYDROXYBUTYRYLATION',
  BetaLysylation = 'BETA_LYSYLATION',
  BetaMercaptoethanol = 'BETA_MERCAPTOETHANOL',
  BindingSite = 'BINDING_SITE',
  Biotin = 'BIOTIN',
  Biotinylation = 'BIOTINYLATION',
  BondOutlier = 'BOND_OUTLIER',
  BondOutliers = 'BOND_OUTLIERS',
  Bromination = 'BROMINATION',
  Butyrylation = 'BUTYRYLATION',
  CalciumBindingRegion = 'CALCIUM_BINDING_REGION',
  Carbamoylation = 'CARBAMOYLATION',
  Carbohydrate = 'CARBOHYDRATE',
  Carboxyethylation = 'CARBOXYETHYLATION',
  Carboxylation = 'CARBOXYLATION',
  Carboxymethylation = 'CARBOXYMETHYLATION',
  CardModel = 'CARD_MODEL',
  Cath = 'CATH',
  Chain = 'CHAIN',
  ChiralOutliers = 'CHIRAL_OUTLIERS',
  Chlorination = 'CHLORINATION',
  Cholesterylation = 'CHOLESTERYLATION',
  ChromophoreChromophoreLike = 'CHROMOPHORE_CHROMOPHORE_LIKE',
  CisPeptide = 'CIS_PEPTIDE',
  Citrullination = 'CITRULLINATION',
  Clashes = 'CLASHES',
  CmPylation = 'CM_PYLATION',
  CompositionallyBiasedRegion = 'COMPOSITIONALLY_BIASED_REGION',
  CovalentBond = 'COVALENT_BOND',
  CovalentChemicalModification = 'COVALENT_CHEMICAL_MODIFICATION',
  CovalentModificationOfANucleotideBase = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_BASE',
  CovalentModificationOfANucleotidePhosphate = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_PHOSPHATE',
  CovalentModificationOfANucleotideSugar = 'COVALENT_MODIFICATION_OF_A_NUCLEOTIDE_SUGAR',
  CovalentResidueModification = 'COVALENT_RESIDUE_MODIFICATION',
  Crosslinker = 'CROSSLINKER',
  CrossLink = 'CROSS_LINK',
  Crotonylation = 'CROTONYLATION',
  Cyanation = 'CYANATION',
  Cysteinylation = 'CYSTEINYLATION',
  CGmPylation = 'C_GM_PYLATION',
  CMannosylation = 'C_MANNOSYLATION',
  CMannosylationSite = 'C_MANNOSYLATION_SITE',
  Deamidation = 'DEAMIDATION',
  Decanoylation = 'DECANOYLATION',
  Decarboxylation = 'DECARBOXYLATION',
  DehydroaminoAcid = 'DEHYDROAMINO_ACID',
  Dehydrocoelenterazination = 'DEHYDROCOELENTERAZINATION',
  Dehydrogenation = 'DEHYDROGENATION',
  Dehydroxylation = 'DEHYDROXYLATION',
  Deoxidation = 'DEOXIDATION',
  Deoxyhypusine = 'DEOXYHYPUSINE',
  Diacylglycerol = 'DIACYLGLYCEROL',
  Dihydroxyacetonation = 'DIHYDROXYACETONATION',
  Dimethylamination = 'DIMETHYLAMINATION',
  Diphosphorylation = 'DIPHOSPHORYLATION',
  Diphthamide = 'DIPHTHAMIDE',
  DipyrromethaneMethylation = 'DIPYRROMETHANE_METHYLATION',
  Disorder = 'DISORDER',
  DisorderBinding = 'DISORDER_BINDING',
  // DisulfideBridge = 'DISULFIDE_BRIDGE',
  DisulfideBridge = 'DISULFIDE_BRIDGE_',
  DnaBindingRegion = 'DNA_BINDING_REGION',
  Domain = 'DOMAIN',
  Dopaminylation = 'DOPAMINYLATION',
  DAlanylation = 'D_ALANYLATION',
  DArginylation = 'D_ARGINYLATION',
  DAsparaginylation = 'D_ASPARAGINYLATION',
  DAspartylation = 'D_ASPARTYLATION',
  DCysteinylation = 'D_CYSTEINYLATION',
  DGlutaminylation = 'D_GLUTAMINYLATION',
  DGlutamylation = 'D_GLUTAMYLATION',
  DHistidinylation = 'D_HISTIDINYLATION',
  DIsoleucylation = 'D_ISOLEUCYLATION',
  DLactate = 'D_LACTATE',
  DLeucylation = 'D_LEUCYLATION',
  DLysylation = 'D_LYSYLATION',
  DMethionylation = 'D_METHIONYLATION',
  DPhenylalanylation = 'D_PHENYLALANYLATION',
  DProlylation = 'D_PROLYLATION',
  DSerylation = 'D_SERYLATION',
  DThreoninylation = 'D_THREONINYLATION',
  DTryptophanylation = 'D_TRYPTOPHANYLATION',
  DTyrosination = 'D_TYROSINATION',
  DValylation = 'D_VALYLATION',
  Ecod = 'ECOD',
  Ethylation = 'ETHYLATION',
  Ethylsulfanylation = 'ETHYLSULFANYLATION',
  Farnesylation = 'FARNESYLATION',
  Flavin = 'FLAVIN',
  Fluorination = 'FLUORINATION',
  Formylation = 'FORMYLATION',
  Geranylgeranylation = 'GERANYLGERANYLATION',
  Glutaminylation = 'GLUTAMINYLATION',
  Glutamylation = 'GLUTAMYLATION',
  Glutarylation = 'GLUTARYLATION',
  Glutathionylation = 'GLUTATHIONYLATION',
  Glycerophosphorylation = 'GLYCEROPHOSPHORYLATION',
  Glycerylphosphorylethanolamination = 'GLYCERYLPHOSPHORYLETHANOLAMINATION',
  GlycosylationSite = 'GLYCOSYLATION_SITE',
  Glycylation = 'GLYCYLATION',
  GmPylation = 'GM_PYLATION',
  HelixP = 'HELIX_P',
  HelxLhPpP = 'HELX_LH_PP_P',
  HelxRh_3TP = 'HELX_RH_3_T_P',
  HelxRhAlP = 'HELX_RH_AL_P',
  HelxRhPiP = 'HELX_RH_PI_P',
  HemeHemeLike = 'HEME_HEME_LIKE',
  Heptanoylation = 'HEPTANOYLATION',
  Hexanoylation = 'HEXANOYLATION',
  Histaminylation = 'HISTAMINYLATION',
  Histidinylation = 'HISTIDINYLATION',
  Hydrogenation = 'HYDROGENATION',
  HydrogenBond = 'HYDROGEN_BOND',
  Hydropathy = 'HYDROPATHY',
  Hydroperoxylation = 'HYDROPEROXYLATION',
  Hydroxyamination = 'HYDROXYAMINATION',
  Hydroxyethylation = 'HYDROXYETHYLATION',
  Hydroxylation = 'HYDROXYLATION',
  Hydroxymethylation = 'HYDROXYMETHYLATION',
  Hydroxysulfanylation = 'HYDROXYSULFANYLATION',
  Hypusine = 'HYPUSINE',
  ImgtAntibodyDescription = 'IMGT_ANTIBODY_DESCRIPTION',
  ImgtAntibodyDomainName = 'IMGT_ANTIBODY_DOMAIN_NAME',
  ImgtAntibodyGeneAlleleName = 'IMGT_ANTIBODY_GENE_ALLELE_NAME',
  ImgtAntibodyOrganismName = 'IMGT_ANTIBODY_ORGANISM_NAME',
  ImgtAntibodyProteinName = 'IMGT_ANTIBODY_PROTEIN_NAME',
  ImgtAntibodyReceptorDescription = 'IMGT_ANTIBODY_RECEPTOR_DESCRIPTION',
  ImgtAntibodyReceptorType = 'IMGT_ANTIBODY_RECEPTOR_TYPE',
  InitiatorMethionine = 'INITIATOR_METHIONINE',
  IntramembraneRegion = 'INTRAMEMBRANE_REGION',
  Iodination = 'IODINATION',
  IonicInteraction = 'IONIC_INTERACTION',
  Isobutyrylation = 'ISOBUTYRYLATION',
  Isoleucylation = 'ISOLEUCYLATION',
  IsopeptideBond = 'ISOPEPTIDE_BOND',
  Lactoylation = 'LACTOYLATION',
  Laurylation = 'LAURYLATION',
  Leucylation = 'LEUCYLATION',
  LigandCovalentLinkage = 'LIGAND_COVALENT_LINKAGE',
  LigandInteraction = 'LIGAND_INTERACTION',
  LigandMetalCoordinationLinkage = 'LIGAND_METAL_COORDINATION_LINKAGE',
  LipidLipidLike = 'LIPID_LIPID_LIKE',
  LipidMoietyBindingRegion = 'LIPID_MOIETY_BINDING_REGION',
  Lipoylation = 'LIPOYLATION',
  Lysylation = 'LYSYLATION',
  LLactate = 'L_LACTATE',
  Malonylation = 'MALONYLATION',
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
  // MetalCoordination = 'METAL_COORDINATION_',
  MetalIonBindingSite = 'METAL_ION_BINDING_SITE',
  Methacrylation = 'METHACRYLATION',
  Methionylation = 'METHIONYLATION',
  Methoxylation = 'METHOXYLATION',
  Methylamination = 'METHYLAMINATION',
  Methylation = 'METHYLATION',
  Methylsulfanylation = 'METHYLSULFANYLATION',
  Methylsulfation = 'METHYLSULFATION',
  MismatchedBasePairs = 'MISMATCHED_BASE_PAIRS',
  ModifiedMonomer = 'MODIFIED_MONOMER',
  ModifiedResidue = 'MODIFIED_RESIDUE',
  MogulAngleOutlier = 'MOGUL_ANGLE_OUTLIER',
  MogulAngleOutliers = 'MOGUL_ANGLE_OUTLIERS',
  MogulBondOutlier = 'MOGUL_BOND_OUTLIER',
  MogulBondOutliers = 'MOGUL_BOND_OUTLIERS',
  MogulRingOutliers = 'MOGUL_RING_OUTLIERS',
  MogulTorsionOutliers = 'MOGUL_TORSION_OUTLIERS',
  MutagenesisSite = 'MUTAGENESIS_SITE',
  Mutation = 'MUTATION',
  Myristoylation = 'MYRISTOYLATION',
  NamedProteinModification = 'NAMED_PROTEIN_MODIFICATION',
  NatomsEds = 'NATOMS_EDS',
  Nitration = 'NITRATION',
  Nitrosylation = 'NITROSYLATION',
  None = 'NONE',
  NonConsecutiveResidues = 'NON_CONSECUTIVE_RESIDUES',
  NonStandardAminoAcid = 'NON_STANDARD_AMINO_ACID',
  NonStandardLinkage = 'NON_STANDARD_LINKAGE',
  NonStandardMonomer = 'NON_STANDARD_MONOMER',
  NonStandardResidue = 'NON_STANDARD_RESIDUE',
  NonTerminalResidue = 'NON_TERMINAL_RESIDUE',
  Noradrenylation = 'NORADRENYLATION',
  Norleucine = 'NORLEUCINE',
  Norvaline = 'NORVALINE',
  NucleotideMonophosphate = 'NUCLEOTIDE_MONOPHOSPHATE',
  NucleotidePhosphateBindingRegion = 'NUCLEOTIDE_PHOSPHATE_BINDING_REGION',
  N_6Benzoyllysine = 'N_6_BENZOYLLYSINE',
  N_6Isonicotinyllysine = 'N_6_ISONICOTINYLLYSINE',
  N_6Methacryllysine = 'N_6_METHACRYLLYSINE',
  NGlycosylation = 'N_GLYCOSYLATION',
  NGlycosylationSite = 'N_GLYCOSYLATION_SITE',
  NMethylcarbamoylation = 'N_METHYLCARBAMOYLATION',
  NPyruvicAcid_2Iminylation = 'N_PYRUVIC_ACID_2_IMINYLATION',
  Octanoylation = 'OCTANOYLATION',
  Oleoylation = 'OLEOYLATION',
  Ornithine = 'ORNITHINE',
  Owab = 'OWAB',
  Oxidation = 'OXIDATION',
  OGlycosylation = 'O_GLYCOSYLATION',
  OGlycosylationSite = 'O_GLYCOSYLATION_SITE',
  Palmitoleoylation = 'PALMITOLEOYLATION',
  Palmitoylation = 'PALMITOYLATION',
  Pentadecanoylation = 'PENTADECANOYLATION',
  Pentanoylation = 'PENTANOYLATION',
  Peptide = 'PEPTIDE',
  Pfam = 'PFAM',
  Phenylalanylation = 'PHENYLALANYLATION',
  PhosphatidylethanolamineAmidation = 'PHOSPHATIDYLETHANOLAMINE_AMIDATION',
  Phosphoenolpyruvate = 'PHOSPHOENOLPYRUVATE',
  Phosphorylation = 'PHOSPHORYLATION',
  PlaneOutliers = 'PLANE_OUTLIERS',
  Prolylation = 'PROLYLATION',
  Propeptide = 'PROPEPTIDE',
  Propionylation = 'PROPIONYLATION',
  ProteinBinding = 'PROTEIN_BINDING',
  PyridoxalPhosphate = 'PYRIDOXAL_PHOSPHATE',
  PyrrolidoneCarboxylicAcid = 'PYRROLIDONE_CARBOXYLIC_ACID',
  PyruvicAcid = 'PYRUVIC_ACID',
  QScore = 'Q_SCORE',
  RamachandranOutlier = 'RAMACHANDRAN_OUTLIER',
  RegionOfInterest = 'REGION_OF_INTEREST',
  Repeat = 'REPEAT',
  Retinoylation = 'RETINOYLATION',
  RotamerOutlier = 'ROTAMER_OUTLIER',
  Rscc = 'RSCC',
  RsccOutlier = 'RSCC_OUTLIER',
  Rsr = 'RSR',
  Rsrz = 'RSRZ',
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
  Selanylation = 'SELANYLATION',
  Selenomethionine = 'SELENOMETHIONINE',
  SequenceConflict = 'SEQUENCE_CONFLICT',
  SequenceVariant = 'SEQUENCE_VARIANT',
  Serotonylation = 'SEROTONYLATION',
  Serylation = 'SERYLATION',
  Sheet = 'SHEET',
  ShortSequenceMotif = 'SHORT_SEQUENCE_MOTIF',
  SignalPeptide = 'SIGNAL_PEPTIDE',
  Site = 'SITE',
  SpliceVariant = 'SPLICE_VARIANT',
  Stearoylation = 'STEAROYLATION',
  Stereoisomerisation = 'STEREOISOMERISATION',
  StereoOutlier = 'STEREO_OUTLIER',
  Strn = 'STRN',
  SuccinamideRing = 'SUCCINAMIDE_RING',
  Succination = 'SUCCINATION',
  Succinylation = 'SUCCINYLATION',
  Sulfanylmethylation = 'SULFANYLMETHYLATION',
  Sulfation = 'SULFATION',
  Sulfhydration = 'SULFHYDRATION',
  SymmClashes = 'SYMM_CLASHES',
  SGlycosylation = 'S_GLYCOSYLATION',
  SGlycosylationSite = 'S_GLYCOSYLATION_SITE',
  TerminalAcetylation = 'TERMINAL_ACETYLATION',
  TerminalAmidation = 'TERMINAL_AMIDATION',
  TertButylation = 'TERT_BUTYLATION',
  TertButyloxycarbonylation = 'TERT_BUTYLOXYCARBONYLATION',
  Threoninylation = 'THREONINYLATION',
  Thyroxine = 'THYROXINE',
  TopologicalDomain = 'TOPOLOGICAL_DOMAIN',
  TransitPeptide = 'TRANSIT_PEPTIDE',
  TransmembraneRegion = 'TRANSMEMBRANE_REGION',
  Triiodothyronine = 'TRIIODOTHYRONINE',
  Triphosphorylation = 'TRIPHOSPHORYLATION',
  Tryptophanylation = 'TRYPTOPHANYLATION',
  TurnTy_1P = 'TURN_TY_1_P',
  Tyrosination = 'TYROSINATION',
  UmPylation = 'UM_PYLATION',
  UnassignedSecStruct = 'UNASSIGNED_SEC_STRUCT',
  UnobservedAtomXyz = 'UNOBSERVED_ATOM_XYZ',
  UnobservedResidueXyz = 'UNOBSERVED_RESIDUE_XYZ',
  UnsureResidue = 'UNSURE_RESIDUE',
  Valylation = 'VALYLATION',
  ZeroOccupancyAtomXyz = 'ZERO_OCCUPANCY_ATOM_XYZ',
  ZeroOccupancyResidueXyz = 'ZERO_OCCUPANCY_RESIDUE_XYZ',
  ZincFingerRegion = 'ZINC_FINGER_REGION',
  '2_3Dicarboxypropylation' = '_2_3_DICARBOXYPROPYLATION',
  '2Aminoadipylation' = '_2_AMINOADIPYLATION',
  '2Aminoethylphosphorylation' = '_2_AMINOETHYLPHOSPHORYLATION',
  '2Cholinephosphorylation' = '_2_CHOLINEPHOSPHORYLATION',
  '2Hydroxyisobutyrylation' = '_2_HYDROXYISOBUTYRYLATION',
  '2OxobutanoicAcid' = '_2_OXOBUTANOIC_ACID',
  '2Oxo_5_5Dimethylhexanoylation' = '_2_OXO_5_5_DIMETHYLHEXANOYLATION',
  '3Aminopropyl_5AdenosylPhosphonoAmidation' = '_3_AMINOPROPYL_5_ADENOSYL_PHOSPHONO_AMIDATION',
  '3Oxoalanine' = '_3_OXOALANINE',
  '3PhenyllacticAcid' = '_3_PHENYLLACTIC_ACID',
  '3R_3Hydroxybutyrylation' = '_3_R_3_HYDROXYBUTYRYLATION',
  '4Phosphopantetheine' = '_4_PHOSPHOPANTETHEINE',
  '12Hydroxyfarnesylation' = '_12_HYDROXYFARNESYLATION',
  '12Oxomyristoylation' = '_12_OXOMYRISTOYLATION',
  '12RHydroxymyristoylation' = '_12_R_HYDROXYMYRISTOYLATION',
  '14Hydroxy_10_13Dioxo_7HeptadecenoicAcid' = '_14_HYDROXY_10_13_DIOXO_7_HEPTADECENOIC_ACID'
}

export enum FieldName {
  TargetId = 'TARGET_ID',
  Type = 'TYPE'
}

export enum GroupReference {
  MatchingUniprotAccession = 'MATCHING_UNIPROT_ACCESSION',
  SequenceIdentity = 'SEQUENCE_IDENTITY'
}

export enum OperationType {
  Contains = 'CONTAINS',
  Equals = 'EQUALS'
}

/** Query root */
export interface Query {
  __typename?: 'Query';
  /** Get sequence alignments */
  alignments?: Maybe<SequenceAlignments>;
  /** Get sequence annotations */
  annotations?: Maybe<Array<Maybe<SequenceAnnotations>>>;
  /** Get group alignments */
  group_alignments?: Maybe<SequenceAlignments>;
  /** Get group annotations */
  group_annotations?: Maybe<Array<Maybe<SequenceAnnotations>>>;
  /** Get a positional summary of group annotations */
  group_annotations_summary?: Maybe<Array<Maybe<SequenceAnnotations>>>;
}


/** Query root */
export interface QueryAlignmentsArgs {
  from: SequenceReference;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  to: SequenceReference;
}


/** Query root */
export interface QueryAnnotationsArgs {
  filters?: InputMaybe<Array<AnnotationFilterInput>>;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  reference: SequenceReference;
  sources: Array<InputMaybe<AnnotationReference>>;
}


/** Query root */
export interface QueryGroup_AlignmentsArgs {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
}


/** Query root */
export interface QueryGroup_AnnotationsArgs {
  filters?: InputMaybe<Array<AnnotationFilterInput>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
  sources: Array<InputMaybe<AnnotationReference>>;
}


/** Query root */
export interface QueryGroup_Annotations_SummaryArgs {
  filters?: InputMaybe<Array<AnnotationFilterInput>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
  sources: Array<InputMaybe<AnnotationReference>>;
}

export interface SequenceAlignments {
  __typename?: 'SequenceAlignments';
  alignment_length?: Maybe<Scalars['Int']['output']>;
  alignment_logo?: Maybe<Array<Maybe<Array<Maybe<AlignmentLogo>>>>>;
  query_sequence?: Maybe<Scalars['String']['output']>;
  /** Multiple sequence alignment of group members. */
  target_alignments?: Maybe<Array<Maybe<TargetAlignments>>>;
}


export interface SequenceAlignmentsTarget_AlignmentsArgs {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}

export interface SequenceAnnotations {
  __typename?: 'SequenceAnnotations';
  /** List of positional features */
  features?: Maybe<Array<Maybe<Features>>>;
  source?: Maybe<AnnotationReference>;
  /**
   * Database identifier associated to the annotation
   *
   * Examples:
   * 101M_1, 2UZI.C, P01112
   */
  target_id?: Maybe<Scalars['String']['output']>;
  target_identifiers?: Maybe<TargetIdentifiers>;
}

export enum SequenceReference {
  NcbiGenome = 'NCBI_GENOME',
  NcbiProtein = 'NCBI_PROTEIN',
  PdbEntity = 'PDB_ENTITY',
  PdbInstance = 'PDB_INSTANCE',
  Uniprot = 'UNIPROT'
}

/** Subscription root */
export interface Subscription {
  __typename?: 'Subscription';
  /** Get sequence alignments */
  alignments_subscription?: Maybe<TargetAlignments>;
  /** Get sequence annotations */
  annotations_subscription?: Maybe<SequenceAnnotations>;
  /** Get group alignments */
  group_alignments_subscription?: Maybe<TargetAlignments>;
  /** Get group annotations */
  group_annotations_subscription?: Maybe<SequenceAnnotations>;
}


/** Subscription root */
export interface SubscriptionAlignments_SubscriptionArgs {
  from: SequenceReference;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  to: SequenceReference;
}


/** Subscription root */
export interface SubscriptionAnnotations_SubscriptionArgs {
  filters?: InputMaybe<Array<AnnotationFilterInput>>;
  queryId: Scalars['String']['input'];
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
  reference: SequenceReference;
  sources: Array<InputMaybe<AnnotationReference>>;
}


/** Subscription root */
export interface SubscriptionGroup_Alignments_SubscriptionArgs {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
}


/** Subscription root */
export interface SubscriptionGroup_Annotations_SubscriptionArgs {
  filters?: InputMaybe<Array<AnnotationFilterInput>>;
  group: GroupReference;
  groupId: Scalars['String']['input'];
  sources: Array<InputMaybe<AnnotationReference>>;
}

export interface TargetAlignments {
  __typename?: 'TargetAlignments';
  aligned_regions?: Maybe<Array<Maybe<AlignedRegions>>>;
  coverage?: Maybe<Coverage>;
  orientation?: Maybe<Scalars['Int']['output']>;
  target_id?: Maybe<Scalars['String']['output']>;
  target_sequence?: Maybe<Scalars['String']['output']>;
}

export interface TargetIdentifiers {
  __typename?: 'TargetIdentifiers';
  /**
   * This item references an assembly in core_assembly
   *
   * Examples:
   * 1, 2
   */
  assembly_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references an instance in core_polymer_entity_instance
   *
   * Examples:
   * A, B, 1, 2
   */
  asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references an entity in core_polymer_entity
   *
   * Examples:
   * 1, 2
   */
  entity_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references an entry in core_entry
   *
   * Examples:
   * 101M, 1ACB
   */
  entry_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references an interface in core_interface
   *
   * Examples:
   * 1, 2
   */
  interface_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references a partner of an interface in core_interface
   *
   * Examples:
   * null, null
   */
  interface_partner_index?: Maybe<Scalars['Int']['output']>;
  /**
   * Database identifier associated to the annotation
   *
   * Examples:
   * 101M_1, 2UZI.C, P01112
   */
  target_id?: Maybe<Scalars['String']['output']>;
  /**
   * This item references a UniProt document in core_uniprot
   *
   * Examples:
   * P01112
   */
  uniprot_id?: Maybe<Scalars['String']['output']>;
}
