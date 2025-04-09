export declare const RcsbSearchMetadata: {
    "RcsbBranchedEntityInstanceContainerIdentifiers": {
        "AsymId": {
            "path": "rcsb_branched_entity_instance_container_identifiers.asym_id";
            "type": "string";
            "description": "Instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Asym Id (Branched Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AuthAsymId": {
            "path": "rcsb_branched_entity_instance_container_identifiers.auth_asym_id";
            "type": "string";
            "description": "Author instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Author instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Auth Asym Id (Branched Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntityId": {
            "path": "rcsb_branched_entity_instance_container_identifiers.entity_id";
            "type": "string";
            "description": "Entity identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entity identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entity Id (Branched Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_branched_entity_instance_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Branched Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_branched_entity_instance_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Branched Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbBranchedInstanceAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_branched_instance_annotation.type";
        }];
        "AnnotationId": {
            "path": "rcsb_branched_instance_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_branched_instance_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_branched_instance_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_branched_instance_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "CATH";
                "detail": "CATH";
            }, {
                "value": "SCOP";
                "detail": "SCOP";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "CATH": "CATH";
                "SCOP": "SCOP";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_branched_instance_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_branched_instance_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_branched_instance_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbBranchedInstanceFeatureSummary": {
        "rcsb_nested_indexing_context": [{
            "category_name": "feature_summary";
            "category_path": "rcsb_branched_instance_feature_summary.type";
        }];
        "Count": {
            "path": "rcsb_branched_instance_feature_summary.count";
            "type": "integer";
            "description": "The feature count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The feature count.";
                "context": "dictionary";
            }, {
                "text": "Count (Branched Instance Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Coverage": {
            "path": "rcsb_branched_instance_feature_summary.coverage";
            "type": "number";
            "description": "The fractional feature coverage relative to the full branched entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The fractional feature coverage relative to the full branched entity.";
                "context": "dictionary";
            }, {
                "text": "Coverage (Branched Instance Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MaximumLength": {
            "path": "rcsb_branched_instance_feature_summary.maximum_length";
            "type": "integer";
            "description": "The maximum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum feature length.";
                "context": "dictionary";
            }, {
                "text": "Maximum Length (Branched Instance Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MinimumLength": {
            "path": "rcsb_branched_instance_feature_summary.minimum_length";
            "type": "integer";
            "description": "The minimum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum feature length.";
                "context": "dictionary";
            }, {
                "text": "Minimum Length (Branched Instance Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "rcsb_branched_instance_feature_summary.type";
            "type": "string";
            "description": "Type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "BINDING_SITE";
                "detail": "Macromolecular target for ligand binding";
            }, {
                "value": "CATH";
                "detail": "CATH - Class, Architecture, Topology, and Homology Protein Structure Database";
            }, {
                "value": "MOGUL_ANGLE_OUTLIER";
                "detail": "Mogul bond angle outlier";
            }, {
                "value": "MOGUL_BOND_OUTLIER";
                "detail": "Mogul bond distance outlier";
            }, {
                "value": "RSCC_OUTLIER";
                "detail": "Real space density correlation value < 0.65";
            }, {
                "value": "RSRZ_OUTLIER";
                "detail": "Real space R-value Z score > 2";
            }, {
                "value": "SCOP";
                "detail": "SCOP - Structural Classification of Proteins";
            }, {
                "value": "STEREO_OUTLIER";
                "detail": "Stereochemical/chirality outlier";
            }, {
                "value": "UNOBSERVED_ATOM_XYZ";
                "detail": "Unobserved atom coordinates";
            }, {
                "value": "UNOBSERVED_RESIDUE_XYZ";
                "detail": "Unobserved residue coordinates";
            }, {
                "value": "ZERO_OCCUPANCY_ATOM_XYZ";
                "detail": "Atom coordinates with zero occupancy";
            }, {
                "value": "ZERO_OCCUPANCY_RESIDUE_XYZ";
                "detail": "Residue coordinates with zero occupancy";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Type (Branched Instance Feature Summary)";
                "context": "brief";
            }];
            "enum": {
                "BINDING_SITE": "BINDING_SITE";
                "CATH": "CATH";
                "MOGUL_ANGLE_OUTLIER": "MOGUL_ANGLE_OUTLIER";
                "MOGUL_BOND_OUTLIER": "MOGUL_BOND_OUTLIER";
                "RSCC_OUTLIER": "RSCC_OUTLIER";
                "RSRZ_OUTLIER": "RSRZ_OUTLIER";
                "SCOP": "SCOP";
                "STEREO_OUTLIER": "STEREO_OUTLIER";
                "UNOBSERVED_ATOM_XYZ": "UNOBSERVED_ATOM_XYZ";
                "UNOBSERVED_RESIDUE_XYZ": "UNOBSERVED_RESIDUE_XYZ";
                "ZERO_OCCUPANCY_ATOM_XYZ": "ZERO_OCCUPANCY_ATOM_XYZ";
                "ZERO_OCCUPANCY_RESIDUE_XYZ": "ZERO_OCCUPANCY_RESIDUE_XYZ";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbLigandNeighbors": {
        "Distance": {
            "path": "rcsb_ligand_neighbors.distance";
            "type": "number";
            "description": "Distance value for this ligand interaction.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Distance value for this ligand interaction.";
                "context": "dictionary";
            }, {
                "text": "Ligand Neighbor Distance";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 5;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LigandAsymId": {
            "path": "rcsb_ligand_neighbors.ligand_asym_id";
            "type": "string";
            "description": "The entity instance identifier for the ligand interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The entity instance identifier for the ligand interaction.";
                "context": "dictionary";
            }, {
                "text": "Ligand Entity Instance Identifer";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "LigandCompId": {
            "path": "rcsb_ligand_neighbors.ligand_comp_id";
            "type": "string";
            "description": "The chemical component identifier for the ligand interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical component identifier for the ligand interaction.";
                "context": "dictionary";
            }, {
                "text": "Ligand Component Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "LigandEntityId": {
            "path": "rcsb_ligand_neighbors.ligand_entity_id";
            "type": "string";
            "description": "The entity identifier for the ligand of interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The entity identifier for the ligand of interaction.";
                "context": "dictionary";
            }, {
                "text": "Ligand Entity Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "LigandIsBound": {
            "path": "rcsb_ligand_neighbors.ligand_is_bound";
            "type": "string";
            "description": "A flag to indicate the nature of the ligand interaction is covalent or metal-coordination.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "The target is not bound";
            }, {
                "value": "Y";
                "detail": "The target is bound through a covalent or metal-coordination interaction";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A flag to indicate the nature of the ligand interaction is covalent or metal-coordination.";
                "context": "dictionary";
            }, {
                "text": "Ligand is Bound to Ligand";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbId": {
        "path": "rcsb_id";
        "type": "string";
        "description": "A unique identifier for the chemical definition in this container.";
        "rcsb_search_context": ["exact-match"];
        "rcsb_full_text_priority": 10;
        "rcsb_description": [{
            "text": "A unique identifier for the chemical definition in this container.";
            "context": "dictionary";
        }, {
            "text": "Id";
            "context": "brief";
        }];
        "operator": {
            "In": "in";
            "ExactMatch": "exact_match";
        };
    };
    "PdbxEntityBranch": {
        "RcsbBranchedComponentCount": {
            "path": "pdbx_entity_branch.rcsb_branched_component_count";
            "type": "integer";
            "description": "Number of constituent chemical components in the branched entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of constituent chemical components in the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Oligosaccharide Component Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Oligosaccharide/Branched Molecular Features";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 36;
            "rcsb_current_minimum_value": 2;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "pdbx_entity_branch.type";
            "type": "string";
            "description": "The type of this branched oligosaccharide.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The type of this branched oligosaccharide.";
                "context": "dictionary";
            }, {
                "text": "Branched Entity Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Oligosaccharide/Branched Molecular Features";
                "priority_order": 5;
            }];
            "enum": {
                "oligosaccharide": "oligosaccharide";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxEntityBranchDescriptor": {
        "rcsb_nested_indexing_context": [{
            "category_name": "descriptor_type";
            "category_path": "pdbx_entity_branch_descriptor.type";
            "context_attributes": [{
                "context_value": "LINUCS";
                "attributes": [{
                    "examples": ["[][a-D-Manp]{[(2+1)][a-D-Manp]{}}", "[]{[(4+1)][b-D-GlcpNAc]{[(4+1)][b-D-GlcpNAc]{}}}"];
                    "path": "pdbx_entity_branch_descriptor.descriptor";
                }];
            }, {
                "context_value": "Glycam Condensed Sequence";
                "attributes": [{
                    "examples": ["DManpa1-2DManpa1-ROH", "DManpb1-4DGlcpNAcb1-4DGlcpNAcb1-"];
                    "path": "pdbx_entity_branch_descriptor.descriptor";
                }];
            }, {
                "context_value": "WURCS";
                "attributes": [{
                    "examples": ["WURCS=2.0/1,2,1/[a1122h-1a_1-5]/1-1/a2-b1", "WURCS=2.0/1,2,1/[a2122h-1b_1-5_2*NCC/3=O]/1-1/a4-b1"];
                    "path": "pdbx_entity_branch_descriptor.descriptor";
                }];
            }];
        }];
        "Descriptor": {
            "path": "pdbx_entity_branch_descriptor.descriptor";
            "type": "string";
            "description": "This data item contains the descriptor value for this\n entity.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This data item contains the descriptor value for this\n entity.";
                "context": "dictionary";
            }, {
                "text": "Oligosaccharide Linear Descriptor";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Oligosaccharide/Branched Molecular Features";
                "priority_order": 20;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "pdbx_entity_branch_descriptor.type";
            "type": "string";
            "description": "This data item contains the descriptor type.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "Glycam Condensed Core Sequence";
                "detail": "Linear Notation for Unique description of oligosaccharide core structure";
            }, {
                "value": "Glycam Condensed Sequence";
                "detail": "Linear Notation for unique description of an oligosaccharide entity";
            }, {
                "value": "LINUCS";
                "detail": "Linear Notation for unique description of an oligosaccharide entity";
            }, {
                "value": "WURCS";
                "detail": "Linear Notation for Web3 Unique Representation of Carbohydrate Structures";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This data item contains the descriptor type.";
                "context": "dictionary";
            }, {
                "text": "Oligosaccharide Descriptor Type";
                "context": "brief";
            }];
            "enum": {
                "Glycam Condensed Core Sequence": "Glycam Condensed Core Sequence";
                "Glycam Condensed Sequence": "Glycam Condensed Sequence";
                "LINUCS": "LINUCS";
                "WURCS": "WURCS";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbBranchedEntity": {
        "Details": {
            "path": "rcsb_branched_entity.details";
            "type": "string";
            "description": "A description of special aspects of the branched entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Details (Branched Entity)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "FormulaWeight": {
            "path": "rcsb_branched_entity.formula_weight";
            "type": "number";
            "description": "Formula mass (KDa) of the branched entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Formula mass (KDa) of the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Oligosaccharide Formula Weight";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Oligosaccharide/Branched Molecular Features";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 10.412;
            "rcsb_current_minimum_value": 0.268;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxDescription": {
            "path": "rcsb_branched_entity.pdbx_description";
            "type": "string";
            "description": "A description of the branched entity.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description of the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Oligosaccharide Entity Description";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Oligosaccharide/Branched Molecular Features";
                "priority_order": 10;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxNumberOfMolecules": {
            "path": "rcsb_branched_entity.pdbx_number_of_molecules";
            "type": "integer";
            "description": "The number of molecules of the branched entity in the entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of molecules of the branched entity in the entry.";
                "context": "dictionary";
            }, {
                "text": "Number Of Molecules (Branched Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 120;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbBranchedEntityAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_branched_entity_annotation.type";
        }];
        "AnnotationId": {
            "path": "rcsb_branched_entity_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_branched_entity_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_branched_entity_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_branched_entity_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_branched_entity_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_branched_entity_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_branched_entity_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbBranchedEntityContainerIdentifiers": {
        "ChemCompMonomers": {
            "path": "rcsb_branched_entity_container_identifiers.chem_comp_monomers";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ChemRefDefId": {
            "path": "rcsb_branched_entity_container_identifiers.chem_ref_def_id";
            "type": "string";
            "description": "The chemical reference definition identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical reference definition identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Chem Ref Def Id (Branched Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntityId": {
            "path": "rcsb_branched_entity_container_identifiers.entity_id";
            "type": "string";
            "description": "Entity identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entity identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entity Id (Branched Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_branched_entity_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Branched Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PrdId": {
            "path": "rcsb_branched_entity_container_identifiers.prd_id";
            "type": "string";
            "description": "The BIRD identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The BIRD identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Prd Id (Branched Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_branched_entity_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Branched Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ReferenceIdentifiers": {
            "ResourceAccession": {
                "path": "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_accession";
                "type": "string";
                "description": "Reference resource accession code";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference resource accession code";
                    "context": "dictionary";
                }, {
                    "text": "Resource Accession (Reference Identifiers)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "ResourceName": {
                "path": "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_name";
                "type": "string";
                "description": "Reference resource name";
                "rcsb_search_context": ["exact-match"];
                "rcsb_enum_annotated": [{
                    "value": "GlyCosmos";
                    "detail": "Web portal integrating glycosciences with the life sciences";
                    "name": "Web portal integrating glycosciences with the life sciences";
                }, {
                    "value": "GlyGen";
                    "detail": "Computational and Informatics Resources for Glycoscience";
                    "name": "Computational and Informatics Resources for Glycoscience";
                }, {
                    "value": "GlyTouCan";
                    "detail": "International glycan structure repository";
                    "name": "International glycan structure repository";
                }];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference resource name";
                    "context": "dictionary";
                }, {
                    "text": "Resource Name (Reference Identifiers)";
                    "context": "brief";
                }];
                "enum": {
                    "GlyCosmos": "GlyCosmos";
                    "GlyGen": "GlyGen";
                    "GlyTouCan": "GlyTouCan";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
    };
    "RcsbBranchedEntityFeatureSummary": {
        "rcsb_nested_indexing_context": [{
            "category_name": "feature_summary";
            "category_path": "rcsb_branched_entity_feature_summary.type";
        }];
        "Count": {
            "path": "rcsb_branched_entity_feature_summary.count";
            "type": "integer";
            "description": "The feature count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The feature count.";
                "context": "dictionary";
            }, {
                "text": "Count (Branched Entity Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Coverage": {
            "path": "rcsb_branched_entity_feature_summary.coverage";
            "type": "number";
            "description": "The fractional feature coverage relative to the full branched entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The fractional feature coverage relative to the full branched entity.";
                "context": "dictionary";
            }, {
                "text": "Coverage (Branched Entity Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MaximumLength": {
            "path": "rcsb_branched_entity_feature_summary.maximum_length";
            "type": "integer";
            "description": "The maximum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum feature length.";
                "context": "dictionary";
            }, {
                "text": "Maximum Length (Branched Entity Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MinimumLength": {
            "path": "rcsb_branched_entity_feature_summary.minimum_length";
            "type": "integer";
            "description": "The minimum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum feature length.";
                "context": "dictionary";
            }, {
                "text": "Minimum Length (Branched Entity Feature Summary)";
                "context": "brief";
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "rcsb_branched_entity_feature_summary.type";
            "type": "string";
            "description": "Type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "mutation";
                "detail": "Engineered mutations and chemical modifications";
                "name": "Engineered mutations and chemical modifications";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Type (Branched Entity Feature Summary)";
                "context": "brief";
            }];
            "enum": {
                "mutation": "mutation";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbBranchedEntityKeywords": {
        "Text": {
            "path": "rcsb_branched_entity_keywords.text";
            "type": "string";
            "description": "Keywords describing this branched entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Keywords describing this branched entity.";
                "context": "dictionary";
            }, {
                "text": "Text (Branched Entity Keywords)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbBranchedEntityNameCom": {
        "Name": {
            "path": "rcsb_branched_entity_name_com.name";
            "type": "string";
            "description": "A common name for the branched entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A common name for the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Branched Entity Name Com)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbBranchedEntityNameSys": {
        "Name": {
            "path": "rcsb_branched_entity_name_sys.name";
            "type": "string";
            "description": "The systematic name for the branched entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The systematic name for the branched entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Branched Entity Name Sys)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "AuditAuthor": {
        "IdentifierOrcid": {
            "path": "audit_author.identifier_ORCID";
            "type": "string";
            "description": "The Open Researcher and Contributor ID (ORCID).";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The Open Researcher and Contributor ID (ORCID).";
                "context": "dictionary";
            }, {
                "text": "Structure Author ORCID";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 15;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "audit_author.name";
            "type": "string";
            "description": "The name of an author of this data block. If there are multiple\n authors, _audit_author.name is looped with _audit_author.address.\n The family name(s), followed by a comma and including any\n dynastic components, precedes the first name(s) or initial(s).";
            "rcsb_search_context": ["exact-match", "full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The name of an author of this data block. If there are multiple\n authors, _audit_author.name is looped with _audit_author.address.\n The family name(s), followed by a comma and including any\n dynastic components, precedes the first name(s) or initial(s).";
                "context": "dictionary";
            }, {
                "text": "List people responsible for the contents of this entry. Hyphens, apostrophes and blank spaces are allowed in the last names. Special characters and character modifiers should not be used.";
                "context": "deposition";
            }, {
                "text": "Structure Author";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 10;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Cell": {
        "AngleAlpha": {
            "path": "cell.angle_alpha";
            "type": "number";
            "description": "Unit-cell angle alpha of the reported structure in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle alpha of the reported structure in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle alpha";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 124.813;
            "rcsb_current_minimum_value": 58.8;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AngleBeta": {
            "path": "cell.angle_beta";
            "type": "number";
            "description": "Unit-cell angle beta of the reported structure in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle beta of the reported structure in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle beta";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 164.339;
            "rcsb_current_minimum_value": 45.4;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AngleGamma": {
            "path": "cell.angle_gamma";
            "type": "number";
            "description": "Unit-cell angle gamma of the reported structure in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle gamma of the reported structure in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle gamma";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 125;
            "rcsb_current_minimum_value": 57.76;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthA": {
            "path": "cell.length_a";
            "type": "number";
            "description": "Unit-cell length a corresponding to the structure reported in\nangstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length a corresponding to the structure reported in\nangstroms.";
                "context": "dictionary";
            }, {
                "text": "Length a";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 5;
            }];
            "rcsb_current_maximum_value": 1255;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthB": {
            "path": "cell.length_b";
            "type": "number";
            "description": "Unit-cell length b corresponding to the structure reported in\n angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length b corresponding to the structure reported in\n angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length b";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 10;
            }];
            "rcsb_current_maximum_value": 1255;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthC": {
            "path": "cell.length_c";
            "type": "number";
            "description": "Unit-cell length c corresponding to the structure reported in\nangstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length c corresponding to the structure reported in\nangstroms.";
                "context": "dictionary";
            }, {
                "text": "Length c";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 1933.3;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Citation": {
        "BookTitle": {
            "path": "citation.book_title";
            "type": "string";
            "description": "The title of the book in which the citation appeared; relevant\n for books or book chapters.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The title of the book in which the citation appeared; relevant\n for books or book chapters.";
                "context": "dictionary";
            }, {
                "text": "Book Title (Citation)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Id": {
            "path": "citation.id";
            "type": "string";
            "description": "The value of _citation.id must uniquely identify a record in the\n CITATION list.\n\n The _citation.id 'primary' should be used to indicate the\n citation that the author(s) consider to be the most pertinent to\n the contents of the data block.\n\n Note that this item need not be a number; it can be any unique\n identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value of _citation.id must uniquely identify a record in the\n CITATION list.\n\n The _citation.id 'primary' should be used to indicate the\n citation that the author(s) consider to be the most pertinent to\n the contents of the data block.\n\n Note that this item need not be a number; it can be any unique\n identifier.";
                "context": "dictionary";
            }, {
                "text": "Id (Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalAbbrev": {
            "path": "citation.journal_abbrev";
            "type": "string";
            "description": "Abbreviated name of the cited journal as given in the\n Chemical Abstracts Service Source Index.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Abbreviated name of the cited journal as given in the\n Chemical Abstracts Service Source Index.";
                "context": "dictionary";
            }, {
                "text": "The PDB (i.e., the Chemical Abstracts) abbreviation for a journal. If you do not know the abbreviation, then give the complete  name of the journal and we will try and find it for you. If it is a book or other monographic work, state the full title.";
                "context": "deposition";
            }, {
                "text": "Citation Journal Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalIdAstm": {
            "path": "citation.journal_id_ASTM";
            "type": "string";
            "description": "The American Society for Testing and Materials (ASTM) code\n assigned to the journal cited (also referred to as the CODEN\n designator of the Chemical Abstracts Service); relevant for\n journal articles.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The American Society for Testing and Materials (ASTM) code\n assigned to the journal cited (also referred to as the CODEN\n designator of the Chemical Abstracts Service); relevant for\n journal articles.";
                "context": "dictionary";
            }, {
                "text": "Journal Id Astm (Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalIdIssn": {
            "path": "citation.journal_id_ISSN";
            "type": "string";
            "description": "The International Standard Serial Number (ISSN) code assigned to\n the journal cited; relevant for journal articles.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The International Standard Serial Number (ISSN) code assigned to\n the journal cited; relevant for journal articles.";
                "context": "dictionary";
            }, {
                "text": "Journal Id Issn (Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxDatabaseIdDoi": {
            "path": "citation.pdbx_database_id_DOI";
            "type": "string";
            "description": "Document Object Identifier used by doi.org to uniquely\n specify bibliographic entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Document Object Identifier used by doi.org to uniquely\n specify bibliographic entry.";
                "context": "dictionary";
            }, {
                "text": "The document Object Identifier used by doi.org to uniquely specify bibliographic entry";
                "context": "deposition";
            }, {
                "text": "Citation DOI";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications All";
                "priority_order": 25;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbAuthors": {
            "path": "citation.rcsb_authors";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "RcsbIsPrimary": {
            "path": "citation.rcsb_is_primary";
            "type": "string";
            "description": "Flag to indicate a primary citation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Flag to indicate a primary citation.";
                "context": "dictionary";
            }, {
                "text": "Is Primary (Citation)";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbJournalAbbrev": {
            "path": "citation.rcsb_journal_abbrev";
            "type": "string";
            "description": "Normalized journal abbreviation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Normalized journal abbreviation.";
                "context": "dictionary";
            }, {
                "text": "Citation Journal Name (Abbreviated)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications All";
                "priority_order": 15;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Title": {
            "path": "citation.title";
            "type": "string";
            "description": "The title of the citation; relevant for journal articles, books\n and book chapters.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The title of the citation; relevant for journal articles, books\n and book chapters.";
                "context": "dictionary";
            }, {
                "text": "Title of the article or chapter or part of a book. This should be marked NULL if the author(s) listed wrote the entire book (or other work) and no sub-section of the book is being cited. Example: The Structure of Crystalline Profilin-Beta-Actin";
                "context": "deposition";
            }, {
                "text": "Citation Title";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications All";
                "priority_order": 10;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "UnpublishedFlag": {
            "path": "citation.unpublished_flag";
            "type": "string";
            "description": "Flag to indicate that this citation will not be published.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Flag to indicate that this citation will not be published.";
                "context": "dictionary";
            }, {
                "text": "Unpublished Flag (Citation)";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Year": {
            "path": "citation.year";
            "type": "integer";
            "description": "The year of the citation; relevant for journal articles, books\n and book chapters.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The year of the citation; relevant for journal articles, books\n and book chapters.";
                "context": "dictionary";
            }, {
                "text": "The year of publication of the article. Example: 2002";
                "context": "deposition";
            }, {
                "text": "Citation Publication Year";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications All";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 2025;
            "rcsb_current_minimum_value": 1947;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Database2": {
        "DatabaseCode": {
            "path": "database_2.database_code";
            "type": "string";
            "description": "The code assigned by the database identified in\n _database_2.database_id.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The code assigned by the database identified in\n _database_2.database_id.";
                "context": "dictionary";
            }, {
                "text": "Database Code";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 15;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxDatabaseAccession": {
            "path": "database_2.pdbx_database_accession";
            "type": "string";
            "description": "Extended accession code issued for for _database_2.database_code assigned by the database identified in\n _database_2.database_id.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "Extended accession code issued for for _database_2.database_code assigned by the database identified in\n _database_2.database_id.";
                "context": "dictionary";
            }, {
                "text": "Database Accession";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 10;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "Diffrn": {
        "AmbientPressure": {
            "path": "diffrn.ambient_pressure";
            "type": "number";
            "description": "The mean hydrostatic pressure in kilopascals at which the\n intensities were measured.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The mean hydrostatic pressure in kilopascals at which the\n intensities were measured.";
                "context": "dictionary";
            }, {
                "text": "Ambient Pressure (Diffrn)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 430000;
            "rcsb_current_minimum_value": 101;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AmbientTemp": {
            "path": "diffrn.ambient_temp";
            "type": "number";
            "description": "The mean temperature in kelvins at which the intensities were\n measured.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The mean temperature in kelvins at which the intensities were\n measured.";
                "context": "dictionary";
            }, {
                "text": "The usual temperature when using cold nitrogen gas stream is around T=100 K";
                "context": "deposition";
            }, {
                "text": "Diffraction Source Temperature";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 50;
            }];
            "rcsb_current_maximum_value": 446.15;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CrystalSupport": {
            "path": "diffrn.crystal_support";
            "type": "string";
            "description": "The physical device used to support the crystal during data\n collection.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The physical device used to support the crystal during data\n collection.";
                "context": "dictionary";
            }, {
                "text": "Crystal Support (Diffrn)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Details": {
            "path": "diffrn.details";
            "type": "string";
            "description": "Special details of the diffraction measurement process. Should\n include information about source instability, crystal motion,\n degradation and so on.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Special details of the diffraction measurement process. Should\n include information about source instability, crystal motion,\n degradation and so on.";
                "context": "dictionary";
            }, {
                "text": "Indicate anything special or unique about the data collection";
                "context": "deposition";
            }, {
                "text": "Details (Diffrn)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxSerialCrystalExperiment": {
            "path": "diffrn.pdbx_serial_crystal_experiment";
            "type": "string";
            "description": "Y/N if using serial crystallography experiment in which multiple crystals contribute to each diffraction frame in the experiment.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "No";
            }, {
                "value": "Y";
                "detail": "Yes";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Y/N if using serial crystallography experiment in which multiple crystals contribute to each diffraction frame in the experiment.";
                "context": "dictionary";
            }, {
                "text": "Diffraction Serial Crystal Experiment";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 55;
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "DiffrnDetector": {
        "Details": {
            "path": "diffrn_detector.details";
            "type": "string";
            "description": "A description of special aspects of the radiation detector.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the radiation detector.";
                "context": "dictionary";
            }, {
                "text": "Decribe the optics used in the experiment";
                "context": "deposition";
            }, {
                "text": "Details (Diffrn Detector)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Detector": {
            "path": "diffrn_detector.detector";
            "type": "string";
            "description": "The general class of the radiation detector.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The general class of the radiation detector.";
                "context": "dictionary";
            }, {
                "text": "Describe the detector used from the pulldown list";
                "context": "deposition";
            }, {
                "text": "Detector (Diffrn Detector)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxCollectionDate": {
            "path": "diffrn_detector.pdbx_collection_date";
            "type": "string";
            "format": "date-time";
            "description": "The date of data collection.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The date of data collection.";
                "context": "dictionary";
            }, {
                "text": "Please provide the date that the experiment was carried out.  Use the format YYYY-MM-DD.";
                "context": "deposition";
            }, {
                "text": "Collection Date (Diffrn Detector)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1741219200000;
            "rcsb_current_minimum_value": -29926281600000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "diffrn_detector.type";
            "type": "string";
            "description": "The make, model or name of the detector device used.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The make, model or name of the detector device used.";
                "context": "dictionary";
            }, {
                "text": "The type of detector used. Such values include CCD, image plate, ....";
                "context": "deposition";
            }, {
                "text": "Diffraction Detector";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 30;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "DiffrnRadiation": {
        "Collimation": {
            "path": "diffrn_radiation.collimation";
            "type": "string";
            "description": "The collimation or focusing applied to the radiation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The collimation or focusing applied to the radiation.";
                "context": "dictionary";
            }, {
                "text": "Collimation (Diffrn Radiation)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Monochromator": {
            "path": "diffrn_radiation.monochromator";
            "type": "string";
            "description": "The method used to obtain monochromatic radiation. If a mono-\n chromator crystal is used, the material and the indices of the\n Bragg reflection are specified.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The method used to obtain monochromatic radiation. If a mono-\n chromator crystal is used, the material and the indices of the\n Bragg reflection are specified.";
                "context": "dictionary";
            }, {
                "text": "Specify the type of monochromator used. Types may include: GOBEL MIRRORS GRAPHITE GRAPHIC CRYSTAL SI(111) SILICON CRYSTAL NI FILTER SUPER DOUBLE MIRRORS SUPER LONG MIRRORS YALE MIRRORS";
                "context": "deposition";
            }, {
                "text": "Monochromator (Diffrn Radiation)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxDiffrnProtocol": {
            "path": "diffrn_radiation.pdbx_diffrn_protocol";
            "type": "string";
            "description": "SINGLE WAVELENGTH, LAUE, or MAD.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "SINGLE WAVELENGTH, LAUE, or MAD.";
                "context": "dictionary";
            }, {
                "text": "Give the experimental protocol used for data collection.";
                "context": "deposition";
            }, {
                "text": "Diffrn Protocol (Diffrn Radiation)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "DiffrnSource": {
        "Details": {
            "path": "diffrn_source.details";
            "type": "string";
            "description": "A description of special aspects of the radiation source used.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the radiation source used.";
                "context": "dictionary";
            }, {
                "text": "Details (Diffrn Source)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxSynchrotronBeamline": {
            "path": "diffrn_source.pdbx_synchrotron_beamline";
            "type": "string";
            "description": "Synchrotron beamline.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Synchrotron beamline.";
                "context": "dictionary";
            }, {
                "text": "If synchrotron radition was used, use the pulldown to specificy the site";
                "context": "deposition";
            }, {
                "text": "Diffraction Source Synchrotron Beamline";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 40;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxSynchrotronSite": {
            "path": "diffrn_source.pdbx_synchrotron_site";
            "type": "string";
            "description": "Synchrotron site.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Synchrotron site.";
                "context": "dictionary";
            }, {
                "text": "If synchrotron radiation was used, please use the pulldown to specify the site and beamline";
                "context": "deposition";
            }, {
                "text": "Diffraction Source Synchrotron Site";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 35;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Source": {
            "path": "diffrn_source.source";
            "type": "string";
            "description": "The general class of the radiation source.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The general class of the radiation source.";
                "context": "dictionary";
            }, {
                "text": "If an X-ray generator was used, please specify the name and model of the generator. If your particular model is not found, use other.";
                "context": "deposition";
            }, {
                "text": "Diffraction Source General Class";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 45;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "diffrn_source.type";
            "type": "string";
            "description": "The make, model or name of the source of radiation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The make, model or name of the source of radiation.";
                "context": "dictionary";
            }, {
                "text": "Type (Diffrn Source)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Em2DCrystalEntity": {
        "AngleGamma": {
            "path": "em_2d_crystal_entity.angle_gamma";
            "type": "number";
            "description": "Unit-cell angle gamma in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle gamma in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle Gamma (Em 2d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 120;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CSamplingLength": {
            "path": "em_2d_crystal_entity.c_sampling_length";
            "type": "number";
            "description": "Length used to sample the reciprocal lattice lines in the c-direction.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Length used to sample the reciprocal lattice lines in the c-direction.";
                "context": "dictionary";
            }, {
                "text": "C Sampling Length (Em 2d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 320;
            "rcsb_current_minimum_value": 10;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthA": {
            "path": "em_2d_crystal_entity.length_a";
            "type": "number";
            "description": "Unit-cell length a in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length a in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length A (Em 2d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 220;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthB": {
            "path": "em_2d_crystal_entity.length_b";
            "type": "number";
            "description": "Unit-cell length b in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length b in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length B (Em 2d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 304;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthC": {
            "path": "em_2d_crystal_entity.length_c";
            "type": "number";
            "description": "Thickness of 2D crystal";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Thickness of 2D crystal";
                "context": "dictionary";
            }, {
                "text": "Length C (Em 2d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 320;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Em3DCrystalEntity": {
        "AngleAlpha": {
            "path": "em_3d_crystal_entity.angle_alpha";
            "type": "number";
            "description": "Unit-cell angle alpha in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle alpha in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle Alpha (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 109.52;
            "rcsb_current_minimum_value": 62.8;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AngleBeta": {
            "path": "em_3d_crystal_entity.angle_beta";
            "type": "number";
            "description": "Unit-cell angle beta in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle beta in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle Beta (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 116.15;
            "rcsb_current_minimum_value": 77.16;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AngleGamma": {
            "path": "em_3d_crystal_entity.angle_gamma";
            "type": "number";
            "description": "Unit-cell angle gamma in degrees.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell angle gamma in degrees.";
                "context": "dictionary";
            }, {
                "text": "Angle Gamma (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 120;
            "rcsb_current_minimum_value": 81.124;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthA": {
            "path": "em_3d_crystal_entity.length_a";
            "type": "number";
            "description": "Unit-cell length a in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length a in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length A (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 600;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthB": {
            "path": "em_3d_crystal_entity.length_b";
            "type": "number";
            "description": "Unit-cell length b in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length b in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length B (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 600;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LengthC": {
            "path": "em_3d_crystal_entity.length_c";
            "type": "number";
            "description": "Unit-cell length c in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Unit-cell length c in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Length C (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 600;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SpaceGroupName": {
            "path": "em_3d_crystal_entity.space_group_name";
            "type": "string";
            "description": "Space group name.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Space group name.";
                "context": "dictionary";
            }, {
                "text": "Space Group Name (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SpaceGroupNum": {
            "path": "em_3d_crystal_entity.space_group_num";
            "type": "integer";
            "description": "Space group number.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Space group number.";
                "context": "dictionary";
            }, {
                "text": "Space Group Num (Em 3d Crystal Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 197;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Em3DFitting": {
        "Details": {
            "path": "em_3d_fitting.details";
            "type": "string";
            "description": "Any additional details regarding fitting of atomic coordinates into\n the 3DEM volume, including data and considerations from other\n methods used in computation of the model.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Any additional details regarding fitting of atomic coordinates into\n the 3DEM volume, including data and considerations from other\n methods used in computation of the model.";
                "context": "dictionary";
            }, {
                "text": "Details (Em 3d Fitting)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "em_3d_fitting.method";
            "type": "string";
            "description": "The method used to fit atomic coordinates\n into the 3dem reconstructed map.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The method used to fit atomic coordinates\n into the 3dem reconstructed map.";
                "context": "dictionary";
            }, {
                "text": "Method (Em 3d Fitting)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "OverallBValue": {
            "path": "em_3d_fitting.overall_b_value";
            "type": "number";
            "description": "The overall B (temperature factor) value for the 3d-em volume.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The overall B (temperature factor) value for the 3d-em volume.";
                "context": "dictionary";
            }, {
                "text": "Overall B Value (Em 3d Fitting)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1000;
            "rcsb_current_minimum_value": 0.836;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RefProtocol": {
            "path": "em_3d_fitting.ref_protocol";
            "type": "string";
            "description": "The refinement protocol used.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The refinement protocol used.";
                "context": "dictionary";
            }, {
                "text": "Ref Protocol (Em 3d Fitting)";
                "context": "brief";
            }];
            "enum": {
                "AB INITIO MODEL": "AB INITIO MODEL";
                "BACKBONE TRACE": "BACKBONE TRACE";
                "FLEXIBLE FIT": "FLEXIBLE FIT";
                "OTHER": "OTHER";
                "RIGID BODY FIT": "RIGID BODY FIT";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RefSpace": {
            "path": "em_3d_fitting.ref_space";
            "type": "string";
            "description": "A flag to indicate whether fitting was carried out in real\n or reciprocal refinement space.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A flag to indicate whether fitting was carried out in real\n or reciprocal refinement space.";
                "context": "dictionary";
            }, {
                "text": "Ref Space (Em 3d Fitting)";
                "context": "brief";
            }];
            "enum": {
                "REAL": "REAL";
                "RECIPROCAL": "RECIPROCAL";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "TargetCriteria": {
            "path": "em_3d_fitting.target_criteria";
            "type": "string";
            "description": "The measure used to assess quality of fit of the atomic coordinates in the\n 3DEM map volume.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The measure used to assess quality of fit of the atomic coordinates in the\n 3DEM map volume.";
                "context": "dictionary";
            }, {
                "text": "Target Criteria (Em 3d Fitting)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Em3DFittingList": {
        "Details": {
            "path": "em_3d_fitting_list.details";
            "type": "string";
            "description": "Details about the model used in fitting.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Details about the model used in fitting.";
                "context": "dictionary";
            }, {
                "text": "Details (Em 3d Fitting List)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Em3DReconstruction": {
        "ActualPixelSize": {
            "path": "em_3d_reconstruction.actual_pixel_size";
            "type": "number";
            "description": "The actual pixel size of the projection set of images in Angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The actual pixel size of the projection set of images in Angstroms.";
                "context": "dictionary";
            }, {
                "text": "Actual Pixel Size (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 11.4;
            "rcsb_current_minimum_value": 0.5;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Algorithm": {
            "path": "em_3d_reconstruction.algorithm";
            "type": "string";
            "description": "The reconstruction algorithm/technique used to generate the map.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The reconstruction algorithm/technique used to generate the map.";
                "context": "dictionary";
            }, {
                "text": "Algorithm (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "em_3d_reconstruction.method";
            "type": "string";
            "description": "The algorithm method used for the 3d-reconstruction.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The algorithm method used for the 3d-reconstruction.";
                "context": "dictionary";
            }, {
                "text": "Method (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NominalPixelSize": {
            "path": "em_3d_reconstruction.nominal_pixel_size";
            "type": "number";
            "description": "The nominal pixel size of the projection set of images in Angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The nominal pixel size of the projection set of images in Angstroms.";
                "context": "dictionary";
            }, {
                "text": "Nominal Pixel Size (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 15.5;
            "rcsb_current_minimum_value": 0.41;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumClassAverages": {
            "path": "em_3d_reconstruction.num_class_averages";
            "type": "integer";
            "description": "The number of classes used in the final 3d reconstruction";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of classes used in the final 3d reconstruction";
                "context": "dictionary";
            }, {
                "text": "Num Class Averages (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 340465;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumParticles": {
            "path": "em_3d_reconstruction.num_particles";
            "type": "integer";
            "description": "The number of 2D projections or 3D subtomograms used in the 3d reconstruction";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of 2D projections or 3D subtomograms used in the 3d reconstruction";
                "context": "dictionary";
            }, {
                "text": "Num Particles (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 19370760;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RefinementType": {
            "path": "em_3d_reconstruction.refinement_type";
            "type": "string";
            "description": "Indicates details on how the half-map used for resolution determination (usually by FSC) have been generated.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Indicates details on how the half-map used for resolution determination (usually by FSC) have been generated.";
                "context": "dictionary";
            }, {
                "text": "Refinement Type (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "enum": {
                "HALF-MAPS REFINED AGAINST SAME DATA": "HALF-MAPS REFINED AGAINST SAME DATA";
                "HALF-MAPS REFINED INDEPENDENTLY": "HALF-MAPS REFINED INDEPENDENTLY";
                "HALF-MAPS REFINED INDEPENDENTLY WITH FREQUENCY RANGE OMITTED": "HALF-MAPS REFINED INDEPENDENTLY WITH FREQUENCY RANGE OMITTED";
                "HALF-MAPS REFINED WITH FREQUENCY RANGE OMITTED": "HALF-MAPS REFINED WITH FREQUENCY RANGE OMITTED";
                "OTHER": "OTHER";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Resolution": {
            "path": "em_3d_reconstruction.resolution";
            "type": "number";
            "description": "The final resolution (in angstroms) of the 3D reconstruction.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The final resolution (in angstroms) of the 3D reconstruction.";
                "context": "dictionary";
            }, {
                "text": "Reconstruction Resolution";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 5;
            }];
            "rcsb_current_maximum_value": 70;
            "rcsb_current_minimum_value": 0.6;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ResolutionMethod": {
            "path": "em_3d_reconstruction.resolution_method";
            "type": "string";
            "description": "The  method used to determine the final resolution\n of the 3d reconstruction.\n The Fourier Shell Correlation criterion as a measure of\n resolution is based on the concept of splitting the (2D)\n data set into two halves; averaging each and comparing them\n using the Fourier Ring Correlation (FRC) technique.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The  method used to determine the final resolution\n of the 3d reconstruction.\n The Fourier Shell Correlation criterion as a measure of\n resolution is based on the concept of splitting the (2D)\n data set into two halves; averaging each and comparing them\n using the Fourier Ring Correlation (FRC) technique.";
                "context": "dictionary";
            }, {
                "text": "Resolution Method (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SymmetryType": {
            "path": "em_3d_reconstruction.symmetry_type";
            "type": "string";
            "description": "The type of symmetry applied to the reconstruction";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The type of symmetry applied to the reconstruction";
                "context": "dictionary";
            }, {
                "text": "Symmetry Type (Em 3d Reconstruction)";
                "context": "brief";
            }];
            "enum": {
                "2D CRYSTAL": "2D CRYSTAL";
                "3D CRYSTAL": "3D CRYSTAL";
                "HELICAL": "HELICAL";
                "POINT": "POINT";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmCtfCorrection": {
        "Details": {
            "path": "em_ctf_correction.details";
            "type": "string";
            "description": "Any additional details about CTF correction";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Any additional details about CTF correction";
                "context": "dictionary";
            }, {
                "text": "Details (Em Ctf Correction)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "em_ctf_correction.type";
            "type": "string";
            "description": "Type of CTF correction applied";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Type of CTF correction applied";
                "context": "dictionary";
            }, {
                "text": "Type (Em Ctf Correction)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "EmDiffraction": {
        "CameraLength": {
            "path": "em_diffraction.camera_length";
            "type": "number";
            "description": "The camera length (in millimeters). The camera length is the\n product of the objective focal length and the combined magnification\n of the intermediate and projector lenses when the microscope is\n operated in the diffraction mode.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The camera length (in millimeters). The camera length is the\n product of the objective focal length and the combined magnification\n of the intermediate and projector lenses when the microscope is\n operated in the diffraction mode.";
                "context": "dictionary";
            }, {
                "text": "Camera Length (Em Diffraction)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 4705;
            "rcsb_current_minimum_value": 0.1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmDiffractionShell": {
        "FourierSpaceCoverage": {
            "path": "em_diffraction_shell.fourier_space_coverage";
            "type": "number";
            "description": "Completeness of the structure factor data within this resolution shell, in percent";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Completeness of the structure factor data within this resolution shell, in percent";
                "context": "dictionary";
            }, {
                "text": "Fourier Space Coverage (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0.001;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "HighResolution": {
            "path": "em_diffraction_shell.high_resolution";
            "type": "number";
            "description": "High resolution limit for this shell (angstroms)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "High resolution limit for this shell (angstroms)";
                "context": "dictionary";
            }, {
                "text": "High Resolution (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 55.79;
            "rcsb_current_minimum_value": 0.6;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LowResolution": {
            "path": "em_diffraction_shell.low_resolution";
            "type": "number";
            "description": "Low resolution limit for this shell (angstroms)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Low resolution limit for this shell (angstroms)";
                "context": "dictionary";
            }, {
                "text": "Low Resolution (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 200;
            "rcsb_current_minimum_value": 0.1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Multiplicity": {
            "path": "em_diffraction_shell.multiplicity";
            "type": "number";
            "description": "Multiplicity (average number of measurements) for the structure factors in this resolution shell";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Multiplicity (average number of measurements) for the structure factors in this resolution shell";
                "context": "dictionary";
            }, {
                "text": "Multiplicity (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 300;
            "rcsb_current_minimum_value": 0.1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumStructureFactors": {
            "path": "em_diffraction_shell.num_structure_factors";
            "type": "integer";
            "description": "Number of measured structure factors in this resolution shell";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of measured structure factors in this resolution shell";
                "context": "dictionary";
            }, {
                "text": "Num Structure Factors (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 6901357;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PhaseResidual": {
            "path": "em_diffraction_shell.phase_residual";
            "type": "number";
            "description": "Phase residual for this resolution shell, in degrees";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Phase residual for this resolution shell, in degrees";
                "context": "dictionary";
            }, {
                "text": "Phase Residual (Em Diffraction Shell)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 179.9;
            "rcsb_current_minimum_value": 1e-10;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmDiffractionStats": {
        "FourierSpaceCoverage": {
            "path": "em_diffraction_stats.fourier_space_coverage";
            "type": "number";
            "description": "Completeness of the structure factor data within the defined space group\n at the reported resolution (percent).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Completeness of the structure factor data within the defined space group\n at the reported resolution (percent).";
                "context": "dictionary";
            }, {
                "text": "Fourier Space Coverage (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0.1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "HighResolution": {
            "path": "em_diffraction_stats.high_resolution";
            "type": "number";
            "description": "High resolution limit of the structure factor data, in angstroms";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "High resolution limit of the structure factor data, in angstroms";
                "context": "dictionary";
            }, {
                "text": "High Resolution (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 18.25;
            "rcsb_current_minimum_value": 0.6;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumIntensitiesMeasured": {
            "path": "em_diffraction_stats.num_intensities_measured";
            "type": "integer";
            "description": "Total number of diffraction intensities measured (before averaging)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Total number of diffraction intensities measured (before averaging)";
                "context": "dictionary";
            }, {
                "text": "Num Intensities Measured (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 9650574;
            "rcsb_current_minimum_value": 943;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumStructureFactors": {
            "path": "em_diffraction_stats.num_structure_factors";
            "type": "integer";
            "description": "Number of structure factors obtained (merged amplitudes + phases)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of structure factors obtained (merged amplitudes + phases)";
                "context": "dictionary";
            }, {
                "text": "Num Structure Factors (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 6901357;
            "rcsb_current_minimum_value": 325;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "OverallPhaseError": {
            "path": "em_diffraction_stats.overall_phase_error";
            "type": "number";
            "description": "Overall phase error in degrees";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Overall phase error in degrees";
                "context": "dictionary";
            }, {
                "text": "Overall Phase Error (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 179.9;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "OverallPhaseResidual": {
            "path": "em_diffraction_stats.overall_phase_residual";
            "type": "number";
            "description": "Overall phase residual in degrees";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Overall phase residual in degrees";
                "context": "dictionary";
            }, {
                "text": "Overall Phase Residual (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 179.9;
            "rcsb_current_minimum_value": 1e-10;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RMerge": {
            "path": "em_diffraction_stats.r_merge";
            "type": "number";
            "description": "Rmerge value (percent)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Rmerge value (percent)";
                "context": "dictionary";
            }, {
                "text": "R Merge (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 99;
            "rcsb_current_minimum_value": 0.093;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RSym": {
            "path": "em_diffraction_stats.r_sym";
            "type": "number";
            "description": "Rsym value (percent)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Rsym value (percent)";
                "context": "dictionary";
            }, {
                "text": "R Sym (Em Diffraction Stats)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0.073;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmEmbedding": {
        "Details": {
            "path": "em_embedding.details";
            "type": "string";
            "description": "Staining procedure used in the specimen preparation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Staining procedure used in the specimen preparation.";
                "context": "dictionary";
            }, {
                "text": "Details (Em Embedding)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Material": {
            "path": "em_embedding.material";
            "type": "string";
            "description": "The embedding  material.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The embedding  material.";
                "context": "dictionary";
            }, {
                "text": "Material (Em Embedding)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "EmEntityAssembly": {
        "ParentId": {
            "path": "em_entity_assembly.parent_id";
            "type": "integer";
            "description": "The parent of this assembly.\n This data item is an internal category pointer to _em_entity_assembly.id.\n By convention, the full assembly (top of hierarchy) is assigned parent id 0 (zero).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The parent of this assembly.\n This data item is an internal category pointer to _em_entity_assembly.id.\n By convention, the full assembly (top of hierarchy) is assigned parent id 0 (zero).";
                "context": "dictionary";
            }, {
                "text": "Parent Id (Em Entity Assembly)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 12;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Source": {
            "path": "em_entity_assembly.source";
            "type": "string";
            "description": "The type of source (e.g., natural source) for the component (sample or sample\nsubcomponent)";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The type of source (e.g., natural source) for the component (sample or sample\nsubcomponent)";
                "context": "dictionary";
            }, {
                "text": "Source (Em Entity Assembly)";
                "context": "brief";
            }];
            "enum": {
                "MULTIPLE SOURCES": "MULTIPLE SOURCES";
                "NATURAL": "NATURAL";
                "RECOMBINANT": "RECOMBINANT";
                "SYNTHETIC": "SYNTHETIC";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmExperiment": {
        "AggregationState": {
            "path": "em_experiment.aggregation_state";
            "type": "string";
            "description": "The aggregation/assembly state of the imaged specimen.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The aggregation/assembly state of the imaged specimen.";
                "context": "dictionary";
            }, {
                "text": "EM Specimen Aggregation State";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 10;
            }];
            "enum": {
                "2D ARRAY": "2D ARRAY";
                "3D ARRAY": "3D ARRAY";
                "CELL": "CELL";
                "FILAMENT": "FILAMENT";
                "HELICAL ARRAY": "HELICAL ARRAY";
                "PARTICLE": "PARTICLE";
                "TISSUE": "TISSUE";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ReconstructionMethod": {
            "path": "em_experiment.reconstruction_method";
            "type": "string";
            "description": "The reconstruction method used in the EM experiment.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The reconstruction method used in the EM experiment.";
                "context": "dictionary";
            }, {
                "text": "EM Reconstruction Method";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 15;
            }];
            "enum": {
                "CRYSTALLOGRAPHY": "CRYSTALLOGRAPHY";
                "HELICAL": "HELICAL";
                "SINGLE PARTICLE": "SINGLE PARTICLE";
                "SUBTOMOGRAM AVERAGING": "SUBTOMOGRAM AVERAGING";
                "TOMOGRAPHY": "TOMOGRAPHY";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmHelicalEntity": {
        "AngularRotationPerSubunit": {
            "path": "em_helical_entity.angular_rotation_per_subunit";
            "type": "number";
            "description": "The angular rotation per helical subunit in degrees. Negative values indicate left-handed helices; positive values indicate right handed helices.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The angular rotation per helical subunit in degrees. Negative values indicate left-handed helices; positive values indicate right handed helices.";
                "context": "dictionary";
            }, {
                "text": "Angular Rotation Per Subunit (Em Helical Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 180;
            "rcsb_current_minimum_value": -179.9;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AxialRisePerSubunit": {
            "path": "em_helical_entity.axial_rise_per_subunit";
            "type": "number";
            "description": "The axial rise per subunit in the helical assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The axial rise per subunit in the helical assembly.";
                "context": "dictionary";
            }, {
                "text": "Axial Rise Per Subunit (Em Helical Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 430;
            "rcsb_current_minimum_value": 0.01;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AxialSymmetry": {
            "path": "em_helical_entity.axial_symmetry";
            "type": "string";
            "description": "Symmetry of the helical axis, either cyclic (Cn) or dihedral (Dn), where n>=1.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Symmetry of the helical axis, either cyclic (Cn) or dihedral (Dn), where n>=1.";
                "context": "dictionary";
            }, {
                "text": "Axial Symmetry (Em Helical Entity)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "EmImageRecording": {
        "AverageExposureTime": {
            "path": "em_image_recording.average_exposure_time";
            "type": "number";
            "description": "The average exposure time for each image.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The average exposure time for each image.";
                "context": "dictionary";
            }, {
                "text": "Average Exposure Time (Em Image Recording)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 150;
            "rcsb_current_minimum_value": 0.006;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AvgElectronDosePerImage": {
            "path": "em_image_recording.avg_electron_dose_per_image";
            "type": "number";
            "description": "The electron dose received by the specimen per image (electrons per square angstrom).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The electron dose received by the specimen per image (electrons per square angstrom).";
                "context": "dictionary";
            }, {
                "text": "Avg Electron Dose Per Image (Em Image Recording)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1200;
            "rcsb_current_minimum_value": 0.00025;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DetectorMode": {
            "path": "em_image_recording.detector_mode";
            "type": "string";
            "description": "The detector mode used during image recording.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The detector mode used during image recording.";
                "context": "dictionary";
            }, {
                "text": "Detector Mode (Em Image Recording)";
                "context": "brief";
            }];
            "enum": {
                "COUNTING": "COUNTING";
                "INTEGRATING": "INTEGRATING";
                "OTHER": "OTHER";
                "SUPER-RESOLUTION": "SUPER-RESOLUTION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "FilmOrDetectorModel": {
            "path": "em_image_recording.film_or_detector_model";
            "type": "string";
            "description": "The detector type used for recording images.\n Usually film , CCD camera or direct electron detector.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The detector type used for recording images.\n Usually film , CCD camera or direct electron detector.";
                "context": "dictionary";
            }, {
                "text": "EM Imaging Detector";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 40;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NumDiffractionImages": {
            "path": "em_image_recording.num_diffraction_images";
            "type": "integer";
            "description": "The number of diffraction images collected.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of diffraction images collected.";
                "context": "dictionary";
            }, {
                "text": "Num Diffraction Images (Em Image Recording)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 32000;
            "rcsb_current_minimum_value": 22;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumGridsImaged": {
            "path": "em_image_recording.num_grids_imaged";
            "type": "integer";
            "description": "Number of grids in the microscopy session";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of grids in the microscopy session";
                "context": "dictionary";
            }, {
                "text": "Num Grids Imaged (Em Image Recording)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 12719;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NumRealImages": {
            "path": "em_image_recording.num_real_images";
            "type": "integer";
            "description": "The number of micrograph images collected.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of micrograph images collected.";
                "context": "dictionary";
            }, {
                "text": "Num Real Images (Em Image Recording)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 9080999;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmImaging": {
        "AcceleratingVoltage": {
            "path": "em_imaging.accelerating_voltage";
            "type": "integer";
            "description": "A value of accelerating voltage (in kV) used for imaging.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "A value of accelerating voltage (in kV) used for imaging.";
                "context": "dictionary";
            }, {
                "text": "EM Accelerating Voltage";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 35;
            }];
            "rcsb_current_maximum_value": 300300;
            "rcsb_current_minimum_value": 30;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AlignmentProcedure": {
            "path": "em_imaging.alignment_procedure";
            "type": "string";
            "description": "The type of procedure used to align the microscope electron beam.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The type of procedure used to align the microscope electron beam.";
                "context": "dictionary";
            }, {
                "text": "Alignment Procedure (Em Imaging)";
                "context": "brief";
            }];
            "enum": {
                "BASIC": "BASIC";
                "COMA FREE": "COMA FREE";
                "NONE": "NONE";
                "OTHER": "OTHER";
                "ZEMLIN TABLEAU": "ZEMLIN TABLEAU";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "C2ApertureDiameter": {
            "path": "em_imaging.c2_aperture_diameter";
            "type": "number";
            "description": "The open diameter of the c2 condenser lens,\n in microns.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The open diameter of the c2 condenser lens,\n in microns.";
                "context": "dictionary";
            }, {
                "text": "C2 Aperture Diameter (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 150;
            "rcsb_current_minimum_value": 2;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CalibratedDefocusMax": {
            "path": "em_imaging.calibrated_defocus_max";
            "type": "number";
            "description": "The maximum calibrated defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum calibrated defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
                "context": "dictionary";
            }, {
                "text": "Calibrated Defocus Max (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 30000;
            "rcsb_current_minimum_value": -7000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CalibratedDefocusMin": {
            "path": "em_imaging.calibrated_defocus_min";
            "type": "number";
            "description": "The minimum calibrated defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum calibrated defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
                "context": "dictionary";
            }, {
                "text": "Calibrated Defocus Min (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 15000;
            "rcsb_current_minimum_value": -2000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CalibratedMagnification": {
            "path": "em_imaging.calibrated_magnification";
            "type": "integer";
            "description": "The magnification value obtained for a known standard just\n prior to, during or just after the imaging experiment.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The magnification value obtained for a known standard just\n prior to, during or just after the imaging experiment.";
                "context": "dictionary";
            }, {
                "text": "Calibrated Magnification (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 587963;
            "rcsb_current_minimum_value": 2250;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Cryogen": {
            "path": "em_imaging.cryogen";
            "type": "string";
            "description": "Cryogen type used to maintain the specimen stage temperature during imaging\n in the microscope.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Cryogen type used to maintain the specimen stage temperature during imaging\n in the microscope.";
                "context": "dictionary";
            }, {
                "text": "Cryogen (Em Imaging)";
                "context": "brief";
            }];
            "enum": {
                "HELIUM": "HELIUM";
                "NITROGEN": "NITROGEN";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Date": {
            "path": "em_imaging.date";
            "type": "string";
            "format": "date";
            "description": "Date (YYYY-MM-DD) of imaging experiment or the date at which\n a series of experiments began.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Date (YYYY-MM-DD) of imaging experiment or the date at which\n a series of experiments began.";
                "context": "dictionary";
            }, {
                "text": "Date (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1577059200000;
            "rcsb_current_minimum_value": 686275200000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DetectorDistance": {
            "path": "em_imaging.detector_distance";
            "type": "number";
            "description": "The camera length (in millimeters). The camera length is the\n product of the objective focal length and the combined magnification\n of the intermediate and projector lenses when the microscope is\n operated in the diffraction mode.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The camera length (in millimeters). The camera length is the\n product of the objective focal length and the combined magnification\n of the intermediate and projector lenses when the microscope is\n operated in the diffraction mode.";
                "context": "dictionary";
            }, {
                "text": "Detector Distance (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 800;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "IlluminationMode": {
            "path": "em_imaging.illumination_mode";
            "type": "string";
            "description": "The mode of illumination.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The mode of illumination.";
                "context": "dictionary";
            }, {
                "text": "Illumination Mode (Em Imaging)";
                "context": "brief";
            }];
            "enum": {
                "FLOOD BEAM": "FLOOD BEAM";
                "OTHER": "OTHER";
                "SPOT SCAN": "SPOT SCAN";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "MicroscopeModel": {
            "path": "em_imaging.microscope_model";
            "type": "string";
            "description": "The name of the model of microscope.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The name of the model of microscope.";
                "context": "dictionary";
            }, {
                "text": "EM Microscope Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 30;
            }];
            "enum": {
                "FEI MORGAGNI": "FEI MORGAGNI";
                "FEI POLARA 300": "FEI POLARA 300";
                "FEI TALOS ARCTICA": "FEI TALOS ARCTICA";
                "FEI TECNAI 10": "FEI TECNAI 10";
                "FEI TECNAI 12": "FEI TECNAI 12";
                "FEI TECNAI 20": "FEI TECNAI 20";
                "FEI TECNAI ARCTICA": "FEI TECNAI ARCTICA";
                "FEI TECNAI F20": "FEI TECNAI F20";
                "FEI TECNAI F30": "FEI TECNAI F30";
                "FEI TECNAI SPHERA": "FEI TECNAI SPHERA";
                "FEI TECNAI SPIRIT": "FEI TECNAI SPIRIT";
                "FEI TITAN": "FEI TITAN";
                "FEI TITAN KRIOS": "FEI TITAN KRIOS";
                "FEI/PHILIPS CM10": "FEI/PHILIPS CM10";
                "FEI/PHILIPS CM12": "FEI/PHILIPS CM12";
                "FEI/PHILIPS CM120T": "FEI/PHILIPS CM120T";
                "FEI/PHILIPS CM200FEG": "FEI/PHILIPS CM200FEG";
                "FEI/PHILIPS CM200FEG/SOPHIE": "FEI/PHILIPS CM200FEG/SOPHIE";
                "FEI/PHILIPS CM200FEG/ST": "FEI/PHILIPS CM200FEG/ST";
                "FEI/PHILIPS CM200FEG/UT": "FEI/PHILIPS CM200FEG/UT";
                "FEI/PHILIPS CM200T": "FEI/PHILIPS CM200T";
                "FEI/PHILIPS CM300FEG/HE": "FEI/PHILIPS CM300FEG/HE";
                "FEI/PHILIPS CM300FEG/ST": "FEI/PHILIPS CM300FEG/ST";
                "FEI/PHILIPS CM300FEG/T": "FEI/PHILIPS CM300FEG/T";
                "FEI/PHILIPS EM400": "FEI/PHILIPS EM400";
                "FEI/PHILIPS EM420": "FEI/PHILIPS EM420";
                "HITACHI EF2000": "HITACHI EF2000";
                "HITACHI EF3000": "HITACHI EF3000";
                "HITACHI H-9500SD": "HITACHI H-9500SD";
                "HITACHI H3000 UHVEM": "HITACHI H3000 UHVEM";
                "HITACHI H7600": "HITACHI H7600";
                "HITACHI HF2000": "HITACHI HF2000";
                "HITACHI HF3000": "HITACHI HF3000";
                "JEOL 1000EES": "JEOL 1000EES";
                "JEOL 100B": "JEOL 100B";
                "JEOL 100CX": "JEOL 100CX";
                "JEOL 1010": "JEOL 1010";
                "JEOL 1200": "JEOL 1200";
                "JEOL 1200EX": "JEOL 1200EX";
                "JEOL 1200EXII": "JEOL 1200EXII";
                "JEOL 1230": "JEOL 1230";
                "JEOL 1400": "JEOL 1400";
                "JEOL 1400/HR + YPS FEG": "JEOL 1400/HR + YPS FEG";
                "JEOL 2000EX": "JEOL 2000EX";
                "JEOL 2000EXII": "JEOL 2000EXII";
                "JEOL 2010": "JEOL 2010";
                "JEOL 2010F": "JEOL 2010F";
                "JEOL 2010HC": "JEOL 2010HC";
                "JEOL 2010HT": "JEOL 2010HT";
                "JEOL 2010UHR": "JEOL 2010UHR";
                "JEOL 2011": "JEOL 2011";
                "JEOL 2100": "JEOL 2100";
                "JEOL 2100F": "JEOL 2100F";
                "JEOL 2200FS": "JEOL 2200FS";
                "JEOL 2200FSC": "JEOL 2200FSC";
                "JEOL 3000SFF": "JEOL 3000SFF";
                "JEOL 3100FEF": "JEOL 3100FEF";
                "JEOL 3100FFC": "JEOL 3100FFC";
                "JEOL 3200FS": "JEOL 3200FS";
                "JEOL 3200FSC": "JEOL 3200FSC";
                "JEOL 4000": "JEOL 4000";
                "JEOL 4000EX": "JEOL 4000EX";
                "JEOL CRYO ARM 200": "JEOL CRYO ARM 200";
                "JEOL CRYO ARM 300": "JEOL CRYO ARM 300";
                "JEOL KYOTO-3000SFF": "JEOL KYOTO-3000SFF";
                "SIEMENS SULEIKA": "SIEMENS SULEIKA";
                "TFS GLACIOS": "TFS GLACIOS";
                "TFS KRIOS": "TFS KRIOS";
                "TFS TALOS": "TFS TALOS";
                "TFS TALOS F200C": "TFS TALOS F200C";
                "TFS TALOS L120C": "TFS TALOS L120C";
                "TFS TITAN THEMIS": "TFS TITAN THEMIS";
                "TFS TUNDRA": "TFS TUNDRA";
                "ZEISS LEO912": "ZEISS LEO912";
                "ZEISS LIBRA120PLUS": "ZEISS LIBRA120PLUS";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Mode": {
            "path": "em_imaging.mode";
            "type": "string";
            "description": "The mode of imaging.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The mode of imaging.";
                "context": "dictionary";
            }, {
                "text": "Mode (Em Imaging)";
                "context": "brief";
            }];
            "enum": {
                "4D-STEM": "4D-STEM";
                "BRIGHT FIELD": "BRIGHT FIELD";
                "DARK FIELD": "DARK FIELD";
                "DIFFRACTION": "DIFFRACTION";
                "OTHER": "OTHER";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "NominalCs": {
            "path": "em_imaging.nominal_cs";
            "type": "number";
            "description": "The spherical aberration coefficient (Cs) in millimeters,\n of the objective lens.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The spherical aberration coefficient (Cs) in millimeters,\n of the objective lens.";
                "context": "dictionary";
            }, {
                "text": "Nominal Cs (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 6.3;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NominalDefocusMax": {
            "path": "em_imaging.nominal_defocus_max";
            "type": "number";
            "description": "The maximum defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
                "context": "dictionary";
            }, {
                "text": "Nominal Defocus Max (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 50000;
            "rcsb_current_minimum_value": -25000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NominalDefocusMin": {
            "path": "em_imaging.nominal_defocus_min";
            "type": "number";
            "description": "The minimum defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum defocus value of the objective lens (in nanometers) used\n to obtain the recorded images. Negative values refer to overfocus.";
                "context": "dictionary";
            }, {
                "text": "Nominal Defocus Min (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 16000;
            "rcsb_current_minimum_value": -15000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NominalMagnification": {
            "path": "em_imaging.nominal_magnification";
            "type": "integer";
            "description": "The magnification indicated by the microscope readout.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The magnification indicated by the microscope readout.";
                "context": "dictionary";
            }, {
                "text": "Nominal Magnification (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 310000;
            "rcsb_current_minimum_value": 2250;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RecordingTemperatureMaximum": {
            "path": "em_imaging.recording_temperature_maximum";
            "type": "number";
            "description": "The specimen temperature maximum (kelvin) for the duration\n of imaging.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The specimen temperature maximum (kelvin) for the duration\n of imaging.";
                "context": "dictionary";
            }, {
                "text": "Recording Temperature Maximum (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 298;
            "rcsb_current_minimum_value": 4.2;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RecordingTemperatureMinimum": {
            "path": "em_imaging.recording_temperature_minimum";
            "type": "number";
            "description": "The specimen temperature minimum (kelvin) for the duration\n of imaging.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The specimen temperature minimum (kelvin) for the duration\n of imaging.";
                "context": "dictionary";
            }, {
                "text": "Recording Temperature Minimum (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 293;
            "rcsb_current_minimum_value": 4.2;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ResidualTilt": {
            "path": "em_imaging.residual_tilt";
            "type": "number";
            "description": "Residual tilt of the electron beam (in miliradians)";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Residual tilt of the electron beam (in miliradians)";
                "context": "dictionary";
            }, {
                "text": "Residual Tilt (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 350;
            "rcsb_current_minimum_value": 0.001;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SpecimenHolderModel": {
            "path": "em_imaging.specimen_holder_model";
            "type": "string";
            "description": "The name of the model of specimen holder used during imaging.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The name of the model of specimen holder used during imaging.";
                "context": "dictionary";
            }, {
                "text": "Specimen Holder Model (Em Imaging)";
                "context": "brief";
            }];
            "enum": {
                "FEI TITAN KRIOS AUTOGRID HOLDER": "FEI TITAN KRIOS AUTOGRID HOLDER";
                "FISCHIONE 2550": "FISCHIONE 2550";
                "FISCHIONE INSTRUMENTS DUAL AXIS TOMOGRAPHY HOLDER": "FISCHIONE INSTRUMENTS DUAL AXIS TOMOGRAPHY HOLDER";
                "GATAN 626 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER": "GATAN 626 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER";
                "GATAN 910 MULTI-SPECIMEN SINGLE TILT CRYO TRANSFER HOLDER": "GATAN 910 MULTI-SPECIMEN SINGLE TILT CRYO TRANSFER HOLDER";
                "GATAN 914 HIGH TILT LIQUID NITROGEN CRYO TRANSFER TOMOGRAPHY HOLDER": "GATAN 914 HIGH TILT LIQUID NITROGEN CRYO TRANSFER TOMOGRAPHY HOLDER";
                "GATAN 915 DOUBLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER": "GATAN 915 DOUBLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER";
                "GATAN CHDT 3504 DOUBLE TILT HIGH RESOLUTION NITROGEN COOLING HOLDER": "GATAN CHDT 3504 DOUBLE TILT HIGH RESOLUTION NITROGEN COOLING HOLDER";
                "GATAN CT3500 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER": "GATAN CT3500 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER";
                "GATAN CT3500TR SINGLE TILT ROTATION LIQUID NITROGEN CRYO TRANSFER HOLDER": "GATAN CT3500TR SINGLE TILT ROTATION LIQUID NITROGEN CRYO TRANSFER HOLDER";
                "GATAN ELSA 698 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER": "GATAN ELSA 698 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER";
                "GATAN HC 3500 SINGLE TILT HEATING/NITROGEN COOLING HOLDER": "GATAN HC 3500 SINGLE TILT HEATING/NITROGEN COOLING HOLDER";
                "GATAN HCHDT 3010 DOUBLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER": "GATAN HCHDT 3010 DOUBLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER";
                "GATAN HCHST 3008 SINGLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER": "GATAN HCHST 3008 SINGLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER";
                "GATAN HELIUM": "GATAN HELIUM";
                "GATAN LIQUID NITROGEN": "GATAN LIQUID NITROGEN";
                "GATAN UHRST 3500 SINGLE TILT ULTRA HIGH RESOLUTION NITROGEN COOLING HOLDER": "GATAN UHRST 3500 SINGLE TILT ULTRA HIGH RESOLUTION NITROGEN COOLING HOLDER";
                "GATAN ULTDT ULTRA LOW TEMPERATURE DOUBLE TILT HELIUM COOLING HOLDER": "GATAN ULTDT ULTRA LOW TEMPERATURE DOUBLE TILT HELIUM COOLING HOLDER";
                "GATAN ULTST ULTRA LOW TEMPERATURE SINGLE TILT HELIUM COOLING HOLDER": "GATAN ULTST ULTRA LOW TEMPERATURE SINGLE TILT HELIUM COOLING HOLDER";
                "HOME BUILD": "HOME BUILD";
                "JEOL": "JEOL";
                "JEOL 3200FSC CRYOHOLDER": "JEOL 3200FSC CRYOHOLDER";
                "JEOL CRYOSPECPORTER": "JEOL CRYOSPECPORTER";
                "OTHER": "OTHER";
                "PHILIPS ROTATION HOLDER": "PHILIPS ROTATION HOLDER";
                "SIDE ENTRY, EUCENTRIC": "SIDE ENTRY, EUCENTRIC";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Temperature": {
            "path": "em_imaging.temperature";
            "type": "number";
            "description": "The mean specimen stage temperature (in kelvin) during imaging\n in the microscope.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The mean specimen stage temperature (in kelvin) during imaging\n in the microscope.";
                "context": "dictionary";
            }, {
                "text": "Temperature (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 300;
            "rcsb_current_minimum_value": 4;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "TiltAngleMax": {
            "path": "em_imaging.tilt_angle_max";
            "type": "number";
            "description": "The maximum angle at which the specimen was tilted to obtain\n recorded images.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum angle at which the specimen was tilted to obtain\n recorded images.";
                "context": "dictionary";
            }, {
                "text": "Tilt Angle Max (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 79;
            "rcsb_current_minimum_value": -9999;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "TiltAngleMin": {
            "path": "em_imaging.tilt_angle_min";
            "type": "number";
            "description": "The minimum angle at which the specimen was tilted to obtain\n recorded images.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum angle at which the specimen was tilted to obtain\n recorded images.";
                "context": "dictionary";
            }, {
                "text": "Tilt Angle Min (Em Imaging)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 60;
            "rcsb_current_minimum_value": -9999;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmParticleSelection": {
        "NumParticlesSelected": {
            "path": "em_particle_selection.num_particles_selected";
            "type": "integer";
            "description": "The number of particles selected from the projection set of images.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of particles selected from the projection set of images.";
                "context": "dictionary";
            }, {
                "text": "Num Particles Selected (Em Particle Selection)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 150000000;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EmSingleParticleEntity": {
        "PointSymmetry": {
            "path": "em_single_particle_entity.point_symmetry";
            "type": "string";
            "description": "Point symmetry symbol, either Cn, Dn, T, O, or I";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Point symmetry symbol, either Cn, Dn, T, O, or I";
                "context": "dictionary";
            }, {
                "text": "EM Point Symmetry Imposed";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 45;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmSoftware": {
        "Category": {
            "path": "em_software.category";
            "type": "string";
            "description": "The purpose of the software.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The purpose of the software.";
                "context": "dictionary";
            }, {
                "text": "Category (Em Software)";
                "context": "brief";
            }];
            "enum": {
                "CLASSIFICATION": "CLASSIFICATION";
                "CRYSTALLOGRAPHY MERGING": "CRYSTALLOGRAPHY MERGING";
                "CTF CORRECTION": "CTF CORRECTION";
                "DIFFRACTION INDEXING": "DIFFRACTION INDEXING";
                "EWALD SPHERE CORRECTION": "EWALD SPHERE CORRECTION";
                "FINAL EULER ASSIGNMENT": "FINAL EULER ASSIGNMENT";
                "IMAGE ACQUISITION": "IMAGE ACQUISITION";
                "INITIAL EULER ASSIGNMENT": "INITIAL EULER ASSIGNMENT";
                "LATTICE DISTORTION CORRECTION": "LATTICE DISTORTION CORRECTION";
                "LAYERLINE INDEXING": "LAYERLINE INDEXING";
                "MASKING": "MASKING";
                "MODEL FITTING": "MODEL FITTING";
                "MODEL REFINEMENT": "MODEL REFINEMENT";
                "MOLECULAR REPLACEMENT": "MOLECULAR REPLACEMENT";
                "OTHER": "OTHER";
                "PARTICLE SELECTION": "PARTICLE SELECTION";
                "RECONSTRUCTION": "RECONSTRUCTION";
                "SERIES ALIGNMENT": "SERIES ALIGNMENT";
                "SYMMETRY DETERMINATION": "SYMMETRY DETERMINATION";
                "VOLUME SELECTION": "VOLUME SELECTION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "em_software.name";
            "type": "string";
            "description": "The name of the software package used, e.g., RELION.  Depositors are strongly\n  encouraged to provide a value in this field.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The name of the software package used, e.g., RELION.  Depositors are strongly\n  encouraged to provide a value in this field.";
                "context": "dictionary";
            }, {
                "text": "EM Software";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 20;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "EmSpecimen": {
        "Concentration": {
            "path": "em_specimen.concentration";
            "type": "number";
            "description": "The concentration (in milligrams per milliliter, mg/ml)\n of the complex in the sample.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The concentration (in milligrams per milliliter, mg/ml)\n of the complex in the sample.";
                "context": "dictionary";
            }, {
                "text": "Concentration (Em Specimen)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1000000;
            "rcsb_current_minimum_value": 0.000075;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ShadowingApplied": {
            "path": "em_specimen.shadowing_applied";
            "type": "string";
            "description": "'YES' indicates that the specimen has been shadowed.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "'YES' indicates that the specimen has been shadowed.";
                "context": "dictionary";
            }, {
                "text": "Shadowing Applied (Em Specimen)";
                "context": "brief";
            }];
            "enum": {
                "NO": "NO";
                "YES": "YES";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "StainingApplied": {
            "path": "em_specimen.staining_applied";
            "type": "string";
            "description": "'YES' indicates that the specimen has been stained.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "'YES' indicates that the specimen has been stained.";
                "context": "dictionary";
            }, {
                "text": "Staining Applied (Em Specimen)";
                "context": "brief";
            }];
            "enum": {
                "NO": "NO";
                "YES": "YES";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "VitrificationApplied": {
            "path": "em_specimen.vitrification_applied";
            "type": "string";
            "description": "'YES' indicates that the specimen was vitrified by cryopreservation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "'YES' indicates that the specimen was vitrified by cryopreservation.";
                "context": "dictionary";
            }, {
                "text": "Vitrification Applied (Em Specimen)";
                "context": "brief";
            }];
            "enum": {
                "NO": "NO";
                "YES": "YES";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmStaining": {
        "Details": {
            "path": "em_staining.details";
            "type": "string";
            "description": "Staining procedure used in the specimen preparation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Staining procedure used in the specimen preparation.";
                "context": "dictionary";
            }, {
                "text": "EM Staining Details";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Material": {
            "path": "em_staining.material";
            "type": "string";
            "description": "The staining  material.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The staining  material.";
                "context": "dictionary";
            }, {
                "text": "EM Staining Material";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 50;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "em_staining.type";
            "type": "string";
            "description": "type of staining";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "type of staining";
                "context": "dictionary";
            }, {
                "text": "EM Staining Type";
                "context": "brief";
            }];
            "enum": {
                "NEGATIVE": "NEGATIVE";
                "NONE": "NONE";
                "POSITIVE": "POSITIVE";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "EmVitrification": {
        "ChamberTemperature": {
            "path": "em_vitrification.chamber_temperature";
            "type": "number";
            "description": "The temperature (in kelvin) of the sample just prior to vitrification.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The temperature (in kelvin) of the sample just prior to vitrification.";
                "context": "dictionary";
            }, {
                "text": "Chamber Temperature (Em Vitrification)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 375.15;
            "rcsb_current_minimum_value": 4;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CryogenName": {
            "path": "em_vitrification.cryogen_name";
            "type": "string";
            "description": "This is the name of the cryogen.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This is the name of the cryogen.";
                "context": "dictionary";
            }, {
                "text": "Cryogen Name (Em Vitrification)";
                "context": "brief";
            }];
            "enum": {
                "ETHANE": "ETHANE";
                "ETHANE-PROPANE": "ETHANE-PROPANE";
                "FREON 12": "FREON 12";
                "FREON 22": "FREON 22";
                "HELIUM": "HELIUM";
                "METHANE": "METHANE";
                "NITROGEN": "NITROGEN";
                "OTHER": "OTHER";
                "PROPANE": "PROPANE";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Humidity": {
            "path": "em_vitrification.humidity";
            "type": "number";
            "description": "Relative humidity (%) of air surrounding the specimen just prior to\nvitrification.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Relative humidity (%) of air surrounding the specimen just prior to\nvitrification.";
                "context": "dictionary";
            }, {
                "text": "Humidity (Em Vitrification)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Instrument": {
            "path": "em_vitrification.instrument";
            "type": "string";
            "description": "The type of instrument used in the vitrification process.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The type of instrument used in the vitrification process.";
                "context": "dictionary";
            }, {
                "text": "EM Vitrification Instrument";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "EM Method Details";
                "priority_order": 25;
            }];
            "enum": {
                "CRYOSOL VITROJET": "CRYOSOL VITROJET";
                "EMS-002 RAPID IMMERSION FREEZER": "EMS-002 RAPID IMMERSION FREEZER";
                "FEI VITROBOT MARK I": "FEI VITROBOT MARK I";
                "FEI VITROBOT MARK II": "FEI VITROBOT MARK II";
                "FEI VITROBOT MARK III": "FEI VITROBOT MARK III";
                "FEI VITROBOT MARK IV": "FEI VITROBOT MARK IV";
                "GATAN CRYOPLUNGE 3": "GATAN CRYOPLUNGE 3";
                "HOMEMADE PLUNGER": "HOMEMADE PLUNGER";
                "LEICA EM CPC": "LEICA EM CPC";
                "LEICA EM GP": "LEICA EM GP";
                "LEICA KF80": "LEICA KF80";
                "LEICA PLUNGER": "LEICA PLUNGER";
                "REICHERT-JUNG PLUNGER": "REICHERT-JUNG PLUNGER";
                "SPOTITON": "SPOTITON";
                "SPT LABTECH CHAMELEON": "SPT LABTECH CHAMELEON";
                "ZEISS PLUNGE FREEZER CRYOBOX": "ZEISS PLUNGE FREEZER CRYOBOX";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "em_vitrification.method";
            "type": "string";
            "description": "The procedure for vitrification.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The procedure for vitrification.";
                "context": "dictionary";
            }, {
                "text": "Method (Em Vitrification)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Temp": {
            "path": "em_vitrification.temp";
            "type": "number";
            "description": "The vitrification temperature (in kelvin), e.g.,\n  temperature of the plunge instrument cryogen bath.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The vitrification temperature (in kelvin), e.g.,\n  temperature of the plunge instrument cryogen bath.";
                "context": "dictionary";
            }, {
                "text": "Temp (Em Vitrification)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 277;
            "rcsb_current_minimum_value": 76;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Exptl": {
        "CrystalsNumber": {
            "path": "exptl.crystals_number";
            "type": "integer";
            "description": "The total number of crystals used in the  measurement of\n intensities.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The total number of crystals used in the  measurement of\n intensities.";
                "context": "dictionary";
            }, {
                "text": "Indicate the number of crystals used in your experiments";
                "context": "deposition";
            }, {
                "text": "Crystals Number (Exptl)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1029868;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Details": {
            "path": "exptl.details";
            "type": "string";
            "description": "Any special information about the experimental work prior to the\n intensity measurement. See also _exptl_crystal.preparation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Any special information about the experimental work prior to the\n intensity measurement. See also _exptl_crystal.preparation.";
                "context": "dictionary";
            }, {
                "text": "Details (Exptl)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "exptl.method";
            "type": "string";
            "description": "The method used in the experiment.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_enum_annotated": [{
                "value": "ELECTRON CRYSTALLOGRAPHY";
            }, {
                "value": "ELECTRON MICROSCOPY";
            }, {
                "value": "EPR";
                "detail": "EPR only as a supporting method";
            }, {
                "value": "FIBER DIFFRACTION";
            }, {
                "value": "FLUORESCENCE TRANSFER";
                "detail": "FLUORESCENCE TRANSFER only as a supporting method";
            }, {
                "value": "INFRARED SPECTROSCOPY";
                "detail": "IR and FTIR only as supporting methods";
            }, {
                "value": "NEUTRON DIFFRACTION";
            }, {
                "value": "POWDER DIFFRACTION";
            }, {
                "value": "SOLID-STATE NMR";
            }, {
                "value": "SOLUTION NMR";
            }, {
                "value": "SOLUTION SCATTERING";
            }, {
                "value": "THEORETICAL MODEL";
                "detail": "THEORETICAL MODEL only as a supporting method";
            }, {
                "value": "X-RAY DIFFRACTION";
            }];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The method used in the experiment.";
                "context": "dictionary";
            }, {
                "text": "The method(s) used in the experiment";
                "context": "deposition";
            }, {
                "text": "Experimental Method";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 5;
            }];
            "enum": {
                "ELECTRON CRYSTALLOGRAPHY": "ELECTRON CRYSTALLOGRAPHY";
                "ELECTRON MICROSCOPY": "ELECTRON MICROSCOPY";
                "EPR": "EPR";
                "FIBER DIFFRACTION": "FIBER DIFFRACTION";
                "FLUORESCENCE TRANSFER": "FLUORESCENCE TRANSFER";
                "INFRARED SPECTROSCOPY": "INFRARED SPECTROSCOPY";
                "NEUTRON DIFFRACTION": "NEUTRON DIFFRACTION";
                "POWDER DIFFRACTION": "POWDER DIFFRACTION";
                "SOLID-STATE NMR": "SOLID-STATE NMR";
                "SOLUTION NMR": "SOLUTION NMR";
                "SOLUTION SCATTERING": "SOLUTION SCATTERING";
                "THEORETICAL MODEL": "THEORETICAL MODEL";
                "X-RAY DIFFRACTION": "X-RAY DIFFRACTION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "ExptlCrystal": {
        "DensityMatthews": {
            "path": "exptl_crystal.density_Matthews";
            "type": "number";
            "description": "The density of the crystal, expressed as the ratio of the\n volume of the asymmetric unit to the molecular mass of a\n monomer of the structure, in units of angstroms^3^ per dalton.\n\n Ref: Matthews, B. W. (1968). J. Mol. Biol. 33, 491-497.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The density of the crystal, expressed as the ratio of the\n volume of the asymmetric unit to the molecular mass of a\n monomer of the structure, in units of angstroms^3^ per dalton.\n\n Ref: Matthews, B. W. (1968). J. Mol. Biol. 33, 491-497.";
                "context": "dictionary";
            }, {
                "text": "Vm/M : Vm= unit cell volume  and  M= total molecular weight of molecules/cell";
                "context": "deposition";
            }, {
                "text": "Density (Matthews)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 5;
            }];
            "rcsb_current_maximum_value": 45.14;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DensityMeas": {
            "path": "exptl_crystal.density_meas";
            "type": "number";
            "description": "Density values measured using standard chemical and physical\n methods. The units are megagrams per cubic metre (grams per\n cubic centimetre).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Density values measured using standard chemical and physical\n methods. The units are megagrams per cubic metre (grams per\n cubic centimetre).";
                "context": "dictionary";
            }, {
                "text": "Density Meas (Exptl Crystal)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 2572802.25;
            "rcsb_current_minimum_value": 0.0003158;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DensityPercentSol": {
            "path": "exptl_crystal.density_percent_sol";
            "type": "number";
            "description": "Density value P calculated from the crystal cell and contents,\n expressed as per cent solvent.\n\n P = 1 - (1.23 N MMass) / V\n\n N     = the number of molecules in the unit cell\n MMass = the molecular mass of each molecule (gm/mole)\n V     = the volume of the unit cell (A^3^)\n 1.23  = a conversion factor evaluated as:\n\n         (0.74 cm^3^/g) (10^24^ A^3^/cm^3^)\n         --------------------------------------\n              (6.02*10^23^) molecules/mole\n\n         where 0.74 is an assumed value for the partial specific\n         volume of the molecule";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Density value P calculated from the crystal cell and contents,\n expressed as per cent solvent.\n\n P = 1 - (1.23 N MMass) / V\n\n N     = the number of molecules in the unit cell\n MMass = the molecular mass of each molecule (gm/mole)\n V     = the volume of the unit cell (A^3^)\n 1.23  = a conversion factor evaluated as:\n\n         (0.74 cm^3^/g) (10^24^ A^3^/cm^3^)\n         --------------------------------------\n              (6.02*10^23^) molecules/mole\n\n         where 0.74 is an assumed value for the partial specific\n         volume of the molecule";
                "context": "dictionary";
            }, {
                "text": "Percent solvent content of cell";
                "context": "deposition";
            }, {
                "text": "Density (% solvent)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 10;
            }];
            "rcsb_current_maximum_value": 96.06;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxMosaicity": {
            "path": "exptl_crystal.pdbx_mosaicity";
            "type": "number";
            "description": "Isotropic approximation of the distribution of mis-orientation angles\nspecified in degrees of all the mosaic domain blocks in the crystal,\nrepresented as a standard deviation. Here, a mosaic block is a set of\ncontiguous unit cells assumed to be perfectly aligned. Lower mosaicity\nindicates better ordered crystals. See for example:\n\nNave, C. (1998). Acta Cryst. D54, 848-853.\n\nNote that many software packages estimate the mosaic rotation distribution\ndifferently and may combine several physical properties of the experiment\ninto a single mosaic term. This term will help fit the modeled spots\nto the observed spots without necessarily being directly related to the\nphysics of the crystal itself.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Isotropic approximation of the distribution of mis-orientation angles\nspecified in degrees of all the mosaic domain blocks in the crystal,\nrepresented as a standard deviation. Here, a mosaic block is a set of\ncontiguous unit cells assumed to be perfectly aligned. Lower mosaicity\nindicates better ordered crystals. See for example:\n\nNave, C. (1998). Acta Cryst. D54, 848-853.\n\nNote that many software packages estimate the mosaic rotation distribution\ndifferently and may combine several physical properties of the experiment\ninto a single mosaic term. This term will help fit the modeled spots\nto the observed spots without necessarily being directly related to the\nphysics of the crystal itself.";
                "context": "dictionary";
            }, {
                "text": "Mosaicity (Exptl Crystal)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 20.715;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxMosaicityEsd": {
            "path": "exptl_crystal.pdbx_mosaicity_esd";
            "type": "number";
            "description": "The uncertainty in the mosaicity estimate for the crystal.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The uncertainty in the mosaicity estimate for the crystal.";
                "context": "dictionary";
            }, {
                "text": "Mosaicity Esd (Exptl Crystal)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 15.975;
            "rcsb_current_minimum_value": 0.002;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "ExptlCrystalGrow": {
        "Method": {
            "path": "exptl_crystal_grow.method";
            "type": "string";
            "description": "The method used to grow the crystals.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The method used to grow the crystals.";
                "context": "dictionary";
            }, {
                "text": "Crystallization Method";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 25;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PH": {
            "path": "exptl_crystal_grow.pH";
            "type": "number";
            "description": "The pH at which the crystal was grown. If more than one pH was\n employed during the crystallization process, the final pH should\n be noted here and the protocol involving multiple pH values\n should be described in _exptl_crystal_grow.details.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The pH at which the crystal was grown. If more than one pH was\n employed during the crystallization process, the final pH should\n be noted here and the protocol involving multiple pH values\n should be described in _exptl_crystal_grow.details.";
                "context": "dictionary";
            }, {
                "text": "Provide the pH of the buffer used in crystallization";
                "context": "deposition";
            }, {
                "text": "pH";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 12;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxDetails": {
            "path": "exptl_crystal_grow.pdbx_details";
            "type": "string";
            "description": "Text description of crystal growth procedure.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Text description of crystal growth procedure.";
                "context": "dictionary";
            }, {
                "text": "Crystallization Details";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 30;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Temp": {
            "path": "exptl_crystal_grow.temp";
            "type": "number";
            "description": "The temperature in kelvins at which the crystal was grown.\n If more than one temperature was employed during the\n crystallization process, the final temperature should be noted\n here and the protocol  involving multiple temperatures should be\n described in _exptl_crystal_grow.details.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The temperature in kelvins at which the crystal was grown.\n If more than one temperature was employed during the\n crystallization process, the final temperature should be noted\n here and the protocol  involving multiple temperatures should be\n described in _exptl_crystal_grow.details.";
                "context": "dictionary";
            }, {
                "text": "Temperature";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 333.15;
            "rcsb_current_minimum_value": 100;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "PdbxSgProject": {
        "FullNameOfCenter": {
            "path": "pdbx_SG_project.full_name_of_center";
            "type": "string";
            "description": "The value identifies the full name of center.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "Accelerated Technologies Center for Gene to 3D Structure";
                "detail": "ATCG3D";
            }, {
                "value": "Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions";
                "detail": "CELLMAT";
            }, {
                "value": "Atoms-to-Animals: The Immune Function Network";
                "detail": "IFN";
            }, {
                "value": "Bacterial targets at IGS-CNRS, France";
                "detail": "BIGS";
            }, {
                "value": "Berkeley Structural Genomics Center";
                "detail": "BSGC";
            }, {
                "value": "Center for Eukaryotic Structural Genomics";
                "detail": "CESG";
            }, {
                "value": "Center for High-Throughput Structural Biology";
                "detail": "CHTSB";
            }, {
                "value": "Center for Membrane Proteins of Infectious Diseases";
                "detail": "MPID";
            }, {
                "value": "Center for Structural Biology of Infectious Diseases";
                "detail": "CSBID";
            }, {
                "value": "Center for Structural Genomics of Infectious Diseases";
                "detail": "CSGID";
            }, {
                "value": "Center for Structures of Membrane Proteins";
                "detail": "CSMP";
            }, {
                "value": "Center for the X-ray Structure Determination of Human Transporters";
                "detail": "TransportPDB";
            }, {
                "value": "Chaperone-Enabled Studies of Epigenetic Regulation Enzymes";
                "detail": "CEBS";
            }, {
                "value": "Enzyme Discovery for Natural Product Biosynthesis";
                "detail": "NatPro";
            }, {
                "value": "GPCR Network";
                "detail": "GPCR";
            }, {
                "value": "Integrated Center for Structure and Function Innovation";
                "detail": "ISFI";
            }, {
                "value": "Israel Structural Proteomics Center";
                "detail": "ISPC";
            }, {
                "value": "Joint Center for Structural Genomics";
                "detail": "JCSG";
            }, {
                "value": "Marseilles Structural Genomics Program @ AFMB";
                "detail": "MSGP";
            }, {
                "value": "Medical Structural Genomics of Pathogenic Protozoa";
                "detail": "MSGPP";
            }, {
                "value": "Membrane Protein Structural Biology Consortium";
                "detail": "MPSBC";
            }, {
                "value": "Membrane Protein Structures by Solution NMR";
                "detail": "MPSbyNMR";
            }, {
                "value": "Midwest Center for Macromolecular Research";
                "detail": "MCMR";
            }, {
                "value": "Midwest Center for Structural Genomics";
                "detail": "MCSG";
            }, {
                "value": "Mitochondrial Protein Partnership";
                "detail": "MPP";
            }, {
                "value": "Montreal-Kingston Bacterial Structural Genomics Initiative";
                "detail": "BSGI";
            }, {
                "value": "Mycobacterium Tuberculosis Structural Proteomics Project";
                "detail": "XMTB";
            }, {
                "value": "New York Consortium on Membrane Protein Structure";
                "detail": "NYCOMPS";
            }, {
                "value": "New York SGX Research Center for Structural Genomics";
                "detail": "NYSGXRC";
            }, {
                "value": "New York Structural GenomiX Research Consortium";
                "detail": "NYSGXRC";
            }, {
                "value": "New York Structural Genomics Research Consortium";
                "detail": "NYSGRC";
            }, {
                "value": "Northeast Structural Genomics Consortium";
                "detail": "NESG";
            }, {
                "value": "Nucleocytoplasmic Transport: a Target for Cellular Control";
                "detail": "NPCXstals";
            }, {
                "value": "Ontario Centre for Structural Proteomics";
                "detail": "OCSP";
            }, {
                "value": "Oxford Protein Production Facility";
                "detail": "OPPF";
            }, {
                "value": "Paris-Sud Yeast Structural Genomics";
                "detail": "YSG";
            }, {
                "value": "Partnership for Nuclear Receptor Signaling Code Biology";
                "detail": "NHRs";
            }, {
                "value": "Partnership for Stem Cell Biology";
                "detail": "STEMCELL";
            }, {
                "value": "Partnership for T-Cell Biology";
                "detail": "TCELL";
            }, {
                "value": "Program for the Characterization of Secreted Effector Proteins";
                "detail": "PCSEP";
            }, {
                "value": "Protein Structure Factory";
                "detail": "PSF";
            }, {
                "value": "RIKEN Structural Genomics/Proteomics Initiative";
                "detail": "RSGI";
            }, {
                "value": "Scottish Structural Proteomics Facility";
                "detail": "SSPF";
            }, {
                "value": "Seattle Structural Genomics Center for Infectious Disease";
                "detail": "SSGCID";
            }, {
                "value": "South Africa Structural Targets Annotation Database";
                "detail": "SASTAD";
            }, {
                "value": "Southeast Collaboratory for Structural Genomics";
                "detail": "SECSG";
            }, {
                "value": "Structural Genomics Consortium";
                "detail": "SGC";
            }, {
                "value": "Structural Genomics Consortium for Research on Gene Expression";
                "detail": "SGCGES";
            }, {
                "value": "Structural Genomics of Pathogenic Protozoa Consortium";
                "detail": "SGPP";
            }, {
                "value": "Structural Proteomics in Europe";
                "detail": "SPINE";
            }, {
                "value": "Structural Proteomics in Europe 2";
                "detail": "SPINE-2";
            }, {
                "value": "Structure 2 Function Project";
                "detail": "S2F";
            }, {
                "value": "Structure, Dynamics and Activation Mechanisms of Chemokine Receptors";
                "detail": "CHSAM";
            }, {
                "value": "Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes";
                "detail": "UC4CDI";
            }, {
                "value": "Structure-Function Studies of Tight Junction Membrane Proteins";
                "detail": "TJMP";
            }, {
                "value": "Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors";
                "detail": "MTBI";
            }, {
                "value": "TB Structural Genomics Consortium";
                "detail": "TBSGC";
            }, {
                "value": "Transcontinental EM Initiative for Membrane Protein Structure";
                "detail": "TEMIMPS";
            }, {
                "value": "Transmembrane Protein Center";
                "detail": "TMPC";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value identifies the full name of center.";
                "context": "dictionary";
            }, {
                "text": "The full name of Structural Genomics center";
                "context": "deposition";
            }, {
                "text": "Structural Genomics Project Center Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 45;
            }];
            "enum": {
                "Accelerated Technologies Center for Gene to 3D Structure": "Accelerated Technologies Center for Gene to 3D Structure";
                "Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions": "Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions";
                "Atoms-to-Animals: The Immune Function Network": "Atoms-to-Animals: The Immune Function Network";
                "Bacterial targets at IGS-CNRS, France": "Bacterial targets at IGS-CNRS, France";
                "Berkeley Structural Genomics Center": "Berkeley Structural Genomics Center";
                "Center for Eukaryotic Structural Genomics": "Center for Eukaryotic Structural Genomics";
                "Center for High-Throughput Structural Biology": "Center for High-Throughput Structural Biology";
                "Center for Membrane Proteins of Infectious Diseases": "Center for Membrane Proteins of Infectious Diseases";
                "Center for Structural Biology of Infectious Diseases": "Center for Structural Biology of Infectious Diseases";
                "Center for Structural Genomics of Infectious Diseases": "Center for Structural Genomics of Infectious Diseases";
                "Center for Structures of Membrane Proteins": "Center for Structures of Membrane Proteins";
                "Center for the X-ray Structure Determination of Human Transporters": "Center for the X-ray Structure Determination of Human Transporters";
                "Chaperone-Enabled Studies of Epigenetic Regulation Enzymes": "Chaperone-Enabled Studies of Epigenetic Regulation Enzymes";
                "Enzyme Discovery for Natural Product Biosynthesis": "Enzyme Discovery for Natural Product Biosynthesis";
                "GPCR Network": "GPCR Network";
                "Integrated Center for Structure and Function Innovation": "Integrated Center for Structure and Function Innovation";
                "Israel Structural Proteomics Center": "Israel Structural Proteomics Center";
                "Joint Center for Structural Genomics": "Joint Center for Structural Genomics";
                "Marseilles Structural Genomics Program @ AFMB": "Marseilles Structural Genomics Program @ AFMB";
                "Medical Structural Genomics of Pathogenic Protozoa": "Medical Structural Genomics of Pathogenic Protozoa";
                "Membrane Protein Structural Biology Consortium": "Membrane Protein Structural Biology Consortium";
                "Membrane Protein Structures by Solution NMR": "Membrane Protein Structures by Solution NMR";
                "Midwest Center for Macromolecular Research": "Midwest Center for Macromolecular Research";
                "Midwest Center for Structural Genomics": "Midwest Center for Structural Genomics";
                "Mitochondrial Protein Partnership": "Mitochondrial Protein Partnership";
                "Montreal-Kingston Bacterial Structural Genomics Initiative": "Montreal-Kingston Bacterial Structural Genomics Initiative";
                "Mycobacterium Tuberculosis Structural Proteomics Project": "Mycobacterium Tuberculosis Structural Proteomics Project";
                "New York Consortium on Membrane Protein Structure": "New York Consortium on Membrane Protein Structure";
                "New York SGX Research Center for Structural Genomics": "New York SGX Research Center for Structural Genomics";
                "New York Structural GenomiX Research Consortium": "New York Structural GenomiX Research Consortium";
                "New York Structural Genomics Research Consortium": "New York Structural Genomics Research Consortium";
                "Northeast Structural Genomics Consortium": "Northeast Structural Genomics Consortium";
                "Nucleocytoplasmic Transport: a Target for Cellular Control": "Nucleocytoplasmic Transport: a Target for Cellular Control";
                "Ontario Centre for Structural Proteomics": "Ontario Centre for Structural Proteomics";
                "Oxford Protein Production Facility": "Oxford Protein Production Facility";
                "Paris-Sud Yeast Structural Genomics": "Paris-Sud Yeast Structural Genomics";
                "Partnership for Nuclear Receptor Signaling Code Biology": "Partnership for Nuclear Receptor Signaling Code Biology";
                "Partnership for Stem Cell Biology": "Partnership for Stem Cell Biology";
                "Partnership for T-Cell Biology": "Partnership for T-Cell Biology";
                "Program for the Characterization of Secreted Effector Proteins": "Program for the Characterization of Secreted Effector Proteins";
                "Protein Structure Factory": "Protein Structure Factory";
                "RIKEN Structural Genomics/Proteomics Initiative": "RIKEN Structural Genomics/Proteomics Initiative";
                "Scottish Structural Proteomics Facility": "Scottish Structural Proteomics Facility";
                "Seattle Structural Genomics Center for Infectious Disease": "Seattle Structural Genomics Center for Infectious Disease";
                "South Africa Structural Targets Annotation Database": "South Africa Structural Targets Annotation Database";
                "Southeast Collaboratory for Structural Genomics": "Southeast Collaboratory for Structural Genomics";
                "Structural Genomics Consortium": "Structural Genomics Consortium";
                "Structural Genomics Consortium for Research on Gene Expression": "Structural Genomics Consortium for Research on Gene Expression";
                "Structural Genomics of Pathogenic Protozoa Consortium": "Structural Genomics of Pathogenic Protozoa Consortium";
                "Structural Proteomics in Europe": "Structural Proteomics in Europe";
                "Structural Proteomics in Europe 2": "Structural Proteomics in Europe 2";
                "Structure 2 Function Project": "Structure 2 Function Project";
                "Structure, Dynamics and Activation Mechanisms of Chemokine Receptors": "Structure, Dynamics and Activation Mechanisms of Chemokine Receptors";
                "Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes": "Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes";
                "Structure-Function Studies of Tight Junction Membrane Proteins": "Structure-Function Studies of Tight Junction Membrane Proteins";
                "Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors": "Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors";
                "TB Structural Genomics Consortium": "TB Structural Genomics Consortium";
                "Transcontinental EM Initiative for Membrane Protein Structure": "Transcontinental EM Initiative for Membrane Protein Structure";
                "Transmembrane Protein Center": "Transmembrane Protein Center";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "InitialOfCenter": {
            "path": "pdbx_SG_project.initial_of_center";
            "type": "string";
            "description": "The value identifies the full name of center.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "ATCG3D";
                "detail": "Accelerated Technologies Center for Gene to 3D Structure";
            }, {
                "value": "BIGS";
                "detail": "Bacterial targets at IGS-CNRS, France";
            }, {
                "value": "BSGC";
                "detail": "Berkeley Structural Genomics Center";
            }, {
                "value": "BSGI";
                "detail": "Montreal-Kingston Bacterial Structural Genomics Initiative";
            }, {
                "value": "CEBS";
                "detail": "Chaperone-Enabled Studies of Epigenetic Regulation Enzymes";
            }, {
                "value": "CELLMAT";
                "detail": "Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions";
            }, {
                "value": "CESG";
                "detail": "Center for Eukaryotic Structural Genomics";
            }, {
                "value": "CHSAM";
                "detail": "Structure, Dynamics and Activation Mechanisms of Chemokine Receptors";
            }, {
                "value": "CHTSB";
                "detail": "Center for High-Throughput Structural Biology";
            }, {
                "value": "CSBID";
                "detail": "Center for Structural Biology of Infectious Diseases";
            }, {
                "value": "CSGID";
                "detail": "Center for Structural Genomics of Infectious Diseases";
            }, {
                "value": "CSMP";
                "detail": "Center for Structures of Membrane Proteins";
            }, {
                "value": "GPCR";
                "detail": "GPCR Network";
            }, {
                "value": "IFN";
                "detail": "Atoms-to-Animals: The Immune Function Network";
            }, {
                "value": "ISFI";
                "detail": "Integrated Center for Structure and Function Innovation";
            }, {
                "value": "ISPC";
                "detail": "Israel Structural Proteomics Center";
            }, {
                "value": "JCSG";
                "detail": "Joint Center for Structural Genomics";
            }, {
                "value": "MCMR";
                "detail": "Midwest Center for Macromolecular Research";
            }, {
                "value": "MCSG";
                "detail": "Midwest Center for Structural Genomics";
            }, {
                "value": "MPID";
                "detail": "Center for Membrane Proteins of Infectious Diseases";
            }, {
                "value": "MPP";
                "detail": "Mitochondrial Protein Partnership";
            }, {
                "value": "MPSBC";
                "detail": "Membrane Protein Structural Biology Consortium";
            }, {
                "value": "MPSbyNMR";
                "detail": "Membrane Protein Structures by Solution NMR";
            }, {
                "value": "MSGP";
                "detail": "Marseilles Structural Genomics Program @ AFMB";
            }, {
                "value": "MSGPP";
                "detail": "Medical Structural Genomics of Pathogenic Protozoa";
            }, {
                "value": "MTBI";
                "detail": "Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors";
            }, {
                "value": "NESG";
                "detail": "Northeast Structural Genomics Consortium";
            }, {
                "value": "NHRs";
                "detail": "Partnership for Nuclear Receptor Signaling Code Biology";
            }, {
                "value": "NPCXstals";
                "detail": "Nucleocytoplasmic Transport: a Target for Cellular Control";
            }, {
                "value": "NYCOMPS";
                "detail": "New York Consortium on Membrane Protein Structure";
            }, {
                "value": "NYSGRC";
                "detail": "New York Structural Genomics Research Consortium";
            }, {
                "value": "NYSGXRC";
                "detail": "New York Structural GenomiX Research Consortium";
            }, {
                "value": "NatPro";
                "detail": "Enzyme Discovery for Natural Product Biosynthesis";
            }, {
                "value": "OCSP";
                "detail": "Ontario Centre for Structural Proteomics";
            }, {
                "value": "OPPF";
                "detail": "Oxford Protein Production Facility";
            }, {
                "value": "PCSEP";
                "detail": "Program for the Characterization of Secreted Effector Proteins";
            }, {
                "value": "PSF";
                "detail": "Protein Structure Factory";
            }, {
                "value": "RSGI";
                "detail": "RIKEN Structural Genomics/Proteomics Initiative";
            }, {
                "value": "S2F";
                "detail": "Structure 2 Function Project";
            }, {
                "value": "SASTAD";
                "detail": "South Africa Structural Targets Annotation Database";
            }, {
                "value": "SECSG";
                "detail": "Southeast Collaboratory for Structural Genomics";
            }, {
                "value": "SGC";
                "detail": "Structural Genomics Consortium";
            }, {
                "value": "SGCGES";
                "detail": "Structural Genomics Consortium for Research on Gene Expression";
            }, {
                "value": "SGPP";
                "detail": "Structural Genomics of Pathogenic Protozoa Consortium";
            }, {
                "value": "SPINE";
                "detail": "Structural Proteomics in Europe";
            }, {
                "value": "SPINE-2";
                "detail": "Structural Proteomics in Europe 2";
            }, {
                "value": "SSGCID";
                "detail": "Seattle Structural Genomics Center for Infectious Disease";
            }, {
                "value": "SSPF";
                "detail": "Scottish Structural Proteomics Facility";
            }, {
                "value": "STEMCELL";
                "detail": "Partnership for Stem Cell Biology";
            }, {
                "value": "TBSGC";
                "detail": "TB Structural Genomics Consortium";
            }, {
                "value": "TCELL";
                "detail": "Partnership for T-Cell Biology";
            }, {
                "value": "TEMIMPS";
                "detail": "Transcontinental EM Initiative for Membrane Protein Structure";
            }, {
                "value": "TJMP";
                "detail": "Structure-Function Studies of Tight Junction Membrane Proteins";
            }, {
                "value": "TMPC";
                "detail": "Transmembrane Protein Center";
            }, {
                "value": "TransportPDB";
                "detail": "Center for the X-ray Structure Determination of Human Transporters";
            }, {
                "value": "UC4CDI";
                "detail": "Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes";
            }, {
                "value": "XMTB";
                "detail": "Mycobacterium Tuberculosis Structural Proteomics Project";
            }, {
                "value": "YSG";
                "detail": "Paris-Sud Yeast Structural Genomics";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value identifies the full name of center.";
                "context": "dictionary";
            }, {
                "text": "Structural Genomics Project Center Initials";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 40;
            }];
            "enum": {
                "ATCG3D": "ATCG3D";
                "BIGS": "BIGS";
                "BSGC": "BSGC";
                "BSGI": "BSGI";
                "CEBS": "CEBS";
                "CELLMAT": "CELLMAT";
                "CESG": "CESG";
                "CHSAM": "CHSAM";
                "CHTSB": "CHTSB";
                "CSBID": "CSBID";
                "CSGID": "CSGID";
                "CSMP": "CSMP";
                "GPCR": "GPCR";
                "IFN": "IFN";
                "ISFI": "ISFI";
                "ISPC": "ISPC";
                "JCSG": "JCSG";
                "MCMR": "MCMR";
                "MCSG": "MCSG";
                "MPID": "MPID";
                "MPP": "MPP";
                "MPSBC": "MPSBC";
                "MPSbyNMR": "MPSbyNMR";
                "MSGP": "MSGP";
                "MSGPP": "MSGPP";
                "MTBI": "MTBI";
                "NESG": "NESG";
                "NHRs": "NHRs";
                "NPCXstals": "NPCXstals";
                "NYCOMPS": "NYCOMPS";
                "NYSGRC": "NYSGRC";
                "NYSGXRC": "NYSGXRC";
                "NatPro": "NatPro";
                "OCSP": "OCSP";
                "OPPF": "OPPF";
                "PCSEP": "PCSEP";
                "PSF": "PSF";
                "RSGI": "RSGI";
                "S2F": "S2F";
                "SASTAD": "SASTAD";
                "SECSG": "SECSG";
                "SGC": "SGC";
                "SGCGES": "SGCGES";
                "SGPP": "SGPP";
                "SPINE": "SPINE";
                "SPINE-2": "SPINE-2";
                "SSGCID": "SSGCID";
                "SSPF": "SSPF";
                "STEMCELL": "STEMCELL";
                "TBSGC": "TBSGC";
                "TCELL": "TCELL";
                "TEMIMPS": "TEMIMPS";
                "TJMP": "TJMP";
                "TMPC": "TMPC";
                "TransportPDB": "TransportPDB";
                "UC4CDI": "UC4CDI";
                "XMTB": "XMTB";
                "YSG": "YSG";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ProjectName": {
            "path": "pdbx_SG_project.project_name";
            "type": "string";
            "description": "The value identifies the Structural Genomics project.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value identifies the Structural Genomics project.";
                "context": "dictionary";
            }, {
                "text": "This specific Structural Genomics project name";
                "context": "deposition";
            }, {
                "text": "Structural Genomics Project Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 35;
            }];
            "enum": {
                "Enzyme Function Initiative": "Enzyme Function Initiative";
                "NIAID, National Institute of Allergy and Infectious Diseases": "NIAID, National Institute of Allergy and Infectious Diseases";
                "NPPSFA, National Project on Protein Structural and Functional Analyses": "NPPSFA, National Project on Protein Structural and Functional Analyses";
                "PSI, Protein Structure Initiative": "PSI, Protein Structure Initiative";
                "PSI:Biology": "PSI:Biology";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxAuditSupport": {
        "Country": {
            "path": "pdbx_audit_support.country";
            "type": "string";
            "description": "The country/region providing the funding support for the entry.\n Funding information is optionally provided for entries after June 2016.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The country/region providing the funding support for the entry.\n Funding information is optionally provided for entries after June 2016.";
                "context": "dictionary";
            }, {
                "text": "Funding Country";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 70;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "FundingOrganization": {
            "path": "pdbx_audit_support.funding_organization";
            "type": "string";
            "description": "The name of the organization providing funding support for the\n entry. Funding information is optionally provided for entries\n after June 2016.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The name of the organization providing funding support for the\n entry. Funding information is optionally provided for entries\n after June 2016.";
                "context": "dictionary";
            }, {
                "text": "Funding Organization";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 60;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "GrantNumber": {
            "path": "pdbx_audit_support.grant_number";
            "type": "string";
            "description": "The grant number associated with this source of support.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The grant number associated with this source of support.";
                "context": "dictionary";
            }, {
                "text": "Funding Grant Number";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 65;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxDatabasePdbObsSpr": {
        "ReplacePdbId": {
            "path": "pdbx_database_PDB_obs_spr.replace_pdb_id";
            "type": "string";
            "description": "The PDB identifier for the replaced (OLD) entry/entries.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The PDB identifier for the replaced (OLD) entry/entries.";
                "context": "dictionary";
            }, {
                "text": "The PDB identifier(s) for the entry/entries to be replaced by this on-going deposition";
                "context": "deposition";
            }, {
                "text": "Replace Pdb Id (Database Pdb Obs Spr)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxDatabaseRelated": {
        "ContentType": {
            "path": "pdbx_database_related.content_type";
            "type": "string";
            "description": "The identifying content type of the related entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The identifying content type of the related entry.";
                "context": "dictionary";
            }, {
                "text": "Content Types Available in a Related Resource";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 80;
            }];
            "enum": {
                "associated EM volume": "associated EM volume";
                "associated NMR restraints": "associated NMR restraints";
                "associated SAS data": "associated SAS data";
                "associated structure factors": "associated structure factors";
                "complete structure": "complete structure";
                "consensus EM volume": "consensus EM volume";
                "derivative structure": "derivative structure";
                "ensemble": "ensemble";
                "focused EM volume": "focused EM volume";
                "minimized average structure": "minimized average structure";
                "native structure": "native structure";
                "other": "other";
                "other EM volume": "other EM volume";
                "protein target sequence and/or protocol data": "protein target sequence and/or protocol data";
                "re-refinement": "re-refinement";
                "representative structure": "representative structure";
                "split": "split";
                "unspecified": "unspecified";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "DbId": {
            "path": "pdbx_database_related.db_id";
            "type": "string";
            "description": "The identifying code in the related database.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The identifying code in the related database.";
                "context": "dictionary";
            }, {
                "text": "The identifying code in the related database";
                "context": "deposition";
            }, {
                "text": "Db Id (Database Related)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "DbName": {
            "path": "pdbx_database_related.db_name";
            "type": "string";
            "description": "The name of the database containing the related entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The name of the database containing the related entry.";
                "context": "dictionary";
            }, {
                "text": "The name of the database containing the related entry";
                "context": "deposition";
            }, {
                "text": "Related Resource Name Containing Additional Content";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 85;
            }];
            "enum": {
                "BIOISIS": "BIOISIS";
                "BMCD": "BMCD";
                "BMRB": "BMRB";
                "EMDB": "EMDB";
                "NDB": "NDB";
                "PDB": "PDB";
                "PDB-Dev": "PDB-Dev";
                "SASBDB": "SASBDB";
                "TargetDB": "TargetDB";
                "TargetTrack": "TargetTrack";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxDatabaseStatus": {
        "PdbFormatCompatible": {
            "path": "pdbx_database_status.pdb_format_compatible";
            "type": "string";
            "description": "A flag indicating that the entry is compatible with the PDB format.\n\n A value of 'N' indicates that the no PDB format data file is\n corresponding to this entry is available in the PDB archive.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "No";
            }, {
                "value": "Y";
                "detail": "Yes";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A flag indicating that the entry is compatible with the PDB format.\n\n A value of 'N' indicates that the no PDB format data file is\n corresponding to this entry is available in the PDB archive.";
                "context": "dictionary";
            }, {
                "text": "Compatible with PDB Format";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 55;
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxDepositGroup": {
        "GroupDescription": {
            "path": "pdbx_deposit_group.group_description";
            "type": "string";
            "description": "A description of the contents of entries in the collection.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the contents of entries in the collection.";
                "context": "dictionary";
            }, {
                "text": "Group Description (Deposit Group)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "GroupId": {
            "path": "pdbx_deposit_group.group_id";
            "type": "string";
            "description": "A unique identifier for a group of entries deposited as a collection.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "A unique identifier for a group of entries deposited as a collection.";
                "context": "dictionary";
            }, {
                "text": "PDB Deposit Group ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 20;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "GroupTitle": {
            "path": "pdbx_deposit_group.group_title";
            "type": "string";
            "description": "A title to describe the group of entries deposited in the collection.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A title to describe the group of entries deposited in the collection.";
                "context": "dictionary";
            }, {
                "text": "Group Title (Deposit Group)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "GroupType": {
            "path": "pdbx_deposit_group.group_type";
            "type": "string";
            "description": "Text to describe a grouping of entries in multiple collections";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Text to describe a grouping of entries in multiple collections";
                "context": "dictionary";
            }, {
                "text": "Group Type (Deposit Group)";
                "context": "brief";
            }];
            "enum": {
                "changed state": "changed state";
                "ground state": "ground state";
                "undefined": "undefined";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxInitialRefinementModel": {
        "AccessionCode": {
            "path": "pdbx_initial_refinement_model.accession_code";
            "type": "string";
            "description": "This item identifies an accession code of the resource where the initial model\n is used";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This item identifies an accession code of the resource where the initial model\n is used";
                "context": "dictionary";
            }, {
                "text": "Starting Model Accession";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 40;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SourceName": {
            "path": "pdbx_initial_refinement_model.source_name";
            "type": "string";
            "description": "This item identifies the resource of initial model used for refinement";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This item identifies the resource of initial model used for refinement";
                "context": "dictionary";
            }, {
                "text": "Starting Model Source";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 35;
            }];
            "enum": {
                "AlphaFold": "AlphaFold";
                "ITasser": "ITasser";
                "InsightII": "InsightII";
                "ModelArchive": "ModelArchive";
                "Modeller": "Modeller";
                "Other": "Other";
                "PDB": "PDB";
                "PDB-Dev": "PDB-Dev";
                "PHYRE": "PHYRE";
                "Robetta": "Robetta";
                "RoseTTAFold": "RoseTTAFold";
                "SwissModel": "SwissModel";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Type": {
            "path": "pdbx_initial_refinement_model.type";
            "type": "string";
            "description": "This item describes the type of the initial model was generated";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This item describes the type of the initial model was generated";
                "context": "dictionary";
            }, {
                "text": "Starting Model Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 30;
            }];
            "enum": {
                "experimental model": "experimental model";
                "in silico model": "in silico model";
                "integrative model": "integrative model";
                "other": "other";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxMoleculeFeatures": {
        "Class": {
            "path": "pdbx_molecule_features.class";
            "type": "string";
            "description": "Broadly defines the function of the molecule.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Broadly defines the function of the molecule.";
                "context": "dictionary";
            }, {
                "text": "Class (Molecule Features)";
                "context": "brief";
            }];
            "enum": {
                "Antagonist": "Antagonist";
                "Anthelmintic": "Anthelmintic";
                "Antibiotic": "Antibiotic";
                "Antibiotic, Anthelmintic": "Antibiotic, Anthelmintic";
                "Antibiotic, Antimicrobial": "Antibiotic, Antimicrobial";
                "Antibiotic, Antineoplastic": "Antibiotic, Antineoplastic";
                "Anticancer": "Anticancer";
                "Anticoagulant": "Anticoagulant";
                "Anticoagulant, Antithrombotic": "Anticoagulant, Antithrombotic";
                "Antifungal": "Antifungal";
                "Antigen": "Antigen";
                "Antiinflammatory": "Antiinflammatory";
                "Antimicrobial": "Antimicrobial";
                "Antimicrobial, Antiparasitic, Antibiotic": "Antimicrobial, Antiparasitic, Antibiotic";
                "Antimicrobial, Antiretroviral": "Antimicrobial, Antiretroviral";
                "Antimicrobial, Antitumor": "Antimicrobial, Antitumor";
                "Antineoplastic": "Antineoplastic";
                "Antiparasitic": "Antiparasitic";
                "Antiretroviral": "Antiretroviral";
                "Antithrombotic": "Antithrombotic";
                "Antitumor": "Antitumor";
                "Antiviral": "Antiviral";
                "CASPASE inhibitor": "CASPASE inhibitor";
                "Chaperone binding": "Chaperone binding";
                "Drug delivery": "Drug delivery";
                "Enzyme inhibitor": "Enzyme inhibitor";
                "Glycan component": "Glycan component";
                "Growth factor": "Growth factor";
                "Immunosuppressant": "Immunosuppressant";
                "Inducer": "Inducer";
                "Inhibitor": "Inhibitor";
                "Lantibiotic": "Lantibiotic";
                "Metabolism": "Metabolism";
                "Metal transport": "Metal transport";
                "Nutrient": "Nutrient";
                "Oxidation-reduction": "Oxidation-reduction";
                "Protein binding": "Protein binding";
                "Receptor": "Receptor";
                "Substrate analog": "Substrate analog";
                "Synthetic opioid": "Synthetic opioid";
                "Thrombin inhibitor": "Thrombin inhibitor";
                "Thrombin inhibitor, Trypsin inhibitor": "Thrombin inhibitor, Trypsin inhibitor";
                "Toxin": "Toxin";
                "Transition state mimetic": "Transition state mimetic";
                "Transport activator": "Transport activator";
                "Trypsin inhibitor": "Trypsin inhibitor";
                "Unknown": "Unknown";
                "Water retention": "Water retention";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Details": {
            "path": "pdbx_molecule_features.details";
            "type": "string";
            "description": "Additional details describing the molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Additional details describing the molecule.";
                "context": "dictionary";
            }, {
                "text": "Details (Molecule Features)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "pdbx_molecule_features.name";
            "type": "string";
            "description": "A name of the molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A name of the molecule.";
                "context": "dictionary";
            }, {
                "text": "Name (Molecule Features)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PrdId": {
            "path": "pdbx_molecule_features.prd_id";
            "type": "string";
            "description": "The value of _pdbx_molecule_features.prd_id is the accession code for this\n reference molecule.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value of _pdbx_molecule_features.prd_id is the accession code for this\n reference molecule.";
                "context": "dictionary";
            }, {
                "text": "Prd Id (Molecule Features)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxNmrDetails": {
        "Text": {
            "path": "pdbx_nmr_details.text";
            "type": "string";
            "description": "Additional details describing the NMR experiment.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Additional details describing the NMR experiment.";
                "context": "dictionary";
            }, {
                "text": "Text (Nmr Details)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxNmrRefine": {
        "Details": {
            "path": "pdbx_nmr_refine.details";
            "type": "string";
            "description": "Additional details about the NMR refinement.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Additional details about the NMR refinement.";
                "context": "dictionary";
            }, {
                "text": "Details (Nmr Refine)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "pdbx_nmr_refine.method";
            "type": "string";
            "description": "The method used to determine the structure.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The method used to determine the structure.";
                "context": "dictionary";
            }, {
                "text": "NMR Method to Determination Structure";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "NMR Method Details";
                "priority_order": 20;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxNmrSampleDetails": {
        "Contents": {
            "path": "pdbx_nmr_sample_details.contents";
            "type": "string";
            "description": "A complete description of each NMR sample. Include the concentration\nand concentration units for each component (include buffers, etc.). For each\ncomponent describe the isotopic composition, including the % labeling level,\nif known.\n\nFor example:\n1. Uniform (random) labeling with 15N: U-15N\n2. Uniform (random) labeling with 13C, 15N at known labeling\n   levels: U-95% 13C;U-98% 15N\n3. Residue selective labeling: U-95% 15N-Thymine\n4. Site specific labeling: 95% 13C-Ala18,\n5. Natural abundance labeling in an otherwise uniformly labeled\n   biomolecule is designated by NA: U-13C; NA-K,H";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A complete description of each NMR sample. Include the concentration\nand concentration units for each component (include buffers, etc.). For each\ncomponent describe the isotopic composition, including the % labeling level,\nif known.\n\nFor example:\n1. Uniform (random) labeling with 15N: U-15N\n2. Uniform (random) labeling with 13C, 15N at known labeling\n   levels: U-95% 13C;U-98% 15N\n3. Residue selective labeling: U-95% 15N-Thymine\n4. Site specific labeling: 95% 13C-Ala18,\n5. Natural abundance labeling in an otherwise uniformly labeled\n   biomolecule is designated by NA: U-13C; NA-K,H";
                "context": "dictionary";
            }, {
                "text": "Contents (Nmr Sample Details)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Details": {
            "path": "pdbx_nmr_sample_details.details";
            "type": "string";
            "description": "Brief description of the sample providing additional information not captured by other items in the category.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Brief description of the sample providing additional information not captured by other items in the category.";
                "context": "dictionary";
            }, {
                "text": "Brief description of the sample, providing additional information not captured by other items in the category.";
                "context": "deposition";
            }, {
                "text": "Details (Nmr Sample Details)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Label": {
            "path": "pdbx_nmr_sample_details.label";
            "type": "string";
            "description": "A value that uniquely identifies this sample from the other samples listed\nin the entry.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A value that uniquely identifies this sample from the other samples listed\nin the entry.";
                "context": "dictionary";
            }, {
                "text": "A name that uniquely identifies this sample from the others listed in the entry.";
                "context": "deposition";
            }, {
                "text": "Label (Nmr Sample Details)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxNmrSoftware": {
        "Name": {
            "path": "pdbx_nmr_software.name";
            "type": "string";
            "description": "The name of the software used for the task.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The name of the software used for the task.";
                "context": "dictionary";
            }, {
                "text": "The name of the software used for this procedure.";
                "context": "deposition";
            }, {
                "text": "Name (Nmr Software)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxNmrSpectrometer": {
        "FieldStrength": {
            "path": "pdbx_nmr_spectrometer.field_strength";
            "type": "number";
            "description": "The field strength in MHz of the spectrometer";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The field strength in MHz of the spectrometer";
                "context": "dictionary";
            }, {
                "text": "Select the field strength in MHz";
                "context": "deposition";
            }, {
                "text": "NMR Spectrometer Field Strength";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "NMR Method Details";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 3400;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Manufacturer": {
            "path": "pdbx_nmr_spectrometer.manufacturer";
            "type": "string";
            "description": "The name of the manufacturer of the spectrometer.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The name of the manufacturer of the spectrometer.";
                "context": "dictionary";
            }, {
                "text": "NMR Spectrometer Manufacturer";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "NMR Method Details";
                "priority_order": 5;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Model": {
            "path": "pdbx_nmr_spectrometer.model";
            "type": "string";
            "description": "The model of the NMR spectrometer.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The model of the NMR spectrometer.";
                "context": "dictionary";
            }, {
                "text": "NMR Spectrometer Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "NMR Method Details";
                "priority_order": 10;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxReflnsTwin": {
        "Type": {
            "path": "pdbx_reflns_twin.type";
            "type": "string";
            "description": "There are two types of twinning: merohedral or hemihedral\n                                 non-merohedral or epitaxial\n\nFor merohedral twinning the diffraction patterns from the different domains are\ncompletely superimposable.   Hemihedral twinning is a special case of merohedral\ntwinning. It only involves two distinct domains.  Pseudo-merohedral twinning is\na subclass merohedral twinning in which lattice is coincidentally superimposable.\n\nIn the case of non-merohedral or epitaxial twinning  the reciprocal\nlattices do not superimpose exactly. In this case the  diffraction pattern\nconsists of two (or more) interpenetrating lattices, which can in principle\nbe separated.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "There are two types of twinning: merohedral or hemihedral\n                                 non-merohedral or epitaxial\n\nFor merohedral twinning the diffraction patterns from the different domains are\ncompletely superimposable.   Hemihedral twinning is a special case of merohedral\ntwinning. It only involves two distinct domains.  Pseudo-merohedral twinning is\na subclass merohedral twinning in which lattice is coincidentally superimposable.\n\nIn the case of non-merohedral or epitaxial twinning  the reciprocal\nlattices do not superimpose exactly. In this case the  diffraction pattern\nconsists of two (or more) interpenetrating lattices, which can in principle\nbe separated.";
                "context": "dictionary";
            }, {
                "text": "Type of Twinning";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Crystal Properties";
                "priority_order": 35;
            }];
            "enum": {
                "epitaxial": "epitaxial";
                "hemihedral": "hemihedral";
                "merohedral": "merohedral";
                "non-merohedral": "non-merohedral";
                "pseudo-merohedral": "pseudo-merohedral";
                "tetartohedral": "tetartohedral";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxSerialCrystallographyMeasurement": {
        "Collimation": {
            "path": "pdbx_serial_crystallography_measurement.collimation";
            "type": "string";
            "description": "The collimation or type of focusing optics applied to the radiation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The collimation or type of focusing optics applied to the radiation.";
                "context": "dictionary";
            }, {
                "text": "Collimation (Serial Crystallography Measurement)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxSerialCrystallographySampleDelivery": {
        "Description": {
            "path": "pdbx_serial_crystallography_sample_delivery.description";
            "type": "string";
            "description": "The description of the mechanism by which the specimen in placed in the path\n of the source.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The description of the mechanism by which the specimen in placed in the path\n of the source.";
                "context": "dictionary";
            }, {
                "text": "Description (Serial Crystallography Sample Delivery)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "pdbx_serial_crystallography_sample_delivery.method";
            "type": "string";
            "description": "The description of the mechanism by which the specimen in placed in the path\n of the source.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The description of the mechanism by which the specimen in placed in the path\n of the source.";
                "context": "dictionary";
            }, {
                "text": "Method (Serial Crystallography Sample Delivery)";
                "context": "brief";
            }];
            "enum": {
                "fixed target": "fixed target";
                "injection": "injection";
            };
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxSerialCrystallographySampleDeliveryFixedTarget": {
        "Description": {
            "path": "pdbx_serial_crystallography_sample_delivery_fixed_target.description";
            "type": "string";
            "description": "For a fixed target sample, a description of sample preparation";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "For a fixed target sample, a description of sample preparation";
                "context": "dictionary";
            }, {
                "text": "Description (Serial Crystallography Sample Delivery Fixed Target)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Details": {
            "path": "pdbx_serial_crystallography_sample_delivery_fixed_target.details";
            "type": "string";
            "description": "Any details pertinent to the fixed sample target";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Any details pertinent to the fixed sample target";
                "context": "dictionary";
            }, {
                "text": "Details (Serial Crystallography Sample Delivery Fixed Target)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxSerialCrystallographySampleDeliveryInjection": {
        "Description": {
            "path": "pdbx_serial_crystallography_sample_delivery_injection.description";
            "type": "string";
            "description": "For continuous sample flow experiments, a description of the injector used\n to move the sample into the beam.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "For continuous sample flow experiments, a description of the injector used\n to move the sample into the beam.";
                "context": "dictionary";
            }, {
                "text": "Description (Serial Crystallography Sample Delivery Injection)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "InjectorNozzle": {
            "path": "pdbx_serial_crystallography_sample_delivery_injection.injector_nozzle";
            "type": "string";
            "description": "The type of nozzle to deliver and focus sample jet";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The type of nozzle to deliver and focus sample jet";
                "context": "dictionary";
            }, {
                "text": "Injector Nozzle (Serial Crystallography Sample Delivery Injection)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Preparation": {
            "path": "pdbx_serial_crystallography_sample_delivery_injection.preparation";
            "type": "string";
            "description": "Details of crystal growth and preparation of the crystals";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Details of crystal growth and preparation of the crystals";
                "context": "dictionary";
            }, {
                "text": "Preparation (Serial Crystallography Sample Delivery Injection)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxSolnScatter": {
        "DataAnalysisSoftwareList": {
            "path": "pdbx_soln_scatter.data_analysis_software_list";
            "type": "string";
            "description": "A list of the software used in the data analysis";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A list of the software used in the data analysis";
                "context": "dictionary";
            }, {
                "text": "Data Analysis Software List (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DataReductionSoftwareList": {
            "path": "pdbx_soln_scatter.data_reduction_software_list";
            "type": "string";
            "description": "A list of the software used in the data reduction";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A list of the software used in the data reduction";
                "context": "dictionary";
            }, {
                "text": "Data Reduction Software List (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DetectorSpecific": {
            "path": "pdbx_soln_scatter.detector_specific";
            "type": "string";
            "description": "The particular radiation detector. In general this will be a\n  manufacturer, description, model number or some combination of\n  these.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The particular radiation detector. In general this will be a\n  manufacturer, description, model number or some combination of\n  these.";
                "context": "dictionary";
            }, {
                "text": "Detector Specific (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DetectorType": {
            "path": "pdbx_soln_scatter.detector_type";
            "type": "string";
            "description": "The general class of the radiation detector.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The general class of the radiation detector.";
                "context": "dictionary";
            }, {
                "text": "Detector Type (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SourceBeamline": {
            "path": "pdbx_soln_scatter.source_beamline";
            "type": "string";
            "description": "The beamline name used for the experiment";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The beamline name used for the experiment";
                "context": "dictionary";
            }, {
                "text": "Source Beamline (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SourceBeamlineInstrument": {
            "path": "pdbx_soln_scatter.source_beamline_instrument";
            "type": "string";
            "description": "The instrumentation used on the beamline";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The instrumentation used on the beamline";
                "context": "dictionary";
            }, {
                "text": "Source Beamline Instrument (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SourceClass": {
            "path": "pdbx_soln_scatter.source_class";
            "type": "string";
            "description": "The general class of the radiation source.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The general class of the radiation source.";
                "context": "dictionary";
            }, {
                "text": "Source Class (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SourceType": {
            "path": "pdbx_soln_scatter.source_type";
            "type": "string";
            "description": "The make, model, name or beamline of the source of radiation.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The make, model, name or beamline of the source of radiation.";
                "context": "dictionary";
            }, {
                "text": "Source Type (Soln Scatter)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxSolnScatterModel": {
        "ConformerSelectionCriteria": {
            "path": "pdbx_soln_scatter_model.conformer_selection_criteria";
            "type": "string";
            "description": "A description of the conformer selection criteria\n used.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the conformer selection criteria\n used.";
                "context": "dictionary";
            }, {
                "text": "Conformer Selection Criteria (Soln Scatter Model)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Details": {
            "path": "pdbx_soln_scatter_model.details";
            "type": "string";
            "description": "A description of any additional details concerning the experiment.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of any additional details concerning the experiment.";
                "context": "dictionary";
            }, {
                "text": "Details (Soln Scatter Model)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Method": {
            "path": "pdbx_soln_scatter_model.method";
            "type": "string";
            "description": "A description of the methods used in the modelling";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the methods used in the modelling";
                "context": "dictionary";
            }, {
                "text": "Method (Soln Scatter Model)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "SoftwareList": {
            "path": "pdbx_soln_scatter_model.software_list";
            "type": "string";
            "description": "A list of the software used in the modeeling";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A list of the software used in the modeeling";
                "context": "dictionary";
            }, {
                "text": "Software List (Soln Scatter Model)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxVrptSummaryGeometry": {
        "AnglesRmsz": {
            "path": "pdbx_vrpt_summary_geometry.angles_RMSZ";
            "type": "number";
            "description": "The overall root mean square of the Z-score for deviations of bond angles in comparison to \n\"standard geometry\" made using the MolProbity dangle program.\nStandard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).\nThis value is for all chains in the structure.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The overall root mean square of the Z-score for deviations of bond angles in comparison to \n\"standard geometry\" made using the MolProbity dangle program.\nStandard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).\nThis value is for all chains in the structure.";
                "context": "dictionary";
            }, {
                "text": "Molprobity Angles RMSZ";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 100;
            }];
            "rcsb_current_maximum_value": 28.42;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BondsRmsz": {
            "path": "pdbx_vrpt_summary_geometry.bonds_RMSZ";
            "type": "number";
            "description": "The overall root mean square of the Z-score for deviations of bond lengths in comparison to \n\"standard geometry\" made using the MolProbity dangle program.\nStandard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).\nThis value is for all chains in the structure.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The overall root mean square of the Z-score for deviations of bond lengths in comparison to \n\"standard geometry\" made using the MolProbity dangle program.\nStandard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).\nThis value is for all chains in the structure.";
                "context": "dictionary";
            }, {
                "text": "Molprobity Bonds RMSZ";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 105;
            }];
            "rcsb_current_maximum_value": 227.47;
            "rcsb_current_minimum_value": 0.04;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Clashscore": {
            "path": "pdbx_vrpt_summary_geometry.clashscore";
            "type": "number";
            "description": "This score is derived from the number of pairs of atoms in the PDB_model_num that are unusually close to each other. \nIt is calculated by the MolProbity pdbx_vrpt_software and expressed as the number or such clashes per thousand atoms.\nFor structures determined by NMR the clashscore value here will only consider label_atom_id pairs in the \nwell-defined (core) residues from ensemble analysis.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "This score is derived from the number of pairs of atoms in the PDB_model_num that are unusually close to each other. \nIt is calculated by the MolProbity pdbx_vrpt_software and expressed as the number or such clashes per thousand atoms.\nFor structures determined by NMR the clashscore value here will only consider label_atom_id pairs in the \nwell-defined (core) residues from ensemble analysis.";
                "context": "dictionary";
            }, {
                "text": "Molprobity Clashscore";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 110;
            }];
            "rcsb_current_maximum_value": 1044.3;
            "rcsb_current_minimum_value": -1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PercentRamachandranOutliers": {
            "path": "pdbx_vrpt_summary_geometry.percent_ramachandran_outliers";
            "type": "number";
            "description": "The percentage of residues with Ramachandran outliers.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The percentage of residues with Ramachandran outliers.";
                "context": "dictionary";
            }, {
                "text": "Molprobity Percentage Ramachandran Outliers";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 115;
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PercentRotamerOutliers": {
            "path": "pdbx_vrpt_summary_geometry.percent_rotamer_outliers";
            "type": "number";
            "description": "The MolProbity sidechain outlier score (a percentage).\nProtein sidechains mostly adopt certain (combinations of) preferred torsion angle values \n(called rotamers or rotameric conformers), much like their backbone torsion angles \n(as assessed in the Ramachandran analysis). MolProbity considers the sidechain conformation \nof a residue to be an outlier if its set of torsion angles is not similar to any preferred \ncombination. The sidechain outlier score is calculated as the percentage of residues \nwith an unusual sidechain conformation with respect to the total number of residues for \nwhich the assessment is available.\nExample: percent-rota-outliers=\"2.44\".\nSpecific to structure that contain protein chains and have sidechains modelled.\nFor NMR structures only the  well-defined (core) residues from ensemble analysis will be considered.\nThe percentage of residues with rotamer outliers.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The MolProbity sidechain outlier score (a percentage).\nProtein sidechains mostly adopt certain (combinations of) preferred torsion angle values \n(called rotamers or rotameric conformers), much like their backbone torsion angles \n(as assessed in the Ramachandran analysis). MolProbity considers the sidechain conformation \nof a residue to be an outlier if its set of torsion angles is not similar to any preferred \ncombination. The sidechain outlier score is calculated as the percentage of residues \nwith an unusual sidechain conformation with respect to the total number of residues for \nwhich the assessment is available.\nExample: percent-rota-outliers=\"2.44\".\nSpecific to structure that contain protein chains and have sidechains modelled.\nFor NMR structures only the  well-defined (core) residues from ensemble analysis will be considered.\nThe percentage of residues with rotamer outliers.";
                "context": "dictionary";
            }, {
                "text": "Molprobity Percentage Rotamer Outliers";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 120;
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbAccessionInfo": {
        "DepositDate": {
            "path": "rcsb_accession_info.deposit_date";
            "type": "string";
            "format": "date";
            "description": "The entry deposition date.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The entry deposition date.";
                "context": "dictionary";
            }, {
                "text": "Deposit Date";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 1743379200000;
            "rcsb_current_minimum_value": 82339200000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "HasReleasedExperimentalData": {
            "path": "rcsb_accession_info.has_released_experimental_data";
            "type": "string";
            "description": "A code indicating the current availibility of experimental data in the repository.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A code indicating the current availibility of experimental data in the repository.";
                "context": "dictionary";
            }, {
                "text": "Has Experimental Data";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 50;
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "InitialReleaseDate": {
            "path": "rcsb_accession_info.initial_release_date";
            "type": "string";
            "format": "date";
            "description": "The entry initial release date.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The entry initial release date.";
                "context": "dictionary";
            }, {
                "text": "Release Date";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 1744156800000;
            "rcsb_current_minimum_value": 201312000000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RevisionDate": {
            "path": "rcsb_accession_info.revision_date";
            "type": "string";
            "format": "date";
            "description": "The latest entry revision date.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The latest entry revision date.";
                "context": "dictionary";
            }, {
                "text": "Revision Date";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 1744156800000;
            "rcsb_current_minimum_value": 1503446400000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbCompModelProvenance": {
        "EntryId": {
            "path": "rcsb_comp_model_provenance.entry_id";
            "type": "string";
            "description": "Entry identifier corresponding to the computed structure model.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "Entry identifier corresponding to the computed structure model.";
                "context": "dictionary";
            }, {
                "text": "Computed Structure Model ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Computed Structure Model Details";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SourceDb": {
            "path": "rcsb_comp_model_provenance.source_db";
            "type": "string";
            "description": "Source database for the computed structure model.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "AlphaFoldDB";
                "detail": "AlphaFoldDB";
            }, {
                "value": "ModelArchive";
                "detail": "ModelArchive";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Source database for the computed structure model.";
                "context": "dictionary";
            }, {
                "text": "Source Database";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Computed Structure Model Details";
                "priority_order": 10;
            }];
            "enum": {
                "AlphaFoldDB": "AlphaFoldDB";
                "ModelArchive": "ModelArchive";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbEntryContainerIdentifiers": {
        "EmdbIds": {
            "path": "rcsb_entry_container_identifiers.emdb_ids";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_entry_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_entry_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entry container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entry container.";
                "context": "dictionary";
            }, {
                "text": "Id (Entry Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RelatedEmdbIds": {
            "path": "rcsb_entry_container_identifiers.related_emdb_ids";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbEntryInfo": {
        "AssemblyCount": {
            "path": "rcsb_entry_info.assembly_count";
            "type": "integer";
            "description": "The number of assemblies defined for this entry including the deposited assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of assemblies defined for this entry including the deposited assembly.";
                "context": "dictionary";
            }, {
                "text": "Number of Assemblies";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 44;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BranchedEntityCount": {
            "path": "rcsb_entry_info.branched_entity_count";
            "type": "integer";
            "description": "The number of distinct branched entities in the structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct branched entities in the structure entry.";
                "context": "dictionary";
            }, {
                "text": "Branched Entity Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 22;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "CisPeptideCount": {
            "path": "rcsb_entry_info.cis_peptide_count";
            "type": "integer";
            "description": "The number of cis-peptide linkages per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of cis-peptide linkages per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Cis Peptide Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1320;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedAtomCount": {
            "path": "rcsb_entry_info.deposited_atom_count";
            "type": "integer";
            "description": "The number of heavy atom coordinates records per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of heavy atom coordinates records per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Non-Hydrogen Atoms per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 70;
            }];
            "rcsb_current_maximum_value": 4527463;
            "rcsb_current_minimum_value": 28;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedDeuteratedWaterCount": {
            "path": "rcsb_entry_info.deposited_deuterated_water_count";
            "type": "integer";
            "description": "The number of deuterated water molecules per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of deuterated water molecules per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Deuterated Water Molecules per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 85;
            }];
            "rcsb_current_maximum_value": 1114;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedHydrogenAtomCount": {
            "path": "rcsb_entry_info.deposited_hydrogen_atom_count";
            "type": "integer";
            "description": "The number of hydrogen atom coordinates records per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of hydrogen atom coordinates records per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Hydrogen Atoms per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 75;
            }];
            "rcsb_current_maximum_value": 680778;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedModelCount": {
            "path": "rcsb_entry_info.deposited_model_count";
            "type": "integer";
            "description": "The number of model structures deposited.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of model structures deposited.";
                "context": "dictionary";
            }, {
                "text": "Deposited Model Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 90;
            }];
            "rcsb_current_maximum_value": 640;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedModeledPolymerMonomerCount": {
            "path": "rcsb_entry_info.deposited_modeled_polymer_monomer_count";
            "type": "integer";
            "description": "The number of modeled polymer monomers in the deposited coordinate data.\n This is the total count of monomers with reported coordinate data for all polymer\n entity instances in the deposited coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of modeled polymer monomers in the deposited coordinate data.\n This is the total count of monomers with reported coordinate data for all polymer\n entity instances in the deposited coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Deposited Modeled Polymer Monomer Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 566508;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedNonpolymerEntityInstanceCount": {
            "path": "rcsb_entry_info.deposited_nonpolymer_entity_instance_count";
            "type": "integer";
            "description": "The number of non-polymer instances in the deposited data set.\n This is the total count of non-polymer entity instances reported\n per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of non-polymer instances in the deposited data set.\n This is the total count of non-polymer entity instances reported\n per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Total Number of Non-polymer Instances";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 60;
            }];
            "rcsb_current_maximum_value": 5351;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedPolymerEntityInstanceCount": {
            "path": "rcsb_entry_info.deposited_polymer_entity_instance_count";
            "type": "integer";
            "description": "The number of polymer instances in the deposited data set.\n This is the total count of polymer entity instances reported\n per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of polymer instances in the deposited data set.\n This is the total count of polymer entity instances reported\n per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Total Number of Polymer Instances (Chains)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 55;
            }];
            "rcsb_current_maximum_value": 1792;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedPolymerMonomerCount": {
            "path": "rcsb_entry_info.deposited_polymer_monomer_count";
            "type": "integer";
            "description": "The number of polymer monomers in sample entity instances in the deposited data set.\n This is the total count of monomers for all polymer entity instances reported\n per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of polymer monomers in sample entity instances in the deposited data set.\n This is the total count of monomers for all polymer entity instances reported\n per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Total Number of Polymer Residues per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 65;
            }];
            "rcsb_current_maximum_value": 761922;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedSolventAtomCount": {
            "path": "rcsb_entry_info.deposited_solvent_atom_count";
            "type": "integer";
            "description": "The number of heavy solvent atom coordinates records per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of heavy solvent atom coordinates records per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Water Molecules per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 80;
            }];
            "rcsb_current_maximum_value": 17738;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DepositedUnmodeledPolymerMonomerCount": {
            "path": "rcsb_entry_info.deposited_unmodeled_polymer_monomer_count";
            "type": "integer";
            "description": "The number of unmodeled polymer monomers in the deposited coordinate data. This is\n the total count of monomers with unreported coordinate data for all polymer\n entity instances per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of unmodeled polymer monomers in the deposited coordinate data. This is\n the total count of monomers with unreported coordinate data for all polymer\n entity instances per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Deposited Unmodeled Polymer Monomer Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 195414;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DiffrnRadiationWavelengthMaximum": {
            "path": "rcsb_entry_info.diffrn_radiation_wavelength_maximum";
            "type": "number";
            "description": "The maximum radiation wavelength in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum radiation wavelength in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Maximum Diffraction Wavelength";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 65;
            }];
            "rcsb_current_maximum_value": 979257;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DiffrnRadiationWavelengthMinimum": {
            "path": "rcsb_entry_info.diffrn_radiation_wavelength_minimum";
            "type": "number";
            "description": "The minimum radiation wavelength in angstroms.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum radiation wavelength in angstroms.";
                "context": "dictionary";
            }, {
                "text": "Minimum Diffraction Wavelength";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 60;
            }];
            "rcsb_current_maximum_value": 97627;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DisulfideBondCount": {
            "path": "rcsb_entry_info.disulfide_bond_count";
            "type": "integer";
            "description": "The number of disulfide bonds per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of disulfide bonds per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Disulfide Bond Count per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 95;
            }];
            "rcsb_current_maximum_value": 1356;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "EntityCount": {
            "path": "rcsb_entry_info.entity_count";
            "type": "integer";
            "description": "The number of distinct polymer, non-polymer, branched molecular, and solvent entities per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct polymer, non-polymer, branched molecular, and solvent entities per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct Molecular Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ExperimentalMethod": {
            "path": "rcsb_entry_info.experimental_method";
            "type": "string";
            "description": "The category of experimental method(s) used to determine the structure entry.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_enum_annotated": [{
                "value": "EM";
                "detail": "ELECTRON MICROSCOPY or ELECTRON CRYSTALLOGRAPHY or ELECTRON TOMOGRAPHY";
            }, {
                "value": "Multiple methods";
                "detail": "Multiple experimental methods";
            }, {
                "value": "NMR";
                "detail": "SOLUTION NMR or SOLID-STATE NMR";
            }, {
                "value": "Neutron";
                "detail": "NEUTRON DIFFRACTION";
            }, {
                "value": "Other";
                "detail": "SOLUTION SCATTERING, EPR, INFRARED SPECTROSCOPY or FLUORESCENCE TRANSFER";
            }, {
                "value": "X-ray";
                "detail": "X-RAY DIFFRACTION, FIBER DIFFRACTION, or POWDER DIFFRACTION";
            }];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The category of experimental method(s) used to determine the structure entry.";
                "context": "dictionary";
            }, {
                "text": "Experimental Method (Broader Categories)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 10;
            }];
            "enum": {
                "EM": "EM";
                "Multiple methods": "Multiple methods";
                "NMR": "NMR";
                "Neutron": "Neutron";
                "Other": "Other";
                "X-ray": "X-ray";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ExperimentalMethodCount": {
            "path": "rcsb_entry_info.experimental_method_count";
            "type": "integer";
            "description": "The number of experimental methods contributing data to the structure determination.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of experimental methods contributing data to the structure determination.";
                "context": "dictionary";
            }, {
                "text": "Number of Experimental Methods";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Methods";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 3;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "InterMolCovalentBondCount": {
            "path": "rcsb_entry_info.inter_mol_covalent_bond_count";
            "type": "integer";
            "description": "The number of intermolecular covalent bonds.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of intermolecular covalent bonds.";
                "context": "dictionary";
            }, {
                "text": "Inter Mol Covalent Bond Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 9426;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "InterMolMetalicBondCount": {
            "path": "rcsb_entry_info.inter_mol_metalic_bond_count";
            "type": "integer";
            "description": "The number of intermolecular metalic bonds.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of intermolecular metalic bonds.";
                "context": "dictionary";
            }, {
                "text": "Inter Mol Metalic Bond Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 11045;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MolecularWeight": {
            "path": "rcsb_entry_info.molecular_weight";
            "type": "number";
            "description": "The molecular mass (KDa) of polymer and non-polymer entities (exclusive of solvent) in the deposited structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The molecular mass (KDa) of polymer and non-polymer entities (exclusive of solvent) in the deposited structure entry.";
                "context": "dictionary";
            }, {
                "text": "Molecular Weight per Deposited Model";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 86760.19;
            "rcsb_current_minimum_value": 0.42;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NaPolymerEntityTypes": {
            "path": "rcsb_entry_info.na_polymer_entity_types";
            "type": "string";
            "description": "Nucleic acid polymer entity type categories describing the entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "DNA (only)";
                "detail": "DNA entity/entities only";
            }, {
                "value": "DNA/RNA (only)";
                "detail": "Both DNA and RNA polymer entities";
            }, {
                "value": "NA-hybrid (only)";
                "detail": "NA-hybrid entity/entities only";
            }, {
                "value": "Other";
                "detail": "Another polymer type composition";
            }, {
                "value": "RNA (only)";
                "detail": "RNA entity/entities only";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Nucleic acid polymer entity type categories describing the entry.";
                "context": "dictionary";
            }, {
                "text": "Na Polymer Entity Types (Entry Info)";
                "context": "brief";
            }];
            "enum": {
                "DNA (only)": "DNA (only)";
                "DNA/RNA (only)": "DNA/RNA (only)";
                "NA-hybrid (only)": "NA-hybrid (only)";
                "Other": "Other";
                "RNA (only)": "RNA (only)";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "NonpolymerEntityCount": {
            "path": "rcsb_entry_info.nonpolymer_entity_count";
            "type": "integer";
            "description": "The number of distinct non-polymer entities in the structure entry exclusive of solvent.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct non-polymer entities in the structure entry exclusive of solvent.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct Non-polymer Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 30;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NonpolymerMolecularWeightMaximum": {
            "path": "rcsb_entry_info.nonpolymer_molecular_weight_maximum";
            "type": "number";
            "description": "The maximum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.";
                "context": "dictionary";
            }, {
                "text": "Nonpolymer Molecular Weight Maximum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 12.02;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NonpolymerMolecularWeightMinimum": {
            "path": "rcsb_entry_info.nonpolymer_molecular_weight_minimum";
            "type": "number";
            "description": "The minimum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.";
                "context": "dictionary";
            }, {
                "text": "Nonpolymer Molecular Weight Minimum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 12.02;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerComposition": {
            "path": "rcsb_entry_info.polymer_composition";
            "type": "string";
            "description": "Categories describing the polymer entity composition for the entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "DNA";
                "detail": "DNA entity/entities only";
            }, {
                "value": "DNA/RNA";
                "detail": "Both DNA and RNA polymer entities";
            }, {
                "value": "NA-hybrid";
                "detail": "DNA/RNA hybrid entity/entities only";
            }, {
                "value": "NA/oligosaccharide";
                "detail": "Both NA and oligosaccharide entities";
            }, {
                "value": "RNA";
                "detail": "RNA entity/entities only";
            }, {
                "value": "heteromeric protein";
                "detail": "multiple protein entities";
            }, {
                "value": "homomeric protein";
                "detail": "single protein entity";
            }, {
                "value": "oligosaccharide";
                "detail": "One of more oligosaccharide entities";
            }, {
                "value": "other";
                "detail": "Neither an individual protein, nucleic acid polymer nor oligosaccharide entity";
            }, {
                "value": "other type composition";
                "detail": "Other combinations of 3 or more polymer types";
            }, {
                "value": "other type pair";
                "detail": "Other combinations of 2 polymer types";
            }, {
                "value": "protein/NA";
                "detail": "Both protein and nucleic acid polymer entities";
            }, {
                "value": "protein/NA/oligosaccharide";
                "detail": "Protein, nucleic acid, and oligosaccharide entities";
            }, {
                "value": "protein/oligosaccharide";
                "detail": "Both protein and oligosaccharide entities";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Categories describing the polymer entity composition for the entry.";
                "context": "dictionary";
            }, {
                "text": "Entry Polymer Composition";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 10;
            }];
            "enum": {
                "DNA": "DNA";
                "DNA/RNA": "DNA/RNA";
                "NA-hybrid": "NA-hybrid";
                "NA/oligosaccharide": "NA/oligosaccharide";
                "RNA": "RNA";
                "heteromeric protein": "heteromeric protein";
                "homomeric protein": "homomeric protein";
                "oligosaccharide": "oligosaccharide";
                "other": "other";
                "other type composition": "other type composition";
                "other type pair": "other type pair";
                "protein/NA": "protein/NA";
                "protein/NA/oligosaccharide": "protein/NA/oligosaccharide";
                "protein/oligosaccharide": "protein/oligosaccharide";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PolymerEntityCount": {
            "path": "rcsb_entry_info.polymer_entity_count";
            "type": "integer";
            "description": "The number of distinct polymer entities in the structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct polymer entities in the structure entry.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountDna": {
            "path": "rcsb_entry_info.polymer_entity_count_DNA";
            "type": "integer";
            "description": "The number of distinct DNA polymer entities.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct DNA polymer entities.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct DNA Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 45;
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountRna": {
            "path": "rcsb_entry_info.polymer_entity_count_RNA";
            "type": "integer";
            "description": "The number of distinct RNA polymer entities.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct RNA polymer entities.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct RNA Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 40;
            }];
            "rcsb_current_maximum_value": 36;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountNucleicAcid": {
            "path": "rcsb_entry_info.polymer_entity_count_nucleic_acid";
            "type": "integer";
            "description": "The number of distinct nucleic acid polymer entities (DNA or RNA).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct nucleic acid polymer entities (DNA or RNA).";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Nucleic Acid (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountNucleicAcidHybrid": {
            "path": "rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid";
            "type": "integer";
            "description": "The number of distinct hybrid nucleic acid polymer entities.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct hybrid nucleic acid polymer entities.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct NA Hybrid Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 50;
            }];
            "rcsb_current_maximum_value": 3;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountProtein": {
            "path": "rcsb_entry_info.polymer_entity_count_protein";
            "type": "integer";
            "description": "The number of distinct protein polymer entities.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct protein polymer entities.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct Protein Entities";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 35;
            }];
            "rcsb_current_maximum_value": 165;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityTaxonomyCount": {
            "path": "rcsb_entry_info.polymer_entity_taxonomy_count";
            "type": "integer";
            "description": "The number of distinct taxonomies represented among the polymer entities in the entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct taxonomies represented among the polymer entities in the entry.";
                "context": "dictionary";
            }, {
                "text": "Total Polymer Entity Taxonomy Count";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerMolecularWeightMaximum": {
            "path": "rcsb_entry_info.polymer_molecular_weight_maximum";
            "type": "number";
            "description": "The maximum molecular mass (KDa) of a polymer entity in the deposited structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum molecular mass (KDa) of a polymer entity in the deposited structure entry.";
                "context": "dictionary";
            }, {
                "text": "Polymer Molecular Weight Maximum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 6061.92;
            "rcsb_current_minimum_value": 0.39;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerMolecularWeightMinimum": {
            "path": "rcsb_entry_info.polymer_molecular_weight_minimum";
            "type": "number";
            "description": "The minimum molecular mass (KDa) of a polymer entity in the deposited structure entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum molecular mass (KDa) of a polymer entity in the deposited structure entry.";
                "context": "dictionary";
            }, {
                "text": "Polymer Molecular Weight Minimum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1222.87;
            "rcsb_current_minimum_value": 0.16;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerMonomerCountMaximum": {
            "path": "rcsb_entry_info.polymer_monomer_count_maximum";
            "type": "integer";
            "description": "The maximum monomer count of a polymer entity per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum monomer count of a polymer entity per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Polymer Monomer Count Maximum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 19000;
            "rcsb_current_minimum_value": 2;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerMonomerCountMinimum": {
            "path": "rcsb_entry_info.polymer_monomer_count_minimum";
            "type": "integer";
            "description": "The minimum monomer count of a polymer entity per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum monomer count of a polymer entity per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Polymer Monomer Count Minimum (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 5898;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ResolutionCombined": {
            "path": "rcsb_entry_info.resolution_combined";
            "type": "array";
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SelectedPolymerEntityTypes": {
            "path": "rcsb_entry_info.selected_polymer_entity_types";
            "type": "string";
            "description": "Selected polymer entity type categories describing the entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "Nucleic acid (only)";
                "detail": "Nucleic acid (DNA, RNA, NA-hybrid entity/entities only";
            }, {
                "value": "Oligosaccharide (only)";
                "detail": "oligosaccharide/branched polymer entities only";
            }, {
                "value": "Other";
                "detail": "Another polymer type composition";
            }, {
                "value": "Protein (only)";
                "detail": "protein entity/entities only";
            }, {
                "value": "Protein/NA";
                "detail": "Both protein and nucleic acid (DNA or RNA) polymer entities";
            }, {
                "value": "Protein/Oligosaccharide";
                "detail": "Both protein and oligosaccharide/branched polymer entities";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Selected polymer entity type categories describing the entry.";
                "context": "dictionary";
            }, {
                "text": "Entry Polymer Types";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Entry Features";
                "priority_order": 5;
            }];
            "enum": {
                "Nucleic acid (only)": "Nucleic acid (only)";
                "Oligosaccharide (only)": "Oligosaccharide (only)";
                "Other": "Other";
                "Protein (only)": "Protein (only)";
                "Protein/NA": "Protein/NA";
                "Protein/Oligosaccharide": "Protein/Oligosaccharide";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SoftwareProgramsCombined": {
            "path": "rcsb_entry_info.software_programs_combined";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SolventEntityCount": {
            "path": "rcsb_entry_info.solvent_entity_count";
            "type": "integer";
            "description": "The number of distinct solvent entities per deposited structure model.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct solvent entities per deposited structure model.";
                "context": "dictionary";
            }, {
                "text": "Number of Distinct Solvent Entities";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "StructureDeterminationMethodology": {
            "path": "rcsb_entry_info.structure_determination_methodology";
            "type": "string";
            "description": "Indicates if the structure was determined using experimental or computational methods.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "computational";
                "detail": "Computational modeling";
            }, {
                "value": "experimental";
                "detail": "Experimentally based structure determination";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Indicates if the structure was determined using experimental or computational methods.";
                "context": "dictionary";
            }, {
                "text": "Structure Determination Methodology";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 90;
            }];
            "enum": {
                "computational": "computational";
                "experimental": "experimental";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "StructureDeterminationMethodologyPriority": {
            "path": "rcsb_entry_info.structure_determination_methodology_priority";
            "type": "integer";
            "description": "Indicates the priority of the value in _rcsb_entry_info.structure_determination_methodology.\n The lower the number the higher the priority.\n Priority values for \"experimental\" structures is currently set to 10 and\n the values for \"computational\" structures is set to 100.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Indicates the priority of the value in _rcsb_entry_info.structure_determination_methodology.\n The lower the number the higher the priority.\n Priority values for \"experimental\" structures is currently set to 10 and\n the values for \"computational\" structures is set to 100.";
                "context": "dictionary";
            }, {
                "text": "Structure Determination Methodology Priority (Entry Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 10;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DiffrnResolutionHigh": {
            "Value": {
                "path": "rcsb_entry_info.diffrn_resolution_high.value";
                "type": "number";
                "description": "The high resolution limit of data collection.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "The high resolution limit of data collection.";
                    "context": "dictionary";
                }, {
                    "text": "Data Collection Resolution";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "X-ray Data Collection Details";
                    "priority_order": 5;
                }];
                "rcsb_current_maximum_value": 15;
                "rcsb_current_minimum_value": 0.48;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
        };
    };
    "RcsbMaQaMetricGlobal": {
        "MaQaMetricGlobal": {
            "rcsb_nested_indexing_context": [{
                "category_name": "ma_qa_metric_global";
                "category_path": "rcsb_ma_qa_metric_global.ma_qa_metric_global.type";
                "context_attributes": [{
                    "context_value": "pLDDT";
                    "attributes": [{
                        "examples": [83.02, 29.14];
                        "path": "rcsb_ma_qa_metric_global.ma_qa_metric_global.value";
                        "rcsb_current_minimum_value": 23.15;
                        "rcsb_current_maximum_value": 98.77;
                    }];
                }];
            }];
            "Type": {
                "path": "rcsb_ma_qa_metric_global.ma_qa_metric_global.type";
                "type": "string";
                "description": "The type of global QA metric.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_enum_annotated": [{
                    "value": "PAE";
                    "detail": "predicted aligned error (in Angstroms)";
                }, {
                    "value": "contact probability";
                    "detail": "the contact probability of a pairwise interaction";
                }, {
                    "value": "distance";
                    "detail": "the lower the distance, the better the quality";
                }, {
                    "value": "energy";
                    "detail": "the lower the energy, the better the quality";
                }, {
                    "value": "ipTM";
                    "detail": "confidence score of protein-protein interface based on the template modeling score in [0,1]";
                }, {
                    "value": "normalized score";
                    "detail": "normalized score ranging from 0 to 1";
                }, {
                    "value": "other";
                    "detail": "other type of QA metric";
                }, {
                    "value": "pLDDT";
                    "detail": "confidence score predicting accuracy according to the CA-only Local Distance Difference Test (lDDT-CA) in [0,100]";
                }, {
                    "value": "pLDDT all-atom";
                    "detail": "confidence score predicting accuracy according to the all-atom Local Distance Difference Test (lDDT) in [0,100]";
                }, {
                    "value": "pLDDT all-atom in [0,1]";
                    "detail": "confidence score predicting accuracy according to the all-atom Local Distance Difference Test (lDDT) in [0,1]";
                }, {
                    "value": "pLDDT in [0,1]";
                    "detail": "confidence score predicting accuracy according to the CA-only Local Distance Difference Test (lDDT-CA) in [0,1]";
                }, {
                    "value": "pTM";
                    "detail": "confidence score predicting accuracy according to the template modeling score in [0,1]";
                }, {
                    "value": "zscore";
                    "detail": "number of standard deviations from optimal/best";
                }];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "The type of global QA metric.";
                    "context": "dictionary";
                }, {
                    "text": "Type (Ma Qa Metric Global)";
                    "context": "brief";
                }];
                "enum": {
                    "PAE": "PAE";
                    "contact probability": "contact probability";
                    "distance": "distance";
                    "energy": "energy";
                    "ipTM": "ipTM";
                    "normalized score": "normalized score";
                    "other": "other";
                    "pLDDT": "pLDDT";
                    "pLDDT all-atom": "pLDDT all-atom";
                    "pLDDT all-atom in [0,1]": "pLDDT all-atom in [0,1]";
                    "pLDDT in [0,1]": "pLDDT in [0,1]";
                    "pTM": "pTM";
                    "zscore": "zscore";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Value": {
                "path": "rcsb_ma_qa_metric_global.ma_qa_metric_global.value";
                "type": "number";
                "description": "Value of the global QA metric.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Value of the global QA metric.";
                    "context": "dictionary";
                }, {
                    "text": "Global Quality Score";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Computed Structure Model Details";
                    "priority_order": 15;
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
        };
    };
    "RcsbPrimaryCitation": {
        "BookTitle": {
            "path": "rcsb_primary_citation.book_title";
            "type": "string";
            "description": "The title of the book in which the citation appeared; relevant\n for books or book chapters.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The title of the book in which the citation appeared; relevant\n for books or book chapters.";
                "context": "dictionary";
            }, {
                "text": "Book Title (Primary Citation)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Id": {
            "path": "rcsb_primary_citation.id";
            "type": "string";
            "description": "The value of _rcsb_primary_citation.id must uniquely identify a record in the\n CITATION list.\n\n The _rcsb_primary_citation.id 'primary' should be used to indicate the\n citation that the author(s) consider to be the most pertinent to\n the contents of the data block.\n\n Note that this item need not be a number; it can be any unique\n identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The value of _rcsb_primary_citation.id must uniquely identify a record in the\n CITATION list.\n\n The _rcsb_primary_citation.id 'primary' should be used to indicate the\n citation that the author(s) consider to be the most pertinent to\n the contents of the data block.\n\n Note that this item need not be a number; it can be any unique\n identifier.";
                "context": "dictionary";
            }, {
                "text": "Id (Primary Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalAbbrev": {
            "path": "rcsb_primary_citation.journal_abbrev";
            "type": "string";
            "description": "Abbreviated name of the cited journal as given in the\n Chemical Abstracts Service Source Index.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Abbreviated name of the cited journal as given in the\n Chemical Abstracts Service Source Index.";
                "context": "dictionary";
            }, {
                "text": "The PDB (i.e., the Chemical Abstracts) abbreviation for a journal. If you do not know the abbreviation, then give the complete  name of the journal and we will try and find it for you. If it is a book or other monographic work, state the full title.";
                "context": "deposition";
            }, {
                "text": "Primary Citation Journal Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalIdAstm": {
            "path": "rcsb_primary_citation.journal_id_ASTM";
            "type": "string";
            "description": "The American Society for Testing and Materials (ASTM) code\n assigned to the journal cited (also referred to as the CODEN\n designator of the Chemical Abstracts Service); relevant for\n journal articles.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The American Society for Testing and Materials (ASTM) code\n assigned to the journal cited (also referred to as the CODEN\n designator of the Chemical Abstracts Service); relevant for\n journal articles.";
                "context": "dictionary";
            }, {
                "text": "Journal Id Astm (Primary Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "JournalIdIssn": {
            "path": "rcsb_primary_citation.journal_id_ISSN";
            "type": "string";
            "description": "The International Standard Serial Number (ISSN) code assigned to\n the journal cited; relevant for journal articles.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The International Standard Serial Number (ISSN) code assigned to\n the journal cited; relevant for journal articles.";
                "context": "dictionary";
            }, {
                "text": "Journal Id Issn (Primary Citation)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxDatabaseIdDoi": {
            "path": "rcsb_primary_citation.pdbx_database_id_DOI";
            "type": "string";
            "description": "Document Object Identifier used by doi.org to uniquely\n specify bibliographic entry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Document Object Identifier used by doi.org to uniquely\n specify bibliographic entry.";
                "context": "dictionary";
            }, {
                "text": "The document Object Identifier used by doi.org to uniquely specify bibliographic entry";
                "context": "deposition";
            }, {
                "text": "Primary Citation DOI";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 25;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbOrcidIdentifiers": {
            "path": "rcsb_primary_citation.rcsb_ORCID_identifiers";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbAuthors": {
            "path": "rcsb_primary_citation.rcsb_authors";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "RcsbJournalAbbrev": {
            "path": "rcsb_primary_citation.rcsb_journal_abbrev";
            "type": "string";
            "description": "Normalized journal abbreviation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Normalized journal abbreviation.";
                "context": "dictionary";
            }, {
                "text": "Primary Citation Journal Name (Abbreviated)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 15;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Title": {
            "path": "rcsb_primary_citation.title";
            "type": "string";
            "description": "The title of the citation; relevant for journal articles, books\n and book chapters.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The title of the citation; relevant for journal articles, books\n and book chapters.";
                "context": "dictionary";
            }, {
                "text": "Title of the article or chapter or part of a book. This should be marked NULL if the author(s) listed wrote the entire book (or other work) and no sub-section of the book is being cited. Example: The Structure of Crystalline Profilin-Beta-Actin";
                "context": "deposition";
            }, {
                "text": "Primary Citation Title";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 10;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Year": {
            "path": "rcsb_primary_citation.year";
            "type": "integer";
            "description": "The year of the citation; relevant for journal articles, books\n and book chapters.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The year of the citation; relevant for journal articles, books\n and book chapters.";
                "context": "dictionary";
            }, {
                "text": "The year of publication of the article. Example: 2002";
                "context": "deposition";
            }, {
                "text": "Primary Citation Publication Year";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 2025;
            "rcsb_current_minimum_value": 1969;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Refine": {
        "BIsoMean": {
            "path": "refine.B_iso_mean";
            "type": "number";
            "description": "The mean isotropic displacement parameter (B value)\n for the coordinate set.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The mean isotropic displacement parameter (B value)\n for the coordinate set.";
                "context": "dictionary";
            }, {
                "text": "The mean isotropic displacement parameter (B value)  for the coordinate set";
                "context": "deposition";
            }, {
                "text": "Average B Factor";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 10;
            }];
            "rcsb_current_maximum_value": 1274.1;
            "rcsb_current_minimum_value": -13.7642;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Details": {
            "path": "refine.details";
            "type": "string";
            "description": "Description of special aspects of the refinement process.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Description of special aspects of the refinement process.";
                "context": "dictionary";
            }, {
                "text": "Description of special aspects of the refinement process";
                "context": "deposition";
            }, {
                "text": "Structure Refinement Details";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 35;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "LsRFactorRFree": {
            "path": "refine.ls_R_factor_R_free";
            "type": "number";
            "description": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion, and that were used as the test\n reflections (i.e. were excluded from the refinement) when the\n refinement included the calculation of a 'free' R factor.\n Details of how reflections were assigned to the working and\n test sets are given in _reflns.R_free_details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion, and that were used as the test\n reflections (i.e. were excluded from the refinement) when the\n refinement included the calculation of a 'free' R factor.\n Details of how reflections were assigned to the working and\n test sets are given in _reflns.R_free_details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
                "context": "dictionary";
            }, {
                "text": "Sum(abs((abs(F-obs)-abs(F-calc)))/Sum(abs(F-obs)) on pre-allocated cross-validation testing data that were not used in structure solution process";
                "context": "deposition";
            }, {
                "text": "Refinement R Factors (R Free)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 0.5568;
            "rcsb_current_minimum_value": 0.04439;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LsRFactorRWork": {
            "path": "refine.ls_R_factor_R_work";
            "type": "number";
            "description": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion, and that were used as the working\n reflections (i.e. were included in the refinement)  when the\n refinement included the calculation of a 'free' R factor.\n Details of how reflections were assigned to the working and\n test sets are given in _reflns.R_free_details.\n\n _refine.ls_R_factor_obs should not be confused with\n _refine.ls_R_factor_R_work; the former reports the results of a\n refinement in which all observed reflections were used, the\n latter a refinement in which a subset of the observed\n reflections were excluded from refinement for the calculation\n of a 'free' R factor. However, it would be meaningful to quote\n both values if a 'free' R factor were calculated for most of\n the refinement, but all of the observed reflections were used\n in the final rounds of refinement; such a protocol should be\n explained in _refine.details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion, and that were used as the working\n reflections (i.e. were included in the refinement)  when the\n refinement included the calculation of a 'free' R factor.\n Details of how reflections were assigned to the working and\n test sets are given in _reflns.R_free_details.\n\n _refine.ls_R_factor_obs should not be confused with\n _refine.ls_R_factor_R_work; the former reports the results of a\n refinement in which all observed reflections were used, the\n latter a refinement in which a subset of the observed\n reflections were excluded from refinement for the calculation\n of a 'free' R factor. However, it would be meaningful to quote\n both values if a 'free' R factor were calculated for most of\n the refinement, but all of the observed reflections were used\n in the final rounds of refinement; such a protocol should be\n explained in _refine.details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
                "context": "dictionary";
            }, {
                "text": "Sum(abs((abs(F-obs)-abs(F-calc)))/Sum(abs(F-obs)) on working data, i.e. the data used in calculating the structural model throughout the structure solution and refinement process";
                "context": "deposition";
            }, {
                "text": "Refinement R Factors (R Work)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 0.615;
            "rcsb_current_minimum_value": 0.03602;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LsRFactorAll": {
            "path": "refine.ls_R_factor_all";
            "type": "number";
            "description": "Residual factor R for all reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Residual factor R for all reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
                "context": "dictionary";
            }, {
                "text": "Refinement R Factors (All)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 0.999;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "LsRFactorObs": {
            "path": "refine.ls_R_factor_obs";
            "type": "number";
            "description": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion.\n\n _refine.ls_R_factor_obs should not be confused with\n _refine.ls_R_factor_R_work; the former reports the results of a\n refinement in which all observed reflections were used, the\n latter a refinement in which a subset of the observed\n reflections were excluded from refinement for the calculation\n of a 'free' R factor. However, it would be meaningful to quote\n both values if a 'free' R factor were calculated for most of\n the refinement, but all of the observed reflections were used\n in the final rounds of refinement; such a protocol should be\n explained in _refine.details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Residual factor R for reflections that satisfy the resolution\n limits established by _refine.ls_d_res_high and\n _refine.ls_d_res_low and the observation limit established by\n _reflns.observed_criterion.\n\n _refine.ls_R_factor_obs should not be confused with\n _refine.ls_R_factor_R_work; the former reports the results of a\n refinement in which all observed reflections were used, the\n latter a refinement in which a subset of the observed\n reflections were excluded from refinement for the calculation\n of a 'free' R factor. However, it would be meaningful to quote\n both values if a 'free' R factor were calculated for most of\n the refinement, but all of the observed reflections were used\n in the final rounds of refinement; such a protocol should be\n explained in _refine.details.\n\n     sum|F~obs~ - F~calc~|\n R = ---------------------\n          sum|F~obs~|\n\n F~obs~  = the observed structure-factor amplitudes\n F~calc~ = the calculated structure-factor amplitudes\n\n sum is taken over the specified reflections";
                "context": "dictionary";
            }, {
                "text": "Residual factor R for reflections that satisfy the high and low resolution limits and the observed criterion";
                "context": "deposition";
            }, {
                "text": "Refinement R Factors (Observed)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 0.981485;
            "rcsb_current_minimum_value": 0.035;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxMethodToDetermineStruct": {
            "path": "refine.pdbx_method_to_determine_struct";
            "type": "string";
            "description": "Method(s) used to determine the structure.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Method(s) used to determine the structure.";
                "context": "dictionary";
            }, {
                "text": "Method(s) used to determine the structure";
                "context": "deposition";
            }, {
                "text": "Structure Determination Method";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Method Details";
                "priority_order": 5;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Reflns": {
        "BIsoWilsonEstimate": {
            "path": "reflns.B_iso_Wilson_estimate";
            "type": "number";
            "description": "The value of the overall isotropic displacement parameter\n estimated from the slope of the Wilson plot.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The value of the overall isotropic displacement parameter\n estimated from the slope of the Wilson plot.";
                "context": "dictionary";
            }, {
                "text": "The value of the overall isotropic displacement parameter estimated from the slope of the Wilson plot";
                "context": "deposition";
            }, {
                "text": "B Wilson Estimate";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 10;
            }];
            "rcsb_current_maximum_value": 1119.43;
            "rcsb_current_minimum_value": -242.62;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RFreeDetails": {
            "path": "reflns.R_free_details";
            "type": "string";
            "description": "A description of the method by which a subset of reflections was\n selected for exclusion from refinement so as to be used in the\n calculation of a 'free' R factor.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the method by which a subset of reflections was\n selected for exclusion from refinement so as to be used in the\n calculation of a 'free' R factor.";
                "context": "dictionary";
            }, {
                "text": "R Free Details (Reflns)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DResolutionHigh": {
            "path": "reflns.d_resolution_high";
            "type": "number";
            "description": "The smallest value in angstroms for the interplanar spacings\n for the reflection data. This is called the highest resolution.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The smallest value in angstroms for the interplanar spacings\n for the reflection data. This is called the highest resolution.";
                "context": "dictionary";
            }, {
                "text": "The high resolution limit used for data processing.  The high resolution limit actually used for structure solution or model refinement might be lower than this.";
                "context": "deposition";
            }, {
                "text": "Data Collection Resolution";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 24;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DataReductionDetails": {
            "path": "reflns.data_reduction_details";
            "type": "string";
            "description": "A description of special aspects of the data-reduction\n procedures.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the data-reduction\n procedures.";
                "context": "dictionary";
            }, {
                "text": "Data Reduction Details (Reflns)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DataReductionMethod": {
            "path": "reflns.data_reduction_method";
            "type": "string";
            "description": "The method used for data reduction.\n\n Note that this is not the computer program used, which is\n described in the SOFTWARE category, but the method\n itself.\n\n This data item should be used to describe significant\n methodological options used within the data-reduction programs.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The method used for data reduction.\n\n Note that this is not the computer program used, which is\n described in the SOFTWARE category, but the method\n itself.\n\n This data item should be used to describe significant\n methodological options used within the data-reduction programs.";
                "context": "dictionary";
            }, {
                "text": "Data Reduction Method (Reflns)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxRmergeIObs": {
            "path": "reflns.pdbx_Rmerge_I_obs";
            "type": "number";
            "description": "The R value for merging intensities satisfying the observed\n criteria in this data set.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The R value for merging intensities satisfying the observed\n criteria in this data set.";
                "context": "dictionary";
            }, {
                "text": "Provide the Rmerge of data collection as a decimal number.  This is sometimes referred to the linear R-factor";
                "context": "deposition";
            }, {
                "text": "R Value for Merging Intensities (Observed)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 9.9;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxRedundancy": {
            "path": "reflns.pdbx_redundancy";
            "type": "number";
            "description": "Overall redundancy for this data set.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Overall redundancy for this data set.";
                "context": "dictionary";
            }, {
                "text": "Overall reduncancy of the data collection";
                "context": "deposition";
            }, {
                "text": "Overall Redundancy";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 26558;
            "rcsb_current_minimum_value": 0.035;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PercentPossibleObs": {
            "path": "reflns.percent_possible_obs";
            "type": "number";
            "description": "The percentage of geometrically possible reflections represented\n by reflections that satisfy the resolution limits established\n by _reflns.d_resolution_high and _reflns.d_resolution_low and\n the observation limit established by\n _reflns.observed_criterion.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The percentage of geometrically possible reflections represented\n by reflections that satisfy the resolution limits established\n by _reflns.d_resolution_high and _reflns.d_resolution_low and\n the observation limit established by\n _reflns.observed_criterion.";
                "context": "dictionary";
            }, {
                "text": "The percent of possible observed reflections collected. Do not incude the % sign";
                "context": "deposition";
            }, {
                "text": "Percentage of Possible Reflections";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "X-ray Data Collection Details";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 0.045;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "Software": {
        "Classification": {
            "path": "software.classification";
            "type": "string";
            "description": "The classification of the program according to its\n major function.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The classification of the program according to its\n major function.";
                "context": "dictionary";
            }, {
                "text": "Classification (Software)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Language": {
            "path": "software.language";
            "type": "string";
            "description": "The major computing language in which the software is\n coded.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The major computing language in which the software is\n coded.";
                "context": "dictionary";
            }, {
                "text": "Language (Software)";
                "context": "brief";
            }];
            "enum": {
                "Ada": "Ada";
                "Awk": "Awk";
                "Basic": "Basic";
                "C": "C";
                "C++": "C++";
                "C/C++": "C/C++";
                "Fortran": "Fortran";
                "Fortran 77": "Fortran 77";
                "Fortran 90": "Fortran 90";
                "Fortran_77": "Fortran_77";
                "Java": "Java";
                "Java & Fortran": "Java & Fortran";
                "Other": "Other";
                "Pascal": "Pascal";
                "Perl": "Perl";
                "Python": "Python";
                "Python/C++": "Python/C++";
                "Tcl": "Tcl";
                "assembler": "assembler";
                "csh": "csh";
                "ksh": "ksh";
                "sh": "sh";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "software.name";
            "type": "string";
            "description": "The name of the software.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The name of the software.";
                "context": "dictionary";
            }, {
                "text": "Select the appropriate software used in the structure determination";
                "context": "deposition";
            }, {
                "text": "Name (Software)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "software.type";
            "type": "string";
            "description": "The classification of the software according to the most\n common types.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "filter";
                "detail": "                                 filters input and output streams";
            }, {
                "value": "jiffy";
                "detail": "                                 short, simple program";
            }, {
                "value": "library";
                "detail": "                                 used by a program at load time";
            }, {
                "value": "other";
                "detail": "                                 all other kinds of software";
            }, {
                "value": "package";
                "detail": "                                 collections of programs with multiple\n                                  functionality";
            }, {
                "value": "program";
                "detail": "                                 individual program with limited\n                                  functionality";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The classification of the software according to the most\n common types.";
                "context": "dictionary";
            }, {
                "text": "Type (Software)";
                "context": "brief";
            }];
            "enum": {
                "filter": "filter";
                "jiffy": "jiffy";
                "library": "library";
                "other": "other";
                "package": "package";
                "program": "program";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "Struct": {
        "PdbxCaspFlag": {
            "path": "struct.pdbx_CASP_flag";
            "type": "string";
            "description": "The item indicates whether the entry is a CASP target, a CASD-NMR target,\n or similar target participating in methods development experiments.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "No";
            }, {
                "value": "Y";
                "detail": "Yes";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The item indicates whether the entry is a CASP target, a CASD-NMR target,\n or similar target participating in methods development experiments.";
                "context": "dictionary";
            }, {
                "text": "Selecting a prediction target identifies the deposition as a CASP (Critical Assessment of Techniques for Protein Structure Prediction), CASD-NMR (Critical Assessment of Automated Structure Determination of Proteins from NMR Data), or Foldit target. When identifying a deposited protein structure as a prediction target, the depositors agree to the conditions of CASP, CASD-NMR, and Foldit: (1) the polymer sequence will be released to the public immediately, and (2) the coordinates and any related data will be released to the public after an eight week hold from the deposition date.";
                "context": "deposition";
            }, {
                "text": "Casp Flag (Struct)";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxModelDetails": {
            "path": "struct.pdbx_model_details";
            "type": "string";
            "description": "Text description of the methodology which produced this\n model structure.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Text description of the methodology which produced this\n model structure.";
                "context": "dictionary";
            }, {
                "text": "Model Details (Struct)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxModelTypeDetails": {
            "path": "struct.pdbx_model_type_details";
            "type": "string";
            "description": "A description of the type of structure model.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the type of structure model.";
                "context": "dictionary";
            }, {
                "text": "Model Type Details (Struct)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Title": {
            "path": "struct.title";
            "type": "string";
            "description": "A title for the data block. The author should attempt to convey\n the essence of the structure archived in the CIF in the title,\n and to distinguish this structural result from others.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "A title for the data block. The author should attempt to convey\n the essence of the structure archived in the CIF in the title,\n and to distinguish this structural result from others.";
                "context": "dictionary";
            }, {
                "text": "Provide a brief title that describes the contents of the entry and procedures or conditions which set this entry apart from others. For related entries provide unique structure titles emphasizing the underlying purpose of particular experiment.";
                "context": "deposition";
            }, {
                "text": "Structure Title";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Structure Details";
                "priority_order": 5;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "StructKeywords": {
        "PdbxKeywords": {
            "path": "struct_keywords.pdbx_keywords";
            "type": "string";
            "description": "Terms characterizing the macromolecular structure.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "Terms characterizing the macromolecular structure.";
                "context": "dictionary";
            }, {
                "text": "Structure Keywords";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 45;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Text": {
            "path": "struct_keywords.text";
            "type": "string";
            "description": "Keywords describing this structure.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "Keywords describing this structure.";
                "context": "dictionary";
            }, {
                "text": "Provide the list of keywords that describe your entry (functional class, metabolic role, biological or chemical activity, structural classification, etc.). These will be used to categorize your submission (assign header, function of the small molecule, etc.), and to search the entry within the archive. The keywords should not include long phrases or sentences";
                "context": "deposition";
            }, {
                "text": "Additional Structure Keywords";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 50;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "Symmetry": {
        "CellSetting": {
            "path": "symmetry.cell_setting";
            "type": "string";
            "description": "The cell settings for this space-group symmetry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The cell settings for this space-group symmetry.";
                "context": "dictionary";
            }, {
                "text": "Cell Setting (Symmetry)";
                "context": "brief";
            }];
            "enum": {
                "cubic": "cubic";
                "hexagonal": "hexagonal";
                "monoclinic": "monoclinic";
                "orthorhombic": "orthorhombic";
                "rhombohedral": "rhombohedral";
                "tetragonal": "tetragonal";
                "triclinic": "triclinic";
                "trigonal": "trigonal";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PdbxFullSpaceGroupNameHM": {
            "path": "symmetry.pdbx_full_space_group_name_H_M";
            "type": "string";
            "description": "Used for PDB space group:\n\n Example: 'C 1 2 1'  (instead of C 2)\n          'P 1 2 1'  (instead of P 2)\n          'P 1 21 1' (instead of P 21)\n          'P 1 1 21' (instead of P 21 -unique C axis)\n          'H 3'      (instead of R 3   -hexagonal)\n          'H 3 2'    (instead of R 3 2 -hexagonal)";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Used for PDB space group:\n\n Example: 'C 1 2 1'  (instead of C 2)\n          'P 1 2 1'  (instead of P 2)\n          'P 1 21 1' (instead of P 21)\n          'P 1 1 21' (instead of P 21 -unique C axis)\n          'H 3'      (instead of R 3   -hexagonal)\n          'H 3 2'    (instead of R 3 2 -hexagonal)";
                "context": "dictionary";
            }, {
                "text": "Full Space Group Name H M (Symmetry)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SpaceGroupNameHM": {
            "path": "symmetry.space_group_name_H_M";
            "type": "string";
            "description": "Hermann-Mauguin space-group symbol. Note that the\n Hermann-Mauguin symbol does not necessarily contain complete\n information about the symmetry and the space-group origin. If\n used, always supply the FULL symbol from International Tables\n for Crystallography Vol. A (2002) and indicate the origin and\n the setting if it is not implicit. If there is any doubt that\n the equivalent positions can be uniquely deduced from this\n symbol, specify the  _symmetry_equiv.pos_as_xyz or\n _symmetry.space_group_name_Hall  data items as well. Leave\n spaces between symbols referring to\n different axes.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Hermann-Mauguin space-group symbol. Note that the\n Hermann-Mauguin symbol does not necessarily contain complete\n information about the symmetry and the space-group origin. If\n used, always supply the FULL symbol from International Tables\n for Crystallography Vol. A (2002) and indicate the origin and\n the setting if it is not implicit. If there is any doubt that\n the equivalent positions can be uniquely deduced from this\n symbol, specify the  _symmetry_equiv.pos_as_xyz or\n _symmetry.space_group_name_Hall  data items as well. Leave\n spaces between symbols referring to\n different axes.";
                "context": "dictionary";
            }, {
                "text": "The full crystal space-group symbol";
                "context": "deposition";
            }, {
                "text": "Space Group";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Cell Dimensions and Space Group";
                "priority_order": 35;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SpaceGroupNameHall": {
            "path": "symmetry.space_group_name_Hall";
            "type": "string";
            "description": "Space-group symbol as described by Hall (1981). This symbol\n gives the space-group setting explicitly. Leave spaces between\n the separate components of the symbol.\n\n Ref: Hall, S. R. (1981). Acta Cryst. A37, 517-525; erratum\n (1981) A37, 921.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Space-group symbol as described by Hall (1981). This symbol\n gives the space-group setting explicitly. Leave spaces between\n the separate components of the symbol.\n\n Ref: Hall, S. R. (1981). Acta Cryst. A37, 517-525; erratum\n (1981) A37, 921.";
                "context": "dictionary";
            }, {
                "text": "Space Group Name Hall (Symmetry)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbEntryGroupMembership": {
        "GroupId": {
            "path": "rcsb_entry_group_membership.group_id";
            "type": "string";
            "description": "A unique identifier for a group of entries";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Entry Group ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 100;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AggregationMethod": {
            "path": "rcsb_entry_group_membership.aggregation_method";
            "type": "string";
            "description": "Method used to establish group membership";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Aggregation Method (Entry Group Membership)";
                "context": "brief";
            }];
            "enum": {
                "matching_deposit_group_id": "matching_deposit_group_id";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbExternalReferences": {
        "Type": {
            "path": "rcsb_external_references.type";
            "type": "string";
            "description": "Internal identifier for external resource.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "OLDERADO";
                "name": "OLDERADO";
                "detail": "OLDERADO provides analysis of clustering and domain composition for NMR structure ensembles";
            }, {
                "value": "BMRB";
                "name": "BMRB";
                "detail": "A Repository for data from NMR spectroscopy on proteins, peptides, nucleic acids, and other biomolecules";
            }, {
                "value": "EM DATA RESOURCE";
                "name": "EMDataResource";
                "detail": "Global resource for 3-dimensional Electron Microscopy (3DEM) structure data";
            }, {
                "value": "NDB";
                "name": "NDB";
                "detail": "Three-dimensional structural information about nucleic acids";
            }, {
                "value": "NAKB";
                "name": "NAKB";
                "detail": "Three-dimensional structural information about nucleic acids";
            }, {
                "value": "PROTEIN DIFFRACTION";
                "name": "Protein Diffraction";
                "detail": "Integrated resource for reproducibility in macromolecular crystallography";
            }, {
                "value": "SB GRID";
                "name": "SBGrid";
                "detail": "Supports publication of X-ray diffraction, MicroED, LLSM datasets, as well as structural models";
            }];
            "rcsb_description": [{
                "text": "Experimental Data Resource";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Linked External Resources";
                "priority_order": 5;
            }];
            "enum": {
                "OLDERADO": "OLDERADO";
                "BMRB": "BMRB";
                "NDB": "NDB";
                "NAKB": "NAKB";
                "SB GRID": "SB GRID";
                "PROTEIN DIFFRACTION": "PROTEIN DIFFRACTION";
                "EM DATA RESOURCE": "EM DATA RESOURCE";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbBindingAffinity": {
        "rcsb_nested_indexing_context": [{
            "category_name": "binding_affinity_type";
            "category_path": "rcsb_binding_affinity.type";
            "context_attributes": [{
                "context_value": "IC50";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [0.8, 14];
                    "rcsb_current_minimum_value": 0;
                    "rcsb_current_maximum_value": 660693440;
                }];
            }, {
                "context_value": "EC50";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [0.18, 23000];
                    "rcsb_current_minimum_value": 0.004000000189989805;
                    "rcsb_current_maximum_value": 50000000;
                }];
            }, {
                "context_value": "Kd";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [6.5, 220000];
                    "rcsb_current_minimum_value": 0;
                    "rcsb_current_maximum_value": 26200000;
                }];
            }, {
                "context_value": "Ka";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [7.5, 1700];
                }];
            }, {
                "context_value": "Ki";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [4, 390000];
                    "rcsb_current_minimum_value": 0;
                    "rcsb_current_maximum_value": 300000000;
                }];
            }, {
                "context_value": "&Delta;G";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [17.2, 21.4];
                    "rcsb_current_minimum_value": -64.9000015258789;
                    "rcsb_current_maximum_value": 30.137800216674805;
                }];
            }, {
                "context_value": "&Delta;H";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [66.9, 123];
                    "rcsb_current_minimum_value": -131.6999969482422;
                    "rcsb_current_maximum_value": 73.1500015258789;
                }];
            }, {
                "context_value": "-T&Delta;S";
                "attributes": [{
                    "path": "rcsb_binding_affinity.value";
                    "examples": [18.1, 47.2];
                    "rcsb_current_minimum_value": -102.05674743652344;
                    "rcsb_current_maximum_value": 1683.699951171875;
                }];
            }];
        }];
        "CompId": {
            "path": "rcsb_binding_affinity.comp_id";
            "type": "string";
            "description": "Ligand identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Comp Id (Binding Affinity)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Type": {
            "path": "rcsb_binding_affinity.type";
            "type": "string";
            "description": "Binding affinity measurement given in one of the following types:  The concentration constants: IC50: the concentration of ligand that reduces enzyme activity by 50%;  EC50: the concentration of compound that generates a half-maximal response;  The binding constant:  Kd: dissociation constant;  Ka: association constant;  Ki: enzyme inhibition constant;  The thermodynamic parameters:  delta G: Gibbs free energy of binding (for association reaction);  delta H: change in enthalpy associated with a chemical reaction;  delta S: change in entropy associated with a chemical reaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "IC50";
                "name": "IC50";
                "detail": "The concentration of ligand that reduces enzyme activity by 50%";
                "units": "nanomole";
            }, {
                "value": "EC50";
                "name": "EC50";
                "detail": "The concentration of compound that generates a half-maximal response";
                "units": "nanomole";
            }, {
                "value": "Kd";
                "name": "Kd";
                "detail": "Dissociation constant";
                "units": "nanomole";
            }, {
                "value": "Ka";
                "name": "Ka";
                "detail": "Association constant";
                "units": "per_mole";
            }, {
                "value": "Ki";
                "name": "Ki";
                "detail": "Enzyme inhibition constant";
                "units": "nanomole";
            }, {
                "value": "&Delta;G";
                "name": "ΔG";
                "detail": "Gibbs free energy of binding (for association reaction)";
                "units": "kilojoule_per_mole";
            }, {
                "value": "&Delta;H";
                "name": "ΔH";
                "detail": "Change in enthalpy associated with a chemical reaction";
                "units": "kilojoule_per_mole";
            }, {
                "value": "-T&Delta;S";
                "name": "-TΔS";
                "detail": "Change in entropy associated with a chemical reaction";
                "units": "kilojoule_per_mole";
            }];
            "rcsb_description": [{
                "text": "Binding Affinity Type";
                "context": "brief";
            }];
            "enum": {
                "IC50": "IC50";
                "EC50": "EC50";
                "Kd": "Kd";
                "Ka": "Ka";
                "Ki": "Ki";
                "&Delta;G": "&Delta;G";
                "&Delta;H": "&Delta;H";
                "-T&Delta;S": "-T&Delta;S";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Value": {
            "path": "rcsb_binding_affinity.value";
            "type": "number";
            "description": "Binding affinity value between a ligand and its target molecule.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Binding Affinity Value";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Nonpolymer Molecular Features";
                "priority_order": 100;
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbPolymerEntityInstanceContainerIdentifiers": {
        "AsymId": {
            "path": "rcsb_polymer_entity_instance_container_identifiers.asym_id";
            "type": "string";
            "description": "Instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Asym Id (Polymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AuthAsymId": {
            "path": "rcsb_polymer_entity_instance_container_identifiers.auth_asym_id";
            "type": "string";
            "description": "Author instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Author instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Auth Asym Id (Polymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntityId": {
            "path": "rcsb_polymer_entity_instance_container_identifiers.entity_id";
            "type": "string";
            "description": "Entity identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entity identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entity Id (Polymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_polymer_entity_instance_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Polymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_polymer_entity_instance_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Polymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbPolymerInstanceAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_polymer_instance_annotation.type";
            "context_attributes": [{
                "context_value": "CATH";
                "attributes": [{
                    "examples": ["2.30.30.40", "3.30.420.40"];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.id";
                }, {
                    "examples": ["SH3 Domains", "ATP Synthase"];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "SCOP";
                "attributes": [{
                    "examples": [82057, 53067];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.id";
                }, {
                    "examples": ["Prokaryotic SH3-related domain", "Actin-like ATPase domain"];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "SCOP2";
                "attributes": [{
                    "examples": [3001607, 4000551, 2000122, 1000001];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.id";
                }, {
                    "examples": ["Sialidases (neuraminidases)", "FAD-dependent thiol oxidase", "Globin-like", "Sialidases"];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "ECOD";
                "attributes": [{
                    "examples": [100001, 300013];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.id";
                }, {
                    "examples": ["F: Evr1_Alr", "F: Peptidase_C30_C"];
                    "path": "rcsb_polymer_instance_annotation.annotation_lineage.name";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_polymer_instance_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_polymer_instance_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_polymer_instance_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_polymer_instance_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "CATH";
                "detail": "CATH - Class, Architecture, Topology, and Homology Protein Structure Database";
                "name": "CATH";
            }, {
                "value": "ECOD";
                "detail": "ECOD - An Evolutionary Classification of Protein Domains";
                "name": "ECOD";
            }, {
                "value": "GlyGen";
                "detail": "GlyGen - Computational and Informatics Resources for Glycoscience";
                "name": "GlyGen";
            }, {
                "value": "SCOP";
                "detail": "SCOP - Structural Classification of Proteins";
                "name": "SCOP";
            }, {
                "value": "SCOP2";
                "detail": "SCOP2 - Structural Classification of Proteins 2 Family and Superfamilies";
                "name": "SCOP2 Family/Superfamily";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "CATH": "CATH";
                "ECOD": "ECOD";
                "GlyGen": "GlyGen";
                "SCOP": "SCOP";
                "SCOP2": "SCOP2";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_polymer_instance_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 5;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_polymer_instance_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Instance (Chain) Features";
                    "priority_order": 5;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_polymer_instance_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Instance (Chain) Features";
                    "priority_order": 10;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbPolymerInstanceFeatureSummary": {
        "rcsb_nested_indexing_context": [{
            "category_name": "feature_summary";
            "category_path": "rcsb_polymer_instance_feature_summary.type";
            "context_attributes": [{
                "context_value": "CIS-PEPTIDE";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_instance_feature_summary.count";
                    "rcsb_current_minimum_value": 1;
                    "rcsb_current_maximum_value": 90;
                }];
            }, {
                "context_value": "HELIX_P";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_instance_feature_summary.count";
                    "rcsb_current_minimum_value": 1;
                    "rcsb_current_maximum_value": 374;
                }, {
                    "examples": [0.15, 0.45];
                    "path": "rcsb_polymer_instance_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.0005;
                    "rcsb_current_maximum_value": 8.06316;
                }];
            }, {
                "context_value": "SHEET";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_instance_feature_summary.count";
                    "rcsb_current_minimum_value": 1;
                    "rcsb_current_maximum_value": 289;
                }, {
                    "examples": [0.15, 0.45];
                    "path": "rcsb_polymer_instance_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.00042;
                    "rcsb_current_maximum_value": 19.54641;
                }];
            }, {
                "context_value": "RSCC_OUTLIER";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_instance_feature_summary.count";
                }];
            }, {
                "context_value": "RSRZ_OUTLIER";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_instance_feature_summary.count";
                }];
            }, {
                "context_value": "UNOBSERVED_RESIDUE_XYZ";
                "attributes": [{
                    "examples": [0.15, 0.45];
                    "path": "rcsb_polymer_instance_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.00022;
                    "rcsb_current_maximum_value": 0.99842;
                }];
            }, {
                "context_value": "UNOBSERVED_ATOM_XYZ";
                "attributes": [{
                    "examples": [0.15, 0.45];
                    "path": "rcsb_polymer_instance_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.00019;
                    "rcsb_current_maximum_value": 1;
                }];
            }];
        }];
        "Count": {
            "path": "rcsb_polymer_instance_feature_summary.count";
            "type": "integer";
            "description": "The feature count per polymer chain.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The feature count per polymer chain.";
                "context": "dictionary";
            }, {
                "text": "Count Per Polymer Chain";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Instance (Chain) Features";
                "priority_order": 15;
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Coverage": {
            "path": "rcsb_polymer_instance_feature_summary.coverage";
            "type": "number";
            "description": "The fractional feature coverage relative to the full entity sequence.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The fractional feature coverage relative to the full entity sequence.";
                "context": "dictionary";
            }, {
                "text": "Coverage Fraction Per Polymer Chain";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Instance (Chain) Features";
                "priority_order": 20;
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MaximumLength": {
            "path": "rcsb_polymer_instance_feature_summary.maximum_length";
            "type": "integer";
            "description": "The maximum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum feature length.";
                "context": "dictionary";
            }, {
                "text": "Maximum Length (Polymer Instance Feature Summary)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 18394;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MinimumLength": {
            "path": "rcsb_polymer_instance_feature_summary.minimum_length";
            "type": "integer";
            "description": "The minimum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum feature length.";
                "context": "dictionary";
            }, {
                "text": "Minimum Length (Polymer Instance Feature Summary)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 18394;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "rcsb_polymer_instance_feature_summary.type";
            "type": "string";
            "description": "Type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "ANGLE_OUTLIER";
                "detail": "Molprobity bond angle outlier";
                "name": "Molprobity bond angle outlier";
            }, {
                "value": "ANGLE_OUTLIERS";
                "detail": "Number of atoms with angle outliers";
                "name": "ANGLE_OUTLIERS";
            }, {
                "value": "AVERAGE_OCCUPANCY";
                "detail": "The average heavy atom occupancy for coordinate records for the residue";
                "name": "AVERAGE_OCCUPANCY";
            }, {
                "value": "BEND";
                "detail": "Bend - region with high backbone curvature without specific hydrogen bonding";
                "name": "Bend - region with high backbone curvature without specific hydrogen bonding";
            }, {
                "value": "BINDING_SITE";
                "detail": "Macromolecular target for ligand binding";
                "name": "Ligand Binding Site";
            }, {
                "value": "BOND_OUTLIER";
                "detail": "Molprobity bond distance outlier";
                "name": "Molprobity bond distance outlier";
            }, {
                "value": "BOND_OUTLIERS";
                "detail": "Number of atoms with bond outliers";
                "name": "BOND_OUTLIERS";
            }, {
                "value": "C-MANNOSYLATION_SITE";
                "detail": "Mannose glycan binding to the first tryptophan (W) residue in the sequence motif WXXW  (where X is any amino acid).";
                "name": "C-Mannosylation Site";
            }, {
                "value": "CATH";
                "detail": "CATH - Class, Architecture, Topology, and Homology Protein Structure Database";
                "name": "CATH";
            }, {
                "value": "CHIRAL_OUTLIERS";
                "detail": "Number of chiral outliers";
                "name": "CHIRAL_OUTLIERS";
            }, {
                "value": "CIS-PEPTIDE";
                "detail": "Peptide linkages with CIS configurations";
                "name": "CIS Peptide linkages";
            }, {
                "value": "CLASHES";
                "detail": "Number of atoms a with clashes";
                "name": "CLASHES";
            }, {
                "value": "ECOD";
                "detail": "ECOD - An Evolutionary Classification of Protein Domains";
                "name": "ECOD";
            }, {
                "value": "HELIX_P";
                "detail": "Protein helices";
                "name": "Protein helices";
            }, {
                "value": "HELX_LH_PP_P";
                "detail": "Left-handed polyproline helix (protein)";
                "name": "Left-handed polyproline helix (protein)";
            }, {
                "value": "HELX_RH_3T_P";
                "detail": "Right-handed 3-10 helix (protein)";
                "name": "Right-handed 3-10 helix (protein)";
            }, {
                "value": "HELX_RH_AL_P";
                "detail": "Alpha helix (protein)";
                "name": "Alpha helix (protein)";
            }, {
                "value": "HELX_RH_PI_P";
                "detail": "Right-handed pi helix (protein)";
                "name": "Right-handed pi helix (protein)";
            }, {
                "value": "LIGAND_COVALENT_LINKAGE";
                "detail": "Covalent ligand linkages with macromolecular target";
                "name": "Covalent Ligand Linkages";
            }, {
                "value": "LIGAND_INTERACTION";
                "detail": "Ligand interactions with macromolecular target (includes covalent, metal coordination, and non-bonded interactions)";
                "name": "Ligand Interactions";
            }, {
                "value": "LIGAND_METAL_COORDINATION_LINKAGE";
                "detail": "Metal coordination ligand linkages with macromolecular target";
                "name": "Metal Coordination Ligand Linkages";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY";
                "detail": "the contact probability of a pairwise interaction";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_DISTANCE";
                "detail": "the lower the distance, the better the quality";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_ENERGY";
                "detail": "the lower the energy, the better the quality";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_IPTM";
                "detail": "confidence score of protein-protein interface based on the template modeling score in [0,1]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE";
                "detail": "normalized score ranging from 0 to 1";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_OTHER";
                "detail": "other type of QA metric";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PAE";
                "detail": "predicted aligned error (in Angstroms)";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PLDDT";
                "detail": "confidence score predicting accuracy according to the CA-only Local Distance Difference Test (lDDT-CA) in [0,100]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM";
                "detail": "confidence score predicting accuracy according to the all-atom Local Distance Difference Test (lDDT) in [0,100]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1]";
                "detail": "confidence score predicting accuracy according to the all-atom Local Distance Difference Test (lDDT) in [0,1]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1]";
                "detail": "confidence score predicting accuracy according to the CA-only Local Distance Difference Test (lDDT-CA) in [0,1]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_PTM";
                "detail": "confidence score predicting accuracy according to the template modeling score in [0,1]";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MA_QA_METRIC_LOCAL_TYPE_ZSCORE";
                "detail": "number of standard deviations from optimal/best";
                "name": "MA_QA_METRIC_LOCAL_TYPE";
            }, {
                "value": "MEMBRANE_SEGMENT";
                "detail": "Extent of a region located in a membrane";
                "name": "Extent of a region located in a membrane";
            }, {
                "value": "MOGUL_ANGLE_OUTLIER";
                "detail": "Mogul bond angle outlier";
                "name": "Mogul bond angle outlier";
            }, {
                "value": "MOGUL_ANGLE_OUTLIERS";
                "detail": "Number of angle outliers as reported by MOGUL";
                "name": "MOGUL_ANGLE_OUTLIERS";
            }, {
                "value": "MOGUL_BOND_OUTLIER";
                "detail": "Mogul bond distance outlier";
                "name": "Mogul bond distance outlier";
            }, {
                "value": "MOGUL_BOND_OUTLIERS";
                "detail": "Number of bond outliers as reported by MOGUL";
                "name": "MOGUL_BOND_OUTLIERS";
            }, {
                "value": "MOGUL_RING_OUTLIERS";
                "detail": "Number of atoms with ring outliers as reported by MOGUL";
                "name": "MOGUL_RING_OUTLIERS";
            }, {
                "value": "MOGUL_TORSION_OUTLIERS";
                "detail": "Number of torsion angle outliers as reported by MOGUL";
                "name": "MOGUL_TORSION_OUTLIERS";
            }, {
                "value": "N-GLYCOSYLATION_SITE";
                "detail": "Glycan binding to the amide nitrogen of an asparagine (Asn) residue";
                "name": "N-Glycosylation Site";
            }, {
                "value": "NATOMS_EDS";
                "detail": "Number of atoms in the residue returned by the EDS software";
                "name": "NATOMS_EDS";
            }, {
                "value": "O-GLYCOSYLATION_SITE";
                "detail": "Glycan binding to the oxygen atom of serine (Ser) or threonine (Thr) residues";
                "name": "O-Glycosylation Site";
            }, {
                "value": "OWAB";
                "detail": "Occupancy-weighted Average B value";
                "name": "OWAB";
            }, {
                "value": "PLANE_OUTLIERS";
                "detail": "Number of planar outliers";
                "name": "PLANE_OUTLIERS";
            }, {
                "value": "Q_SCORE";
                "detail": "Q_score";
                "name": "Q_SCORE";
            }, {
                "value": "RAMACHANDRAN_OUTLIER";
                "detail": "Molprobity Ramachandran outlier";
                "name": "Molprobity Ramachandran outlier";
            }, {
                "value": "ROTAMER_OUTLIER";
                "detail": "Molprobity rotamer outlier";
                "name": "Molprobity rotamer outlier";
            }, {
                "value": "RSCC";
                "detail": "Real space correlation coefficient";
                "name": "RSCC";
            }, {
                "value": "RSCC_OUTLIER";
                "detail": "Real space density correlation value < 0.65";
                "name": "Real space density correlation outlier";
            }, {
                "value": "RSR";
                "detail": "Real Space R-value";
                "name": "RSR";
            }, {
                "value": "RSRZ";
                "detail": "Real Space R-value z-score";
                "name": "RSRZ";
            }, {
                "value": "RSRZ_OUTLIER";
                "detail": "Real space R-value Z score > 2";
                "name": "Real space outlier";
            }, {
                "value": "S-GLYCOSYLATION_SITE";
                "detail": "Glycan binding to the sulfur atom of a cysteine (Cys) residue";
                "name": "S-Glycosylation Site";
            }, {
                "value": "SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS";
                "detail": "Structural Antibody Database (SAbDab) antibody heavy chain subclass (IGHV1, IGHV2,)";
                "name": "SAbDab Antibody Heavy Chain Subclass";
            }, {
                "value": "SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS";
                "detail": "Structural Antibody Database (SAbDab) antibody light chain subclass (IGLV1, IGLV2, ...)";
                "name": "SAbDab Antibody Light Chain Subclass";
            }, {
                "value": "SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE";
                "detail": "Structural Antibody Database (SAbDab) antibody light chain type (Kappa or Lambda)";
                "name": "SAbDab Antibody Light Chain Type";
            }, {
                "value": "SCOP";
                "detail": "SCOP - Structural Classification of Proteins";
                "name": "SCOP";
            }, {
                "value": "SCOP2B_SUPERFAMILY";
                "detail": "SCOP2B - Structural Classification of Proteins 2 - Superfamily automated assignments";
                "name": "SCOP2B Superfamily";
            }, {
                "value": "SCOP2_FAMILY";
                "detail": "SCOP2 - Structural Classification of Proteins 2 Family";
                "name": "SCOP2 Family";
            }, {
                "value": "SCOP2_SUPERFAMILY";
                "detail": "SCOP2 - Structural Classification of Proteins 2 Superfamily";
                "name": "SCOP2 Superfamily";
            }, {
                "value": "SHEET";
                "detail": "Beta-sheets";
                "name": "Beta-sheets";
            }, {
                "value": "STEREO_OUTLIER";
                "detail": "Stereochemical/chirality outlier";
                "name": "Stereochemical/chirality outlier";
            }, {
                "value": "STRN";
                "detail": "Strand or beta-bridge (protein)";
                "name": "Strand or beta-bridge (protein)";
            }, {
                "value": "SYMM_CLASHES";
                "detail": "Number of symmetry related clashes";
                "name": "SYMM_CLASHES";
            }, {
                "value": "TURN_TY1_P";
                "detail": "Type I turn (protein)";
                "name": "Type I turn (protein)";
            }, {
                "value": "UNASSIGNED_SEC_STRUCT";
                "detail": "Unassigned secondary structure";
                "name": "Unassigned secondary structure";
            }, {
                "value": "UNOBSERVED_ATOM_XYZ";
                "detail": "Unobserved atom coordinates";
                "name": "Unobserved Atoms";
            }, {
                "value": "UNOBSERVED_RESIDUE_XYZ";
                "detail": "Unobserved residue coordinates";
                "name": "Unobserved Residues";
            }, {
                "value": "ZERO_OCCUPANCY_ATOM_XYZ";
                "detail": "Atom coordinates with zero occupancy";
                "name": "Zero Occupancy Atoms";
            }, {
                "value": "ZERO_OCCUPANCY_RESIDUE_XYZ";
                "detail": "Residue coordinates with zero occupancy";
                "name": "Zero Occupancy Residues";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Type (Polymer Instance Feature Summary)";
                "context": "brief";
            }];
            "enum": {
                "ANGLE_OUTLIER": "ANGLE_OUTLIER";
                "ANGLE_OUTLIERS": "ANGLE_OUTLIERS";
                "AVERAGE_OCCUPANCY": "AVERAGE_OCCUPANCY";
                "BEND": "BEND";
                "BINDING_SITE": "BINDING_SITE";
                "BOND_OUTLIER": "BOND_OUTLIER";
                "BOND_OUTLIERS": "BOND_OUTLIERS";
                "C-MANNOSYLATION_SITE": "C-MANNOSYLATION_SITE";
                "CATH": "CATH";
                "CHIRAL_OUTLIERS": "CHIRAL_OUTLIERS";
                "CIS-PEPTIDE": "CIS-PEPTIDE";
                "CLASHES": "CLASHES";
                "ECOD": "ECOD";
                "HELIX_P": "HELIX_P";
                "HELX_LH_PP_P": "HELX_LH_PP_P";
                "HELX_RH_3T_P": "HELX_RH_3T_P";
                "HELX_RH_AL_P": "HELX_RH_AL_P";
                "HELX_RH_PI_P": "HELX_RH_PI_P";
                "LIGAND_COVALENT_LINKAGE": "LIGAND_COVALENT_LINKAGE";
                "LIGAND_INTERACTION": "LIGAND_INTERACTION";
                "LIGAND_METAL_COORDINATION_LINKAGE": "LIGAND_METAL_COORDINATION_LINKAGE";
                "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY": "MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY";
                "MA_QA_METRIC_LOCAL_TYPE_DISTANCE": "MA_QA_METRIC_LOCAL_TYPE_DISTANCE";
                "MA_QA_METRIC_LOCAL_TYPE_ENERGY": "MA_QA_METRIC_LOCAL_TYPE_ENERGY";
                "MA_QA_METRIC_LOCAL_TYPE_IPTM": "MA_QA_METRIC_LOCAL_TYPE_IPTM";
                "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE": "MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE";
                "MA_QA_METRIC_LOCAL_TYPE_OTHER": "MA_QA_METRIC_LOCAL_TYPE_OTHER";
                "MA_QA_METRIC_LOCAL_TYPE_PAE": "MA_QA_METRIC_LOCAL_TYPE_PAE";
                "MA_QA_METRIC_LOCAL_TYPE_PLDDT": "MA_QA_METRIC_LOCAL_TYPE_PLDDT";
                "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM";
                "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1]": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1]";
                "MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1]": "MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1]";
                "MA_QA_METRIC_LOCAL_TYPE_PTM": "MA_QA_METRIC_LOCAL_TYPE_PTM";
                "MA_QA_METRIC_LOCAL_TYPE_ZSCORE": "MA_QA_METRIC_LOCAL_TYPE_ZSCORE";
                "MEMBRANE_SEGMENT": "MEMBRANE_SEGMENT";
                "MOGUL_ANGLE_OUTLIER": "MOGUL_ANGLE_OUTLIER";
                "MOGUL_ANGLE_OUTLIERS": "MOGUL_ANGLE_OUTLIERS";
                "MOGUL_BOND_OUTLIER": "MOGUL_BOND_OUTLIER";
                "MOGUL_BOND_OUTLIERS": "MOGUL_BOND_OUTLIERS";
                "MOGUL_RING_OUTLIERS": "MOGUL_RING_OUTLIERS";
                "MOGUL_TORSION_OUTLIERS": "MOGUL_TORSION_OUTLIERS";
                "N-GLYCOSYLATION_SITE": "N-GLYCOSYLATION_SITE";
                "NATOMS_EDS": "NATOMS_EDS";
                "O-GLYCOSYLATION_SITE": "O-GLYCOSYLATION_SITE";
                "OWAB": "OWAB";
                "PLANE_OUTLIERS": "PLANE_OUTLIERS";
                "Q_SCORE": "Q_SCORE";
                "RAMACHANDRAN_OUTLIER": "RAMACHANDRAN_OUTLIER";
                "ROTAMER_OUTLIER": "ROTAMER_OUTLIER";
                "RSCC": "RSCC";
                "RSCC_OUTLIER": "RSCC_OUTLIER";
                "RSR": "RSR";
                "RSRZ": "RSRZ";
                "RSRZ_OUTLIER": "RSRZ_OUTLIER";
                "S-GLYCOSYLATION_SITE": "S-GLYCOSYLATION_SITE";
                "SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS": "SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS";
                "SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS": "SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS";
                "SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE": "SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE";
                "SCOP": "SCOP";
                "SCOP2B_SUPERFAMILY": "SCOP2B_SUPERFAMILY";
                "SCOP2_FAMILY": "SCOP2_FAMILY";
                "SCOP2_SUPERFAMILY": "SCOP2_SUPERFAMILY";
                "SHEET": "SHEET";
                "STEREO_OUTLIER": "STEREO_OUTLIER";
                "STRN": "STRN";
                "SYMM_CLASHES": "SYMM_CLASHES";
                "TURN_TY1_P": "TURN_TY1_P";
                "UNASSIGNED_SEC_STRUCT": "UNASSIGNED_SEC_STRUCT";
                "UNOBSERVED_ATOM_XYZ": "UNOBSERVED_ATOM_XYZ";
                "UNOBSERVED_RESIDUE_XYZ": "UNOBSERVED_RESIDUE_XYZ";
                "ZERO_OCCUPANCY_ATOM_XYZ": "ZERO_OCCUPANCY_ATOM_XYZ";
                "ZERO_OCCUPANCY_RESIDUE_XYZ": "ZERO_OCCUPANCY_RESIDUE_XYZ";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbPolymerStructConn": {
        "ConnectType": {
            "path": "rcsb_polymer_struct_conn.connect_type";
            "type": "string";
            "description": "The connection type.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The connection type.";
                "context": "dictionary";
            }, {
                "text": "Connect Type (Polymer Struct Conn)";
                "context": "brief";
            }];
            "enum": {
                "covalent bond": "covalent bond";
                "covalent modification of a nucleotide base": "covalent modification of a nucleotide base";
                "covalent modification of a nucleotide phosphate": "covalent modification of a nucleotide phosphate";
                "covalent modification of a nucleotide sugar": "covalent modification of a nucleotide sugar";
                "covalent residue modification": "covalent residue modification";
                "disulfide bridge": "disulfide bridge";
                "hydrogen bond": "hydrogen bond";
                "ionic interaction": "ionic interaction";
                "metal coordination": "metal coordination";
                "mismatched base pairs": "mismatched base pairs";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Role": {
            "path": "rcsb_polymer_struct_conn.role";
            "type": "string";
            "description": "The chemical or structural role of the interaction";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The chemical or structural role of the interaction";
                "context": "dictionary";
            }, {
                "text": "Glycosylation Site";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 35;
            }];
            "enum": {
                "C-Mannosylation": "C-Mannosylation";
                "N-Glycosylation": "N-Glycosylation";
                "O-Glycosylation": "O-Glycosylation";
                "S-Glycosylation": "S-Glycosylation";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ValueOrder": {
            "path": "rcsb_polymer_struct_conn.value_order";
            "type": "string";
            "description": "The chemical bond order associated with the specified atoms in\n this contact.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "doub";
                "detail": "double bond";
            }, {
                "value": "quad";
                "detail": "quadruple bond";
            }, {
                "value": "sing";
                "detail": "single bond";
            }, {
                "value": "trip";
                "detail": "triple bond";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical bond order associated with the specified atoms in\n this contact.";
                "context": "dictionary";
            }, {
                "text": "Value Order (Polymer Struct Conn)";
                "context": "brief";
            }];
            "enum": {
                "doub": "doub";
                "quad": "quad";
                "sing": "sing";
                "trip": "trip";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxEntityNonpoly": {
        "Name": {
            "path": "pdbx_entity_nonpoly.name";
            "type": "string";
            "description": "A name for the non-polymer entity";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A name for the non-polymer entity";
                "context": "dictionary";
            }, {
                "text": "Name (Entity Nonpoly)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbNonpolymerEntity": {
        "Details": {
            "path": "rcsb_nonpolymer_entity.details";
            "type": "string";
            "description": "A description of special aspects of the entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the entity.";
                "context": "dictionary";
            }, {
                "text": "Details (Nonpolymer Entity)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "FormulaWeight": {
            "path": "rcsb_nonpolymer_entity.formula_weight";
            "type": "number";
            "description": "Formula mass (KDa) of the entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Formula mass (KDa) of the entity.";
                "context": "dictionary";
            }, {
                "text": "Formula Weight (Nonpolymer Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 12.016;
            "rcsb_current_minimum_value": 0.002;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxDescription": {
            "path": "rcsb_nonpolymer_entity.pdbx_description";
            "type": "string";
            "description": "A description of the nonpolymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of the nonpolymer entity.";
                "context": "dictionary";
            }, {
                "text": "Description (Nonpolymer Entity)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxNumberOfMolecules": {
            "path": "rcsb_nonpolymer_entity.pdbx_number_of_molecules";
            "type": "integer";
            "description": "The number of molecules of the nonpolymer entity in the entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of molecules of the nonpolymer entity in the entry.";
                "context": "dictionary";
            }, {
                "text": "Number Of Molecules (Nonpolymer Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 5345;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbNonpolymerEntityAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_nonpolymer_entity_annotation.type";
            "context_attributes": [{
                "context_value": "SUBJECT_OF_INVESTIGATION";
                "attributes": [{
                    "examples": ["BEZ", "PQM"];
                    "path": "rcsb_nonpolymer_entity_annotation.comp_id";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_nonpolymer_entity_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "CompId": {
            "path": "rcsb_nonpolymer_entity_annotation.comp_id";
            "type": "string";
            "description": "Non-polymer(ligand) chemical component identifier for the entity.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Non-polymer(ligand) chemical component identifier for the entity.";
                "context": "dictionary";
            }, {
                "text": "Component Identifier";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Nonpolymer Molecular Features";
                "priority_order": 10;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_nonpolymer_entity_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_nonpolymer_entity_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_nonpolymer_entity_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "SUBJECT_OF_INVESTIGATION";
                "detail": "Investigated Molecule";
                "name": "Investigated Molecule";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "SUBJECT_OF_INVESTIGATION": "SUBJECT_OF_INVESTIGATION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_nonpolymer_entity_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_nonpolymer_entity_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_nonpolymer_entity_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbNonpolymerEntityContainerIdentifiers": {
        "ChemRefDefId": {
            "path": "rcsb_nonpolymer_entity_container_identifiers.chem_ref_def_id";
            "type": "string";
            "description": "The chemical reference definition identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical reference definition identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Chem Ref Def Id (Nonpolymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "NonpolymerCompId": {
            "path": "rcsb_nonpolymer_entity_container_identifiers.nonpolymer_comp_id";
            "type": "string";
            "description": "Non-polymer(ligand) chemical component identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Non-polymer(ligand) chemical component identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Component Identifier";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Nonpolymer Molecular Features";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PrdId": {
            "path": "rcsb_nonpolymer_entity_container_identifiers.prd_id";
            "type": "string";
            "description": "The BIRD identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The BIRD identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Prd Id (Nonpolymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_nonpolymer_entity_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Nonpolymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbNonpolymerEntityFeature": {
        "Type": {
            "path": "rcsb_nonpolymer_entity_feature.type";
            "type": "string";
            "description": "A type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "SUBJECT_OF_INVESTIGATION";
                "detail": "Investigated Molecule";
                "name": "Investigated Molecule";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Feature Type";
                "context": "brief";
            }];
            "enum": {
                "SUBJECT_OF_INVESTIGATION": "SUBJECT_OF_INVESTIGATION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbNonpolymerEntityFeatureSummary": {
        "rcsb_nested_indexing_context": [{
            "category_name": "feature_summary";
            "category_path": "rcsb_nonpolymer_entity_feature_summary.type";
        }];
        "Count": {
            "path": "rcsb_nonpolymer_entity_feature_summary.count";
            "type": "integer";
            "description": "The feature count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The feature count.";
                "context": "dictionary";
            }, {
                "text": "Count (Nonpolymer Entity Feature Summary)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "rcsb_nonpolymer_entity_feature_summary.type";
            "type": "string";
            "description": "Type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "SUBJECT_OF_INVESTIGATION";
                "detail": "Subject molecule of investigation";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Type (Nonpolymer Entity Feature Summary)";
                "context": "brief";
            }];
            "enum": {
                "SUBJECT_OF_INVESTIGATION": "SUBJECT_OF_INVESTIGATION";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbNonpolymerEntityKeywords": {
        "Text": {
            "path": "rcsb_nonpolymer_entity_keywords.text";
            "type": "string";
            "description": "Keywords describing this non-polymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Keywords describing this non-polymer entity.";
                "context": "dictionary";
            }, {
                "text": "Text (Nonpolymer Entity Keywords)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbNonpolymerEntityNameCom": {
        "Name": {
            "path": "rcsb_nonpolymer_entity_name_com.name";
            "type": "string";
            "description": "A common name for the nonpolymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A common name for the nonpolymer entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Nonpolymer Entity Name Com)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbPubmedContainerIdentifiers": {
        "PubmedId": {
            "path": "rcsb_pubmed_container_identifiers.pubmed_id";
            "type": "integer";
            "description": "UID assigned to each PubMed record.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "PubMed ID";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 18;
            }];
            "rcsb_current_maximum_value": 40178595;
            "rcsb_current_minimum_value": 5;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbPubmedAbstractText": {
        "path": "rcsb_pubmed_abstract_text";
        "type": "string";
        "description": "A concise, accurate and factual mini-version of the paper contents.";
        "rcsb_search_context": ["full-text"];
        "rcsb_description": [{
            "text": "PubMed Abstract";
            "context": "brief";
        }];
        "rcsb_search_group": [{
            "group_name": "Publications Primary";
            "priority_order": 30;
        }];
        "operator": {
            "ContainsPhrase": "contains_phrase";
            "ContainsWords": "contains_words";
        };
    };
    "RcsbPubmedMeshDescriptorsLineage": {
        "Id": {
            "path": "rcsb_pubmed_mesh_descriptors_lineage.id";
            "type": "string";
            "description": "Identifier for MeSH classification term.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "MeSH Identifier";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 35;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "rcsb_pubmed_mesh_descriptors_lineage.name";
            "type": "string";
            "description": "MeSH classification term.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_description": [{
                "text": "MeSH Descriptor";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Publications Primary";
                "priority_order": 36;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Depth": {
            "path": "rcsb_pubmed_mesh_descriptors_lineage.depth";
            "type": "integer";
            "description": "Hierarchy depth.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Depth (Pubmed Mesh Descriptors Lineage)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 13;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbClusterMembership": {
        "ClusterId": {
            "path": "rcsb_cluster_membership.cluster_id";
            "type": "integer";
            "description": "Identifier for a cluster at the specified level of sequence identity within the cluster data set.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Identifier for a cluster at the specified level of sequence identity within the cluster data set.";
                "context": "dictionary";
            }, {
                "text": "Cluster Identifier";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1080497;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Identity": {
            "path": "rcsb_cluster_membership.identity";
            "type": "integer";
            "description": "Sequence identity expressed as an integer percent value.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Sequence identity expressed as an integer percent value.";
                "context": "dictionary";
            }, {
                "text": "Cluster Sequence Identity";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 30;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EntityPoly": {
        "RcsbEntityPolymerType": {
            "path": "entity_poly.rcsb_entity_polymer_type";
            "type": "string";
            "description": "A coarse-grained polymer entity type.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "DNA";
                "detail": "polydeoxyribonucleotide";
            }, {
                "value": "NA-hybrid";
                "detail": "polydeoxyribonucleotide/polyribonucleotide hybrid";
            }, {
                "value": "Other";
                "detail": "polysaccharide(D), polysaccharide(L), cyclic-pseudo-peptide, peptide nucleic acid, or other";
            }, {
                "value": "Protein";
                "detail": "polypeptide(D) or polypeptide(L)";
            }, {
                "value": "RNA";
                "detail": "polyribonucleotide";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A coarse-grained polymer entity type.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 15;
            }];
            "enum": {
                "DNA": "DNA";
                "NA-hybrid": "NA-hybrid";
                "Other": "Other";
                "Protein": "Protein";
                "RNA": "RNA";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbMutationCount": {
            "path": "entity_poly.rcsb_mutation_count";
            "type": "integer";
            "description": "Number of engineered mutations engineered in the sample sequence.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of engineered mutations engineered in the sample sequence.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Mutation Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 657;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RcsbSampleSequenceLength": {
            "path": "entity_poly.rcsb_sample_sequence_length";
            "type": "integer";
            "description": "The monomer length of the sample sequence.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The monomer length of the sample sequence.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Sequence Length";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 19000;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "EntitySrcGen": {
        "GeneSrcTissue": {
            "path": "entity_src_gen.gene_src_tissue";
            "type": "string";
            "description": "The tissue of the natural organism from which the gene was\n obtained.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The tissue of the natural organism from which the gene was\n obtained.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Tissue (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxDescription": {
            "path": "entity_src_gen.pdbx_description";
            "type": "string";
            "description": "Information on the source which is not given elsewhere.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Information on the source which is not given elsewhere.";
                "context": "dictionary";
            }, {
                "text": "Description (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcAtcc": {
            "path": "entity_src_gen.pdbx_gene_src_atcc";
            "type": "string";
            "description": "American Type Culture Collection tissue culture number.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "American Type Culture Collection tissue culture number.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Atcc (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcCell": {
            "path": "entity_src_gen.pdbx_gene_src_cell";
            "type": "string";
            "description": "Cell type.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Cell type.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Cell (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcCellLine": {
            "path": "entity_src_gen.pdbx_gene_src_cell_line";
            "type": "string";
            "description": "The specific line of cells.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The specific line of cells.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Cell Line (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcCellularLocation": {
            "path": "entity_src_gen.pdbx_gene_src_cellular_location";
            "type": "string";
            "description": "Identifies the location inside (or outside) the cell.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Identifies the location inside (or outside) the cell.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Cellular Location (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcOrgan": {
            "path": "entity_src_gen.pdbx_gene_src_organ";
            "type": "string";
            "description": "Organized group of tissues that carries on a specialized function.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Organized group of tissues that carries on a specialized function.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Organ (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxGeneSrcOrganelle": {
            "path": "entity_src_gen.pdbx_gene_src_organelle";
            "type": "string";
            "description": "Organized structure within cell.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Organized structure within cell.";
                "context": "dictionary";
            }, {
                "text": "Gene Src Organelle (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgAtcc": {
            "path": "entity_src_gen.pdbx_host_org_atcc";
            "type": "string";
            "description": "Americal Tissue Culture Collection of the expression system. Where\n full details of the protein production are available it would\n be expected that this item  would be derived from\n _entity_src_gen_express.host_org_culture_collection";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Americal Tissue Culture Collection of the expression system. Where\n full details of the protein production are available it would\n be expected that this item  would be derived from\n _entity_src_gen_express.host_org_culture_collection";
                "context": "dictionary";
            }, {
                "text": "Host Org Atcc (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgCell": {
            "path": "entity_src_gen.pdbx_host_org_cell";
            "type": "string";
            "description": "Cell type from which the gene is derived. Where\n entity.target_id is provided this should be derived from\n details of the target.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Cell type from which the gene is derived. Where\n entity.target_id is provided this should be derived from\n details of the target.";
                "context": "dictionary";
            }, {
                "text": "Host Org Cell (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgCellLine": {
            "path": "entity_src_gen.pdbx_host_org_cell_line";
            "type": "string";
            "description": "A specific line of cells used as the expression system. Where\n full details of the protein production are available it would\n be expected that this item would be derived from\n entity_src_gen_express.host_org_cell_line";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A specific line of cells used as the expression system. Where\n full details of the protein production are available it would\n be expected that this item would be derived from\n entity_src_gen_express.host_org_cell_line";
                "context": "dictionary";
            }, {
                "text": "Host Org Cell Line (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgCellularLocation": {
            "path": "entity_src_gen.pdbx_host_org_cellular_location";
            "type": "string";
            "description": "Identifies the location inside (or outside) the cell which\n expressed the molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Identifies the location inside (or outside) the cell which\n expressed the molecule.";
                "context": "dictionary";
            }, {
                "text": "Host Org Cellular Location (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgCultureCollection": {
            "path": "entity_src_gen.pdbx_host_org_culture_collection";
            "type": "string";
            "description": "Culture collection of the expression system. Where\n full details of the protein production are available it would\n be expected that this item  would be derived somehwere, but\n exactly where is not clear.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Culture collection of the expression system. Where\n full details of the protein production are available it would\n be expected that this item  would be derived somehwere, but\n exactly where is not clear.";
                "context": "dictionary";
            }, {
                "text": "Host Org Culture Collection (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgOrgan": {
            "path": "entity_src_gen.pdbx_host_org_organ";
            "type": "string";
            "description": "Specific organ which expressed the molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Specific organ which expressed the molecule.";
                "context": "dictionary";
            }, {
                "text": "Host Org Organ (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgOrganelle": {
            "path": "entity_src_gen.pdbx_host_org_organelle";
            "type": "string";
            "description": "Specific organelle which expressed the molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Specific organelle which expressed the molecule.";
                "context": "dictionary";
            }, {
                "text": "Host Org Organelle (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgTissue": {
            "path": "entity_src_gen.pdbx_host_org_tissue";
            "type": "string";
            "description": "The specific tissue which expressed the molecule. Where full details\n of the protein production are available it would be expected that this\n item would be derived from _entity_src_gen_express.host_org_tissue";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The specific tissue which expressed the molecule. Where full details\n of the protein production are available it would be expected that this\n item would be derived from _entity_src_gen_express.host_org_tissue";
                "context": "dictionary";
            }, {
                "text": "Host Org Tissue (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgTissueFraction": {
            "path": "entity_src_gen.pdbx_host_org_tissue_fraction";
            "type": "string";
            "description": "The fraction of the tissue which expressed the\nmolecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The fraction of the tissue which expressed the\nmolecule.";
                "context": "dictionary";
            }, {
                "text": "Host Org Tissue Fraction (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgVector": {
            "path": "entity_src_gen.pdbx_host_org_vector";
            "type": "string";
            "description": "Identifies the vector used. Where full details of the protein\n production are available it would be expected that this item\n would be derived from _entity_src_gen_clone.vector_name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Identifies the vector used. Where full details of the protein\n production are available it would be expected that this item\n would be derived from _entity_src_gen_clone.vector_name.";
                "context": "dictionary";
            }, {
                "text": "Host Org Vector (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxHostOrgVectorType": {
            "path": "entity_src_gen.pdbx_host_org_vector_type";
            "type": "string";
            "description": "Identifies the type of vector used (plasmid, virus, or cosmid).\n Where full details of the protein production are available it\n would be expected that this item would be derived from\n _entity_src_gen_express.vector_type.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Identifies the type of vector used (plasmid, virus, or cosmid).\n Where full details of the protein production are available it\n would be expected that this item would be derived from\n _entity_src_gen_express.vector_type.";
                "context": "dictionary";
            }, {
                "text": "Host Org Vector Type (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PlasmidName": {
            "path": "entity_src_gen.plasmid_name";
            "type": "string";
            "description": "The name of the plasmid that produced the entity in the host\n organism. Where full details of the protein production are available\n it would be expected that this item would be derived from\n _pdbx_construct.name of the construct pointed to from\n _entity_src_gen_express.plasmid_id.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The name of the plasmid that produced the entity in the host\n organism. Where full details of the protein production are available\n it would be expected that this item would be derived from\n _pdbx_construct.name of the construct pointed to from\n _entity_src_gen_express.plasmid_id.";
                "context": "dictionary";
            }, {
                "text": "Plasmid Name (Entity Src Gen)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "EntitySrcNat": {
        "Details": {
            "path": "entity_src_nat.details";
            "type": "string";
            "description": "A description of special aspects of the organism from which the\n entity was isolated.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the organism from which the\n entity was isolated.";
                "context": "dictionary";
            }, {
                "text": "Details (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxAtcc": {
            "path": "entity_src_nat.pdbx_atcc";
            "type": "string";
            "description": "Americal Tissue Culture Collection number.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Americal Tissue Culture Collection number.";
                "context": "dictionary";
            }, {
                "text": "Atcc (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxCell": {
            "path": "entity_src_nat.pdbx_cell";
            "type": "string";
            "description": "A particular cell type.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A particular cell type.";
                "context": "dictionary";
            }, {
                "text": "Cell (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxCellLine": {
            "path": "entity_src_nat.pdbx_cell_line";
            "type": "string";
            "description": "The specific line of cells.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The specific line of cells.";
                "context": "dictionary";
            }, {
                "text": "Cell Line (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxCellularLocation": {
            "path": "entity_src_nat.pdbx_cellular_location";
            "type": "string";
            "description": "Identifies the location inside (or outside) the cell.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Identifies the location inside (or outside) the cell.";
                "context": "dictionary";
            }, {
                "text": "Cellular Location (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxOrgan": {
            "path": "entity_src_nat.pdbx_organ";
            "type": "string";
            "description": "Organized group of tissues that carries on a specialized function.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Organized group of tissues that carries on a specialized function.";
                "context": "dictionary";
            }, {
                "text": "Organ (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxOrganelle": {
            "path": "entity_src_nat.pdbx_organelle";
            "type": "string";
            "description": "Organized structure within cell.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Organized structure within cell.";
                "context": "dictionary";
            }, {
                "text": "Organelle (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxPlasmidDetails": {
            "path": "entity_src_nat.pdbx_plasmid_details";
            "type": "string";
            "description": "Details about the plasmid.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Details about the plasmid.";
                "context": "dictionary";
            }, {
                "text": "Plasmid Details (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxPlasmidName": {
            "path": "entity_src_nat.pdbx_plasmid_name";
            "type": "string";
            "description": "The plasmid containing the gene.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The plasmid containing the gene.";
                "context": "dictionary";
            }, {
                "text": "Plasmid Name (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Tissue": {
            "path": "entity_src_nat.tissue";
            "type": "string";
            "description": "The tissue of the organism from which the entity was isolated.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The tissue of the organism from which the entity was isolated.";
                "context": "dictionary";
            }, {
                "text": "Tissue (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "TissueFraction": {
            "path": "entity_src_nat.tissue_fraction";
            "type": "string";
            "description": "The subcellular fraction of the tissue of the organism from\n which the entity was isolated.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The subcellular fraction of the tissue of the organism from\n which the entity was isolated.";
                "context": "dictionary";
            }, {
                "text": "Tissue Fraction (Entity Src Nat)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbEntityHostOrganism": {
        "CommonName": {
            "path": "rcsb_entity_host_organism.common_name";
            "type": "string";
            "description": "The common name of the host organism";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The common name of the host organism";
                "context": "dictionary";
            }, {
                "text": "Common Name (Entity Host Organism)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiCommonNames": {
            "path": "rcsb_entity_host_organism.ncbi_common_names";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiParentScientificName": {
            "path": "rcsb_entity_host_organism.ncbi_parent_scientific_name";
            "type": "string";
            "description": "The parent scientific name in the NCBI taxonomy hierarchy (depth=1) associated with this taxonomy code.\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The parent scientific name in the NCBI taxonomy hierarchy (depth=1) associated with this taxonomy code.\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
                "context": "dictionary";
            }, {
                "text": "Ncbi Parent Scientific Name (Entity Host Organism)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiScientificName": {
            "path": "rcsb_entity_host_organism.ncbi_scientific_name";
            "type": "string";
            "description": "The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.\n\n  This name corresponds to the taxonomy identifier assigned by the PDB depositor.\n\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.\n\n  This name corresponds to the taxonomy identifier assigned by the PDB depositor.\n\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
                "context": "dictionary";
            }, {
                "text": "Expression Organism";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "ScientificName": {
            "path": "rcsb_entity_host_organism.scientific_name";
            "type": "string";
            "description": "The scientific name of the host organism";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The scientific name of the host organism";
                "context": "dictionary";
            }, {
                "text": "Scientific Name (Entity Host Organism)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "TaxonomyLineage": {
            "Depth": {
                "path": "rcsb_entity_host_organism.taxonomy_lineage.depth";
                "type": "integer";
                "description": "Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Depth (Taxonomy Lineage)";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 35;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_entity_host_organism.taxonomy_lineage.id";
                "type": "string";
                "description": "Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.";
                    "context": "dictionary";
                }, {
                    "text": "Expression System Organism Taxonomy ID";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 85;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_entity_host_organism.taxonomy_lineage.name";
                "type": "string";
                "description": "Members of the NCBI Taxonomy lineage as parent taxonomy names.";
                "rcsb_search_context": ["exact-match", "full-text", "suggest"];
                "rcsb_full_text_priority": 20;
                "rcsb_description": [{
                    "text": "Members of the NCBI Taxonomy lineage as parent taxonomy names.";
                    "context": "dictionary";
                }, {
                    "text": "Expression System Organism Taxonomy Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 80;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbEntitySourceOrganism": {
        "CommonName": {
            "path": "rcsb_entity_source_organism.common_name";
            "type": "string";
            "description": "The common name for the source organism assigned by the PDB depositor.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The common name for the source organism assigned by the PDB depositor.";
                "context": "dictionary";
            }, {
                "text": "Common Name (Entity Source Organism)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiCommonNames": {
            "path": "rcsb_entity_source_organism.ncbi_common_names";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiParentScientificName": {
            "path": "rcsb_entity_source_organism.ncbi_parent_scientific_name";
            "type": "string";
            "description": "A parent scientific name in the NCBI taxonomy hierarchy of the source organism assigned by the PDB depositor.\n  For cellular organism this corresponds to a superkingdom (e.g., Archaea, Bacteria, Eukaryota).  For viruses this\n  corresponds to a clade (e.g.  Adnaviria, Bicaudaviridae, Clavaviridae). For other and unclassified entries this\n  corresponds to the first level of any taxonomic rank below the root level.\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A parent scientific name in the NCBI taxonomy hierarchy of the source organism assigned by the PDB depositor.\n  For cellular organism this corresponds to a superkingdom (e.g., Archaea, Bacteria, Eukaryota).  For viruses this\n  corresponds to a clade (e.g.  Adnaviria, Bicaudaviridae, Clavaviridae). For other and unclassified entries this\n  corresponds to the first level of any taxonomic rank below the root level.\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
                "context": "dictionary";
            }, {
                "text": "Parent Scientific Name (typically superkingdom or clade)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 60;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "NcbiScientificName": {
            "path": "rcsb_entity_source_organism.ncbi_scientific_name";
            "type": "string";
            "description": "The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.\n\n  This name corresponds to the taxonomy identifier assigned by the PDB depositor.\n\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.\n\n  This name corresponds to the taxonomy identifier assigned by the PDB depositor.\n\n\nReferences:\n\nSayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,\nChurch DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,\nHelmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,\nMiller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,\nSherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,\nTatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources\nof the National Center for Biotechnology Information. Nucleic Acids\nRes. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.\n\nBenson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).\nGenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.\nEpub 2008 Oct 21.";
                "context": "dictionary";
            }, {
                "text": "Scientific Name of the Source Organism";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 55;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "ScientificName": {
            "path": "rcsb_entity_source_organism.scientific_name";
            "type": "string";
            "description": "The scientific name of the source organism assigned by the PDB depositor.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The scientific name of the source organism assigned by the PDB depositor.";
                "context": "dictionary";
            }, {
                "text": "Scientific Name (Entity Source Organism)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SourceType": {
            "path": "rcsb_entity_source_organism.source_type";
            "type": "string";
            "description": "The source type for the entity";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The source type for the entity";
                "context": "dictionary";
            }, {
                "text": "Source Organism Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 65;
            }];
            "enum": {
                "genetically engineered": "genetically engineered";
                "natural": "natural";
                "synthetic": "synthetic";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "TaxonomyLineage": {
            "Depth": {
                "path": "rcsb_entity_source_organism.taxonomy_lineage.depth";
                "type": "integer";
                "description": "Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Depth (Taxonomy Lineage)";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 36;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_entity_source_organism.taxonomy_lineage.id";
                "type": "string";
                "description": "Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.";
                    "context": "dictionary";
                }, {
                    "text": "Source Organism Taxonomy ID (Full Lineage)";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 50;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_entity_source_organism.taxonomy_lineage.name";
                "type": "string";
                "description": "Memebers of the NCBI Taxonomy lineage as parent taxonomy names.";
                "rcsb_search_context": ["exact-match", "full-text", "suggest"];
                "rcsb_full_text_priority": 20;
                "rcsb_description": [{
                    "text": "Memebers of the NCBI Taxonomy lineage as parent taxonomy names.";
                    "context": "dictionary";
                }, {
                    "text": "Source Organism Taxonomy Name (Full Lineage)";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 45;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
        "RcsbGeneName": {
            "Value": {
                "path": "rcsb_entity_source_organism.rcsb_gene_name.value";
                "type": "string";
                "description": "Gene name.";
                "rcsb_search_context": ["exact-match", "suggest"];
                "rcsb_full_text_priority": 20;
                "rcsb_description": [{
                    "text": "Gene name.";
                    "context": "dictionary";
                }, {
                    "text": "Gene Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 40;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
    };
    "RcsbPolymerEntity": {
        "FormulaWeight": {
            "path": "rcsb_polymer_entity.formula_weight";
            "type": "number";
            "description": "Formula mass (KDa) of the entity.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Formula mass (KDa) of the entity.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Molecular Weight";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 6061.921;
            "rcsb_current_minimum_value": 0.158;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PdbxDescription": {
            "path": "rcsb_polymer_entity.pdbx_description";
            "type": "string";
            "description": "A description of the polymer entity.";
            "rcsb_search_context": ["exact-match", "full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "A description of the polymer entity.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Description";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PdbxNumberOfMolecules": {
            "path": "rcsb_polymer_entity.pdbx_number_of_molecules";
            "type": "integer";
            "description": "The number of molecules of the entity in the entry.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of molecules of the entity in the entry.";
                "context": "dictionary";
            }, {
                "text": "Number Of Molecules (Polymer Entity)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1356;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RcsbSourcePartCount": {
            "path": "rcsb_polymer_entity.rcsb_source_part_count";
            "type": "integer";
            "description": "The number of biological sources for the polymer entity. Multiple source contributions\n may come from the same organism (taxonomy).";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of biological sources for the polymer entity. Multiple source contributions\n may come from the same organism (taxonomy).";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Source Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 70;
            }];
            "rcsb_current_maximum_value": 21;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RcsbSourceTaxonomyCount": {
            "path": "rcsb_polymer_entity.rcsb_source_taxonomy_count";
            "type": "integer";
            "description": "The number of distinct source taxonomies for the polymer entity. Commonly used to identify chimeric polymers.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct source taxonomies for the polymer entity. Commonly used to identify chimeric polymers.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Distinct Taxonomy Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 75;
            }];
            "rcsb_current_maximum_value": 5;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RcsbEcLineage": {
            "Depth": {
                "path": "rcsb_polymer_entity.rcsb_ec_lineage.depth";
                "type": "integer";
                "description": "Members of the enzyme classification lineage as parent classification hierarchy depth (1-N).";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the enzyme classification lineage as parent classification hierarchy depth (1-N).";
                    "context": "dictionary";
                }, {
                    "text": "Depth (Ec Lineage)";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 4;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_polymer_entity.rcsb_ec_lineage.id";
                "type": "string";
                "description": "Members of the enzyme classification lineage as parent classification codes.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the enzyme classification lineage as parent classification codes.";
                    "context": "dictionary";
                }, {
                    "text": "Enzyme Classification Number";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 90;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_polymer_entity.rcsb_ec_lineage.name";
                "type": "string";
                "description": "Members of the enzyme classification lineage as parent classification names.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the enzyme classification lineage as parent classification names.";
                    "context": "dictionary";
                }, {
                    "text": "Enzyme Classification Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 95;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
        "RcsbMacromolecularNamesCombined": {
            "Name": {
                "path": "rcsb_polymer_entity.rcsb_macromolecular_names_combined.name";
                "type": "string";
                "description": "Combined list of macromolecular names.";
                "rcsb_search_context": ["full-text"];
                "rcsb_full_text_priority": 1;
                "rcsb_description": [{
                    "text": "Combined list of macromolecular names.";
                    "context": "dictionary";
                }, {
                    "text": "Macromolecule Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 10;
                }];
                "operator": {
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
        "RcsbEnzymeClassCombined": {
            "Depth": {
                "path": "rcsb_polymer_entity.rcsb_enzyme_class_combined.depth";
                "type": "integer";
                "description": "The enzyme classification hierarchy depth (1-N).";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "The enzyme classification hierarchy depth (1-N).";
                    "context": "dictionary";
                }, {
                    "text": "Depth (Enzyme Class Combined)";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 4;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Ec": {
                "path": "rcsb_polymer_entity.rcsb_enzyme_class_combined.ec";
                "type": "string";
                "description": "Combined list of enzyme class assignments.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Combined list of enzyme class assignments.";
                    "context": "dictionary";
                }, {
                    "text": "Ec (Enzyme Class Combined)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
            "ProvenanceSource": {
                "path": "rcsb_polymer_entity.rcsb_enzyme_class_combined.provenance_source";
                "type": "string";
                "description": "Combined list of enzyme class associated provenance sources.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Combined list of enzyme class associated provenance sources.";
                    "context": "dictionary";
                }, {
                    "text": "Provenance Source (Enzyme Class Combined)";
                    "context": "brief";
                }];
                "enum": {
                    "PDB Primary Data": "PDB Primary Data";
                    "UniProt": "UniProt";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
        "RcsbPolymerNameCombined": {
            "Names": {
                "path": "rcsb_polymer_entity.rcsb_polymer_name_combined.names";
                "type": "array";
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
    };
    "RcsbPolymerEntityAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_polymer_entity_annotation.type";
            "context_attributes": [{
                "context_value": "Pfam";
                "attributes": [{
                    "examples": ["PF00049", "PF00441"];
                    "path": "rcsb_polymer_entity_annotation.annotation_id";
                }, {
                    "examples": ["Insulin/IGF/Relaxin family (Insulin)", "Acyl-CoA dehydrogenase, C-terminal domain (Acyl-CoA_dh_1)"];
                    "path": "rcsb_polymer_entity_annotation.name";
                }];
            }, {
                "context_value": "CARD";
                "attributes": [{
                    "examples": ["ARO:3001059", "ARO:3000015"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.id";
                }, {
                    "examples": ["SHV-1", "SHV beta-lactamase"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "mpstruc";
                "attributes": [{
                    "examples": ["MONOTOPIC MEMBRANE PROTEINS.Oxidases.Monoamine Oxidase A"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.id";
                }, {
                    "examples": ["Monoamine Oxidase A"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "OPM";
                "attributes": [{
                    "examples": ["Transmembrane.Bitopic proteins.Bitopic proteins with NAD(P)-binding Rossmann-fold domains.Flavin containing amine oxidoreductase"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.id";
                }, {
                    "examples": ["Flavin containing amine oxidoreductase"];
                    "path": "rcsb_polymer_entity_annotation.annotation_lineage.name";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_polymer_entity_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 100;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_polymer_entity_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_polymer_entity_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 105;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_polymer_entity_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "CARD";
                "detail": "Comprehensive Antibiotic Resistance Database";
                "name": "CARD";
            }, {
                "value": "GO";
                "detail": "Gene Ontology";
                "name": "Gene Ontology";
            }, {
                "value": "GlyCosmos";
                "detail": "Web portal integrating glycosciences with the life sciences";
                "name": "Web portal integrating glycosciences with the life sciences";
            }, {
                "value": "GlyGen";
                "detail": "Computational and Informatics Resources for Glycoscience";
                "name": "Computational and Informatics Resources for Glycoscience";
            }, {
                "value": "InterPro";
                "detail": "InterPro Protein Family";
                "name": "InterPro Protein Family";
            }, {
                "value": "MemProtMD";
                "detail": "A Database of Membrane Proteins Embedded in Lipid Bilayers";
                "name": "A Database of Membrane Proteins Embedded in Lipid Bilayers";
            }, {
                "value": "OPM";
                "detail": "Orientations of Proteins in Membranes (OPM) Database";
                "name": "Orientations of Proteins in Membranes (OPM) Database";
            }, {
                "value": "PDBTM";
                "detail": "Protein Data Bank of Transmembrane Proteins";
                "name": "Protein Data Bank of Transmembrane Proteins";
            }, {
                "value": "Pfam";
                "detail": "Pfam Protein Family";
                "name": "Pfam Protein Family";
            }, {
                "value": "mpstruc";
                "detail": "Membrane Proteins of Known 3D Structure";
                "name": "Membrane Proteins of Known 3D Structure";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "CARD": "CARD";
                "GO": "GO";
                "GlyCosmos": "GlyCosmos";
                "GlyGen": "GlyGen";
                "InterPro": "InterPro";
                "MemProtMD": "MemProtMD";
                "OPM": "OPM";
                "PDBTM": "PDBTM";
                "Pfam": "Pfam";
                "mpstruc": "mpstruc";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_polymer_entity_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 5;
                "rcsb_current_minimum_value": 0;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_polymer_entity_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 110;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_polymer_entity_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 115;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbPolymerEntityContainerIdentifiers": {
        "ChemCompMonomers": {
            "path": "rcsb_polymer_entity_container_identifiers.chem_comp_monomers";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ChemRefDefId": {
            "path": "rcsb_polymer_entity_container_identifiers.chem_ref_def_id";
            "type": "string";
            "description": "The chemical reference definition identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical reference definition identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Chem Ref Def Id (Polymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_polymer_entity_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Polymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PrdId": {
            "path": "rcsb_polymer_entity_container_identifiers.prd_id";
            "type": "string";
            "description": "The BIRD identifier for the entity in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The BIRD identifier for the entity in this container.";
                "context": "dictionary";
            }, {
                "text": "Prd Id (Polymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_polymer_entity_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity container formed by\n an underscore separated concatenation of entry and entity identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Polymer Entity Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ReferenceSequenceIdentifiers": {
            "rcsb_nested_indexing_context": [{
                "category_name": "reference_sequence_identifiers";
                "category_path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name";
                "context_attributes": [{
                    "context_value": "UniProt";
                    "attributes": [{
                        "examples": ["P01308", "P0CX43"];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }, {
                        "examples": [0.25, 0.75];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.reference_sequence_coverage";
                        "rcsb_current_minimum_value": 0.00026200873362445414;
                        "rcsb_current_maximum_value": 1;
                    }, {
                        "examples": [0.25, 0.75];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.entity_sequence_coverage";
                        "rcsb_current_minimum_value": 0.001098901098901099;
                        "rcsb_current_maximum_value": 1;
                    }];
                }, {
                    "context_value": "GenBank";
                    "attributes": [{
                        "examples": [12057205, 1329886537];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }];
                }, {
                    "context_value": "NORINE";
                    "attributes": [{
                        "examples": ["NOR00033", "NOR00972"];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }];
                }];
            }];
            "DatabaseAccession": {
                "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                "type": "string";
                "description": "Reference database accession code";
                "rcsb_search_context": ["exact-match", "suggest"];
                "rcsb_full_text_priority": 20;
                "rcsb_description": [{
                    "text": "Reference database accession code";
                    "context": "dictionary";
                }, {
                    "text": "Accession Code(s)";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "ID(s) and Keywords";
                    "priority_order": 40;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "DatabaseIsoform": {
                "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_isoform";
                "type": "string";
                "description": "Reference database identifier for the sequence isoform";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference database identifier for the sequence isoform";
                    "context": "dictionary";
                }, {
                    "text": "Database Isoform (Reference Sequence Identifiers)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "DatabaseName": {
                "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name";
                "type": "string";
                "description": "Reference database name";
                "rcsb_search_context": ["exact-match"];
                "rcsb_enum_annotated": [{
                    "value": "EMBL";
                    "detail": "EMBL";
                }, {
                    "value": "GenBank";
                    "detail": "GenBank";
                }, {
                    "value": "NDB";
                    "detail": "NDB";
                }, {
                    "value": "NORINE";
                    "detail": "NORINE";
                }, {
                    "value": "PDB";
                    "detail": "PDB";
                }, {
                    "value": "PIR";
                    "detail": "PIR";
                }, {
                    "value": "PRF";
                    "detail": "PRF";
                }, {
                    "value": "RefSeq";
                    "detail": "RefSeq";
                }, {
                    "value": "UniProt";
                    "detail": "UniProt";
                }];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference database name";
                    "context": "dictionary";
                }, {
                    "text": "Database Name";
                    "context": "brief";
                }];
                "enum": {
                    "EMBL": "EMBL";
                    "GenBank": "GenBank";
                    "NDB": "NDB";
                    "NORINE": "NORINE";
                    "PDB": "PDB";
                    "PIR": "PIR";
                    "PRF": "PRF";
                    "RefSeq": "RefSeq";
                    "UniProt": "UniProt";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "EntitySequenceCoverage": {
                "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.entity_sequence_coverage";
                "type": "number";
                "description": "Indicates what fraction of this polymer entity sequence is covered by the reference sequence.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Indicates what fraction of this polymer entity sequence is covered by the reference sequence.";
                    "context": "dictionary";
                }, {
                    "text": "Entity Sequence Coverage";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 135;
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "ReferenceSequenceCoverage": {
                "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.reference_sequence_coverage";
                "type": "number";
                "description": "Indicates what fraction of the reference sequence is covered by this polymer entity sequence.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Indicates what fraction of the reference sequence is covered by this polymer entity sequence.";
                    "context": "dictionary";
                }, {
                    "text": "Reference Sequence Coverage";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 130;
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
        };
    };
    "RcsbPolymerEntityFeatureSummary": {
        "rcsb_nested_indexing_context": [{
            "category_name": "feature_summary";
            "category_path": "rcsb_polymer_entity_feature_summary.type";
            "context_attributes": [{
                "context_value": "artifact";
                "attributes": [{
                    "examples": [1, 10];
                    "path": "rcsb_polymer_entity_feature_summary.count";
                    "rcsb_current_minimum_value": 1;
                    "rcsb_current_maximum_value": 22;
                }, {
                    "examples": [0.02, 0.12];
                    "path": "rcsb_polymer_entity_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.0003;
                    "rcsb_current_maximum_value": 0.77839;
                }];
            }, {
                "context_value": "modified_monomer";
                "attributes": [{
                    "examples": [2, 5];
                    "path": "rcsb_polymer_entity_feature_summary.count";
                    "rcsb_current_minimum_value": 1;
                    "rcsb_current_maximum_value": 4128;
                }, {
                    "examples": [0.01, 0.05];
                    "path": "rcsb_polymer_entity_feature_summary.coverage";
                    "rcsb_current_minimum_value": 0.0003;
                    "rcsb_current_maximum_value": 1;
                }];
            }];
        }];
        "Count": {
            "path": "rcsb_polymer_entity_feature_summary.count";
            "type": "integer";
            "description": "The feature count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The feature count.";
                "context": "dictionary";
            }, {
                "text": "Count Per Polymer Entity";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 120;
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Coverage": {
            "path": "rcsb_polymer_entity_feature_summary.coverage";
            "type": "number";
            "description": "The fractional feature coverage relative to the full entity sequence.\n For instance, the fraction of features such as mutations, artifacts or modified monomers\n relative to the length of the entity sequence.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The fractional feature coverage relative to the full entity sequence.\n For instance, the fraction of features such as mutations, artifacts or modified monomers\n relative to the length of the entity sequence.";
                "context": "dictionary";
            }, {
                "text": "Coverage Fraction Per Polymer Entity";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 125;
            }];
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MaximumLength": {
            "path": "rcsb_polymer_entity_feature_summary.maximum_length";
            "type": "integer";
            "description": "The maximum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The maximum feature length.";
                "context": "dictionary";
            }, {
                "text": "Maximum Length (Polymer Entity Feature Summary)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 685;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MinimumLength": {
            "path": "rcsb_polymer_entity_feature_summary.minimum_length";
            "type": "integer";
            "description": "The minimum feature length.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The minimum feature length.";
                "context": "dictionary";
            }, {
                "text": "Minimum Length (Polymer Entity Feature Summary)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 685;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Type": {
            "path": "rcsb_polymer_entity_feature_summary.type";
            "type": "string";
            "description": "Type or category of the feature.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "CARD_MODEL";
                "detail": "Comprehensive Antibiotic Resistance Database Detection Model";
                "name": "CARD AMR Detection Model";
            }, {
                "value": "IMGT_ANTIBODY_DESCRIPTION";
                "detail": "International Immunogenetic Information System (IMGT) antibody description";
                "name": "IMGT Antibody Description";
            }, {
                "value": "IMGT_ANTIBODY_DOMAIN_NAME";
                "detail": "International Immunogenetic Information System (IMGT) domain name";
                "name": "IMGT Antibody Domain Name";
            }, {
                "value": "IMGT_ANTIBODY_GENE_ALLELE_NAME";
                "detail": "International Immunogenetic Information System (IMGT) gene and allele name";
                "name": "IMGT Antibody Gene and Allele Name";
            }, {
                "value": "IMGT_ANTIBODY_ORGANISM_NAME";
                "detail": "International Immunogenetic Information System (IMGT) organism name";
                "name": "IMGT Antibody Organism Name";
            }, {
                "value": "IMGT_ANTIBODY_PROTEIN_NAME";
                "detail": "International Immunogenetic Information System (IMGT) protein name";
                "name": "IMGT Antibody Protein Name";
            }, {
                "value": "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION";
                "detail": "International Immunogenetic Information System (IMGT) receptor description";
                "name": "IMGT Antibody Receptor Description";
            }, {
                "value": "IMGT_ANTIBODY_RECEPTOR_TYPE";
                "detail": "International Immunogenetic Information System (IMGT) receptor type";
                "name": "IMGT Antibody Receptor Type";
            }, {
                "value": "Pfam";
                "detail": "Pfam Protein Family";
                "name": "Pfam Protein Family";
            }, {
                "value": "SABDAB_ANTIBODY_ANTIGEN_NAME";
                "detail": "Structural Antibody Database (SAbDab) antibody antigen name";
                "name": "SAbDab Antibody Antigen Name";
            }, {
                "value": "SABDAB_ANTIBODY_NAME";
                "detail": "Therapeutic Structural Antibody Database (Thera-SAbDab) antibody name";
                "name": "SAbDab Antibody Name";
            }, {
                "value": "SABDAB_ANTIBODY_TARGET";
                "detail": "Therapeutic Structural Antibody Database (Thera-SAbDab) antigen targeted by the antibody";
                "name": "SAbDab Antibody Target";
            }, {
                "value": "artifact";
                "detail": "Cloning artifact, expression tag, linker";
                "name": "Cloning artifact, expression tag, linker";
            }, {
                "value": "modified_monomer";
                "detail": "Modified chemical component";
                "name": "Modified chemical component";
            }, {
                "value": "mutation";
                "detail": "Engineered mutations and chemical modifications";
                "name": "Engineered mutations and chemical modifications";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type or category of the feature.";
                "context": "dictionary";
            }, {
                "text": "Type (Polymer Entity Feature Summary)";
                "context": "brief";
            }];
            "enum": {
                "CARD_MODEL": "CARD_MODEL";
                "IMGT_ANTIBODY_DESCRIPTION": "IMGT_ANTIBODY_DESCRIPTION";
                "IMGT_ANTIBODY_DOMAIN_NAME": "IMGT_ANTIBODY_DOMAIN_NAME";
                "IMGT_ANTIBODY_GENE_ALLELE_NAME": "IMGT_ANTIBODY_GENE_ALLELE_NAME";
                "IMGT_ANTIBODY_ORGANISM_NAME": "IMGT_ANTIBODY_ORGANISM_NAME";
                "IMGT_ANTIBODY_PROTEIN_NAME": "IMGT_ANTIBODY_PROTEIN_NAME";
                "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION": "IMGT_ANTIBODY_RECEPTOR_DESCRIPTION";
                "IMGT_ANTIBODY_RECEPTOR_TYPE": "IMGT_ANTIBODY_RECEPTOR_TYPE";
                "Pfam": "Pfam";
                "SABDAB_ANTIBODY_ANTIGEN_NAME": "SABDAB_ANTIBODY_ANTIGEN_NAME";
                "SABDAB_ANTIBODY_NAME": "SABDAB_ANTIBODY_NAME";
                "SABDAB_ANTIBODY_TARGET": "SABDAB_ANTIBODY_TARGET";
                "artifact": "artifact";
                "modified_monomer": "modified_monomer";
                "mutation": "mutation";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbPolymerEntityKeywords": {
        "Text": {
            "path": "rcsb_polymer_entity_keywords.text";
            "type": "string";
            "description": "Keywords describing this polymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Keywords describing this polymer entity.";
                "context": "dictionary";
            }, {
                "text": "Text (Polymer Entity Keywords)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbPolymerEntityNameCom": {
        "Name": {
            "path": "rcsb_polymer_entity_name_com.name";
            "type": "string";
            "description": "A common name for the polymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A common name for the polymer entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Polymer Entity Name Com)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbPolymerEntityNameSys": {
        "Name": {
            "path": "rcsb_polymer_entity_name_sys.name";
            "type": "string";
            "description": "The systematic name for the polymer entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The systematic name for the polymer entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Polymer Entity Name Sys)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbPolymerEntityGroupMembership": {
        "GroupId": {
            "path": "rcsb_polymer_entity_group_membership.group_id";
            "type": "string";
            "description": "A unique identifier for a group of entities";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Polymer Entity Group ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 110;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AggregationMethod": {
            "path": "rcsb_polymer_entity_group_membership.aggregation_method";
            "type": "string";
            "description": "Method used to establish group membership";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Aggregation Method (Polymer Entity Group Membership)";
                "context": "brief";
            }];
            "enum": {
                "sequence_identity": "sequence_identity";
                "matching_uniprot_accession": "matching_uniprot_accession";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SimilarityCutoff": {
            "path": "rcsb_polymer_entity_group_membership.similarity_cutoff";
            "type": "number";
            "description": "Degree of similarity expressed as a floating-point number";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Similarity Cutoff (Polymer Entity Group Membership)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 100;
            "rcsb_current_minimum_value": 30;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbGenomicLineage": {
        "Id": {
            "path": "rcsb_genomic_lineage.id";
            "type": "string";
            "description": "Automatically assigned ID that uniquely identifies taxonomy, chromosome or gene in the Genome Location Browser.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Chromosomal Locus (Browser ID)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 110;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbMembraneLineage": {
        "Id": {
            "path": "rcsb_membrane_lineage.id";
            "type": "string";
            "description": "Automatically assigned ID for membrane classification term in the Membrane Protein Browser.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Id (Membrane Lineage)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "rcsb_membrane_lineage.name";
            "type": "string";
            "description": "Membrane protein classification term.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Name (Membrane Lineage)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Depth": {
            "path": "rcsb_membrane_lineage.depth";
            "type": "integer";
            "description": "Hierarchy depth.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Depth (Membrane Lineage)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 2;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "PdbxStructAssembly": {
        "Details": {
            "path": "pdbx_struct_assembly.details";
            "type": "string";
            "description": "A description of special aspects of the macromolecular assembly.\n\n               In the PDB, 'representative helical assembly', 'complete point assembly',\n\t       'complete icosahedral assembly', 'software_defined_assembly', 'author_defined_assembly',\n\t       and 'author_and_software_defined_assembly' are considered \"biologically relevant assemblies.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A description of special aspects of the macromolecular assembly.\n\n               In the PDB, 'representative helical assembly', 'complete point assembly',\n\t       'complete icosahedral assembly', 'software_defined_assembly', 'author_defined_assembly',\n\t       and 'author_and_software_defined_assembly' are considered \"biologically relevant assemblies.";
                "context": "dictionary";
            }, {
                "text": "Details (Struct Assembly)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "OligomericDetails": {
            "path": "pdbx_struct_assembly.oligomeric_details";
            "type": "string";
            "description": "Provides the details of the oligomeric state of the assembly.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Provides the details of the oligomeric state of the assembly.";
                "context": "dictionary";
            }, {
                "text": "Enter the oligomeric state of your system. You may select unknown if you have no biophysical evidence to support any choice.";
                "context": "deposition";
            }, {
                "text": "Oligomeric Details (Struct Assembly)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "RcsbDetails": {
            "path": "pdbx_struct_assembly.rcsb_details";
            "type": "string";
            "description": "A filtered description of the macromolecular assembly.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A filtered description of the macromolecular assembly.";
                "context": "dictionary";
            }, {
                "text": "Details (Struct Assembly)";
                "context": "brief";
            }];
            "enum": {
                "author_and_software_defined_assembly": "author_and_software_defined_assembly";
                "author_defined_assembly": "author_defined_assembly";
                "software_defined_assembly": "software_defined_assembly";
            };
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxStructAssemblyAuthEvidence": {
        "Details": {
            "path": "pdbx_struct_assembly_auth_evidence.details";
            "type": "string";
            "description": "Provides any additional information regarding the evidence of this assembly";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Provides any additional information regarding the evidence of this assembly";
                "context": "dictionary";
            }, {
                "text": "Assembly Experimental Support Details";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 75;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "ExperimentalSupport": {
            "path": "pdbx_struct_assembly_auth_evidence.experimental_support";
            "type": "string";
            "description": "Provides the experimental method to determine the state of this assembly";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Provides the experimental method to determine the state of this assembly";
                "context": "dictionary";
            }, {
                "text": "Assembly Experimental Support";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 70;
            }];
            "enum": {
                "NMR Distance Restraints": "NMR Distance Restraints";
                "NMR relaxation study": "NMR relaxation study";
                "SAXS": "SAXS";
                "assay for oligomerization": "assay for oligomerization";
                "cross-linking": "cross-linking";
                "electron microscopy": "electron microscopy";
                "equilibrium centrifugation": "equilibrium centrifugation";
                "fluorescence resonance energy transfer": "fluorescence resonance energy transfer";
                "gel filtration": "gel filtration";
                "homology": "homology";
                "immunoprecipitation": "immunoprecipitation";
                "isothermal titration calorimetry": "isothermal titration calorimetry";
                "light scattering": "light scattering";
                "mass spectrometry": "mass spectrometry";
                "microscopy": "microscopy";
                "native gel electrophoresis": "native gel electrophoresis";
                "none": "none";
                "scanning transmission electron microscopy": "scanning transmission electron microscopy";
                "surface plasmon resonance": "surface plasmon resonance";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbAssemblyContainerIdentifiers": {
        "AssemblyId": {
            "path": "rcsb_assembly_container_identifiers.assembly_id";
            "type": "string";
            "description": "Assembly identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Assembly identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Assembly ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "ID(s) and Keywords";
                "priority_order": 25;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_assembly_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Assembly Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_assembly_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this assembly container formed by\n a dash separated concatenation of entry and assembly identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this assembly container formed by\n a dash separated concatenation of entry and assembly identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Assembly Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbAssemblyInfo": {
        "AtomCount": {
            "path": "rcsb_assembly_info.atom_count";
            "type": "integer";
            "description": "The assembly non-hydrogen atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly non-hydrogen atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Number of Non-Hydrogen Atoms per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 5;
            }];
            "rcsb_current_maximum_value": 39959280;
            "rcsb_current_minimum_value": 7;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BranchedAtomCount": {
            "path": "rcsb_assembly_info.branched_atom_count";
            "type": "integer";
            "description": "The assembly non-hydrogen branched entity atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly non-hydrogen branched entity atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Branched Atom Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 43920;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BranchedEntityCount": {
            "path": "rcsb_assembly_info.branched_entity_count";
            "type": "integer";
            "description": "The number of distinct branched entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct branched entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Branched Entity Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 22;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BranchedEntityInstanceCount": {
            "path": "rcsb_assembly_info.branched_entity_instance_count";
            "type": "integer";
            "description": "The number of branched instances in the generated assembly data set.\n This is the total count of branched entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of branched instances in the generated assembly data set.\n This is the total count of branched entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Branched Entity Instance Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 780;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "DeuteratedWaterCount": {
            "path": "rcsb_assembly_info.deuterated_water_count";
            "type": "integer";
            "description": "The assembly deuterated water molecule count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly deuterated water molecule count.";
                "context": "dictionary";
            }, {
                "text": "Number of Deuterated Water Molecules per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 2228;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "HydrogenAtomCount": {
            "path": "rcsb_assembly_info.hydrogen_atom_count";
            "type": "integer";
            "description": "The assembly hydrogen atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly hydrogen atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Number of Hydrogen Atoms per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 10;
            }];
            "rcsb_current_maximum_value": 5795340;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "ModeledPolymerMonomerCount": {
            "path": "rcsb_assembly_info.modeled_polymer_monomer_count";
            "type": "integer";
            "description": "The number of modeled polymer monomers in the assembly coordinate data.\n This is the total count of monomers with reported coordinate data for all polymer\n entity instances in the generated assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of modeled polymer monomers in the assembly coordinate data.\n This is the total count of monomers with reported coordinate data for all polymer\n entity instances in the generated assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Modeled Polymer Residues per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 30;
            }];
            "rcsb_current_maximum_value": 5086680;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NaPolymerEntityTypes": {
            "path": "rcsb_assembly_info.na_polymer_entity_types";
            "type": "string";
            "description": "Nucleic acid polymer entity type categories describing the generated assembly.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "DNA (only)";
                "detail": "DNA entity/entities only";
            }, {
                "value": "DNA/RNA (only)";
                "detail": "Both DNA and RNA polymer entities";
            }, {
                "value": "NA-hybrid (only)";
                "detail": "NA-hybrid entity/entities only";
            }, {
                "value": "Other";
                "detail": "Another polymer type composition";
            }, {
                "value": "RNA (only)";
                "detail": "RNA entity/entities only";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Nucleic acid polymer entity type categories describing the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Na Polymer Entity Types (Assembly Info)";
                "context": "brief";
            }];
            "enum": {
                "DNA (only)": "DNA (only)";
                "DNA/RNA (only)": "DNA/RNA (only)";
                "NA-hybrid (only)": "NA-hybrid (only)";
                "Other": "Other";
                "RNA (only)": "RNA (only)";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "NonpolymerAtomCount": {
            "path": "rcsb_assembly_info.nonpolymer_atom_count";
            "type": "integer";
            "description": "The assembly non-hydrogen non-polymer entity atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly non-hydrogen non-polymer entity atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Nonpolymer Atom Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 206954;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NonpolymerEntityCount": {
            "path": "rcsb_assembly_info.nonpolymer_entity_count";
            "type": "integer";
            "description": "The number of distinct non-polymer entities in the generated assembly exclusive of solvent.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct non-polymer entities in the generated assembly exclusive of solvent.";
                "context": "dictionary";
            }, {
                "text": "Nonpolymer Entity Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 30;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "NonpolymerEntityInstanceCount": {
            "path": "rcsb_assembly_info.nonpolymer_entity_instance_count";
            "type": "integer";
            "description": "The number of non-polymer instances in the generated assembly data set exclusive of solvent.\n This is the total count of non-polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of non-polymer instances in the generated assembly data set exclusive of solvent.\n This is the total count of non-polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Non-polymer Instances per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 45;
            }];
            "rcsb_current_maximum_value": 4593;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerAtomCount": {
            "path": "rcsb_assembly_info.polymer_atom_count";
            "type": "integer";
            "description": "The assembly non-hydrogen polymer entity atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly non-hydrogen polymer entity atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Polymer Atom Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 39959280;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerComposition": {
            "path": "rcsb_assembly_info.polymer_composition";
            "type": "string";
            "description": "Categories describing the polymer entity composition for the generated assembly.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "DNA";
                "detail": "DNA entity/entities only";
            }, {
                "value": "DNA/RNA";
                "detail": "Both DNA and RNA polymer entities";
            }, {
                "value": "NA-hybrid";
                "detail": "DNA/RNA hybrid entity/entities only";
            }, {
                "value": "NA/oligosaccharide";
                "detail": "Both NA and oligosaccharide entities";
            }, {
                "value": "RNA";
                "detail": "RNA entity/entities only";
            }, {
                "value": "heteromeric protein";
                "detail": "multiple protein entities";
            }, {
                "value": "homomeric protein";
                "detail": "single protein entity";
            }, {
                "value": "oligosaccharide";
                "detail": "One of more oligosaccharide entities";
            }, {
                "value": "other";
                "detail": "Neither an individual protein, nucleic acid polymer nor oligosaccharide entity";
            }, {
                "value": "other type composition";
                "detail": "Other combinations of 3 or more polymer types";
            }, {
                "value": "other type pair";
                "detail": "Other combinations of 2 polymer types";
            }, {
                "value": "protein/NA";
                "detail": "Both protein and nucleic acid polymer entities";
            }, {
                "value": "protein/NA/oligosaccharide";
                "detail": "Protein, nucleic acid, and oligosaccharide entities";
            }, {
                "value": "protein/oligosaccharide";
                "detail": "Both protein and oligosaccharide entities";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Categories describing the polymer entity composition for the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Composition (Assembly Info)";
                "context": "brief";
            }];
            "enum": {
                "DNA": "DNA";
                "DNA/RNA": "DNA/RNA";
                "NA-hybrid": "NA-hybrid";
                "NA/oligosaccharide": "NA/oligosaccharide";
                "RNA": "RNA";
                "heteromeric protein": "heteromeric protein";
                "homomeric protein": "homomeric protein";
                "oligosaccharide": "oligosaccharide";
                "other": "other";
                "other type composition": "other type composition";
                "other type pair": "other type pair";
                "protein/NA": "protein/NA";
                "protein/NA/oligosaccharide": "protein/NA/oligosaccharide";
                "protein/oligosaccharide": "protein/oligosaccharide";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PolymerEntityCount": {
            "path": "rcsb_assembly_info.polymer_entity_count";
            "type": "integer";
            "description": "The number of distinct polymer entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct polymer entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountDna": {
            "path": "rcsb_assembly_info.polymer_entity_count_DNA";
            "type": "integer";
            "description": "The number of distinct DNA polymer entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct DNA polymer entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Dna (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountRna": {
            "path": "rcsb_assembly_info.polymer_entity_count_RNA";
            "type": "integer";
            "description": "The number of distinct RNA polymer entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct RNA polymer entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Rna (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 36;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountNucleicAcid": {
            "path": "rcsb_assembly_info.polymer_entity_count_nucleic_acid";
            "type": "integer";
            "description": "The number of distinct nucleic acid polymer entities (DNA or RNA) in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct nucleic acid polymer entities (DNA or RNA) in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Nucleic Acid (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountNucleicAcidHybrid": {
            "path": "rcsb_assembly_info.polymer_entity_count_nucleic_acid_hybrid";
            "type": "integer";
            "description": "The number of distinct hybrid nucleic acid polymer entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct hybrid nucleic acid polymer entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Nucleic Acid Hybrid (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 2;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityCountProtein": {
            "path": "rcsb_assembly_info.polymer_entity_count_protein";
            "type": "integer";
            "description": "The number of distinct protein polymer entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct protein polymer entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Count Protein (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 165;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCount": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count";
            "type": "integer";
            "description": "The number of polymer instances in the generated assembly data set.\n This is the total count of polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of polymer instances in the generated assembly data set.\n This is the total count of polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Polymer Instances (Chains) per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 40;
            }];
            "rcsb_current_maximum_value": 8280;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCountDna": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count_DNA";
            "type": "integer";
            "description": "The number of DNA polymer instances in the generated assembly data set.\n This is the total count of DNA polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of DNA polymer instances in the generated assembly data set.\n This is the total count of DNA polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of DNA Instances (Chains) per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 55;
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCountRna": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count_RNA";
            "type": "integer";
            "description": "The number of RNA polymer instances in the generated assembly data set.\n This is the total count of RNA polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of RNA polymer instances in the generated assembly data set.\n This is the total count of RNA polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of RNA Instances (Chains) per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 60;
            }];
            "rcsb_current_maximum_value": 180;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCountNucleicAcid": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid";
            "type": "integer";
            "description": "The number of nucleic acid polymer instances in the generated assembly data set.\n This is the total count of nucleic acid polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of nucleic acid polymer instances in the generated assembly data set.\n This is the total count of nucleic acid polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Polymer Entity Instance Count Nucleic Acid (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 455;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCountNucleicAcidHybrid": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid_hybrid";
            "type": "integer";
            "description": "The number of hybrid nucleic acide polymer instances in the generated assembly data set.\n This is the total count of hybrid nucleic acid polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of hybrid nucleic acide polymer instances in the generated assembly data set.\n This is the total count of hybrid nucleic acid polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of NA Hybrid Instances (Chains) per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 65;
            }];
            "rcsb_current_maximum_value": 8;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerEntityInstanceCountProtein": {
            "path": "rcsb_assembly_info.polymer_entity_instance_count_protein";
            "type": "integer";
            "description": "The number of protein polymer instances in the generated assembly data set.\n This is the total count of protein polymer entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of protein polymer instances in the generated assembly data set.\n This is the total count of protein polymer entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Protein Instances (Chains) per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 50;
            }];
            "rcsb_current_maximum_value": 8280;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "PolymerMonomerCount": {
            "path": "rcsb_assembly_info.polymer_monomer_count";
            "type": "integer";
            "description": "The number of polymer monomers in sample entity instances comprising the assembly data set.\n This is the total count of monomers for all polymer entity instances\n in the generated assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of polymer monomers in sample entity instances comprising the assembly data set.\n This is the total count of monomers for all polymer entity instances\n in the generated assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Polymer Residues per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 25;
            }];
            "rcsb_current_maximum_value": 5340600;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SelectedPolymerEntityTypes": {
            "path": "rcsb_assembly_info.selected_polymer_entity_types";
            "type": "string";
            "description": "Selected polymer entity type categories describing the generated assembly.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "Nucleic acid (only)";
                "detail": "Nucleic acid (DNA, RNA, NA-hybrid entity/entities only";
            }, {
                "value": "Other";
                "detail": "Another polymer type composition";
            }, {
                "value": "Protein (only)";
                "detail": "protein entity/entities only";
            }, {
                "value": "Protein/NA";
                "detail": "Both protein and nucleic acid (DNA or RNA) polymer entities";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Selected polymer entity type categories describing the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Selected Polymer Entity Types (Assembly Info)";
                "context": "brief";
            }];
            "enum": {
                "Nucleic acid (only)": "Nucleic acid (only)";
                "Other": "Other";
                "Protein (only)": "Protein (only)";
                "Protein/NA": "Protein/NA";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "SolventAtomCount": {
            "path": "rcsb_assembly_info.solvent_atom_count";
            "type": "integer";
            "description": "The assembly non-hydrogen solvent atomic coordinate count.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The assembly non-hydrogen solvent atomic coordinate count.";
                "context": "dictionary";
            }, {
                "text": "Number of Water Molecules per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 15;
            }];
            "rcsb_current_maximum_value": 78540;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SolventEntityCount": {
            "path": "rcsb_assembly_info.solvent_entity_count";
            "type": "integer";
            "description": "The number of distinct solvent entities in the generated assembly.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of distinct solvent entities in the generated assembly.";
                "context": "dictionary";
            }, {
                "text": "Solvent Entity Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "SolventEntityInstanceCount": {
            "path": "rcsb_assembly_info.solvent_entity_instance_count";
            "type": "integer";
            "description": "The number of solvent instances in the generated assembly data set.\n This is the total count of solvent entity instances generated in the assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of solvent instances in the generated assembly data set.\n This is the total count of solvent entity instances generated in the assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Solvent Entity Instance Count (Assembly Info)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 901;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "UnmodeledPolymerMonomerCount": {
            "path": "rcsb_assembly_info.unmodeled_polymer_monomer_count";
            "type": "integer";
            "description": "The number of unmodeled polymer monomers in the assembly coordinate data. This is\n the total count of monomers with unreported coordinate data for all polymer\n entity instances in the generated assembly coordinate data.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of unmodeled polymer monomers in the assembly coordinate data. This is\n the total count of monomers with unreported coordinate data for all polymer\n entity instances in the generated assembly coordinate data.";
                "context": "dictionary";
            }, {
                "text": "Number of Unmodeled Polymer Residues per Assembly";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 35;
            }];
            "rcsb_current_maximum_value": 515880;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbStructSymmetry": {
        "Symbol": {
            "path": "rcsb_struct_symmetry.symbol";
            "type": "string";
            "description": "Symmetry symbol refers to point group or helical symmetry of identical polymeric subunits in Schönflies notation. Contains point group symbol (e.g., C2, C5, D2, T, O, I) or H for helical symmetry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Symmetry Symbol";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 100;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Type": {
            "path": "rcsb_struct_symmetry.type";
            "type": "string";
            "description": "Symmetry type refers to point group or helical symmetry of identical polymeric subunits. Contains point group types (e.g. Cyclic, Dihedral) or Helical for helical symmetry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Symmetry Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 115;
            }];
            "enum": {
                "Asymmetric": "Asymmetric";
                "Cyclic": "Cyclic";
                "Dihedral": "Dihedral";
                "Tetrahedral": "Tetrahedral";
                "Octahedral": "Octahedral";
                "Icosahedral": "Icosahedral";
                "Helical": "Helical";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "OligomericState": {
            "path": "rcsb_struct_symmetry.oligomeric_state";
            "type": "string";
            "description": "Oligomeric state refers to a composition of polymeric subunits in quaternary structure. Quaternary structure may be composed either exclusively of several copies of identical subunits, in which case they are termed homo-oligomers, or alternatively by at least one copy of different subunits (hetero-oligomers). Quaternary structure composed of a single subunit is denoted as 'Monomer'.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Oligomeric State";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 110;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Clusters": {
            "AvgRmsd": {
                "path": "rcsb_struct_symmetry.clusters.avg_rmsd";
                "type": "number";
                "description": "Average RMSD between members of a given cluster.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Average RMSD";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 80.22285641881933;
                "rcsb_current_minimum_value": 0;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
        };
        "Kind": {
            "path": "rcsb_struct_symmetry.kind";
            "type": "string";
            "description": "The granularity at which the symmetry calculation is performed. In 'Global Symmetry' all polymeric subunits in assembly are used. In 'Local Symmetry' only a subset of polymeric subunits is considered. In 'Pseudo Symmetry' the threshold for subunits similarity is relaxed.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Symmetry Class";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 120;
            }];
            "enum": {
                "Global Symmetry": "Global Symmetry";
                "Pseudo Symmetry": "Pseudo Symmetry";
                "Local Symmetry": "Local Symmetry";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbStructSymmetryLineage": {
        "Id": {
            "path": "rcsb_struct_symmetry_lineage.id";
            "type": "string";
            "description": "Automatically assigned ID to uniquely identify the symmetry term in the Protein Symmetry Browser.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Protein Symmetry (Browser ID)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 125;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "rcsb_struct_symmetry_lineage.name";
            "type": "string";
            "description": "A human-readable term describing protein symmetry.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "Symmetry Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Depth": {
            "path": "rcsb_struct_symmetry_lineage.depth";
            "type": "integer";
            "description": "Hierarchy depth.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Depth (Struct Symmetry Lineage)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 4;
            "rcsb_current_minimum_value": 1;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbAssemblyAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_assembly_annotation.type";
            "context_attributes": [{
                "context_value": "MCSA";
                "attributes": [{
                    "examples": ["Glutamate racemase", "Leucyl aminopeptidase"];
                    "path": "rcsb_assembly_annotation.name";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_assembly_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Annotation Id (Assembly Annotation)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 100;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Name": {
            "path": "rcsb_assembly_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Name (Assembly Annotation)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Assembly Features";
                "priority_order": 105;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_assembly_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "MCSA";
                "detail": "A set of catalytically active residues according to the M-CSA.";
                "name": "Mechanism and Catalytic Site Atlas";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Type (Assembly Annotation)";
                "context": "brief";
            }];
            "enum": {
                "MCSA": "MCSA";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbRepositoryHoldingsCurrent": {
        "RepositoryContentTypes": {
            "path": "rcsb_repository_holdings_current.repository_content_types";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbNonpolymerEntityInstanceContainerIdentifiers": {
        "AsymId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.asym_id";
            "type": "string";
            "description": "Instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Asym Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AuthAsymId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.auth_asym_id";
            "type": "string";
            "description": "Author instance identifier for this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Author instance identifier for this container.";
                "context": "dictionary";
            }, {
                "text": "Auth Asym Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "CompId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.comp_id";
            "type": "string";
            "description": "Component identifier for non-polymer entity instance.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Component identifier for non-polymer entity instance.";
                "context": "dictionary";
            }, {
                "text": "Comp Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntityId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.entity_id";
            "type": "string";
            "description": "Entity identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entity identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entity Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "EntryId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.entry_id";
            "type": "string";
            "description": "Entry identifier for the container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Entry identifier for the container.";
                "context": "dictionary";
            }, {
                "text": "Entry Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_nonpolymer_entity_instance_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for each object in this entity instance container formed by\n an 'dot' (.) separated concatenation of entry and entity instance identifiers.";
                "context": "dictionary";
            }, {
                "text": "Id (Nonpolymer Entity Instance Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbNonpolymerInstanceAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_nonpolymer_instance_annotation.type";
            "context_attributes": [{
                "context_value": "HAS_COVALENT_LINKAGE";
                "attributes": [{
                    "examples": ["BMZ", "ATP"];
                    "path": "rcsb_nonpolymer_instance_annotation.comp_id";
                }];
            }, {
                "context_value": "HAS_METAL_COORDINATION_LINKAGE";
                "attributes": [{
                    "examples": ["SF4", "HEM"];
                    "path": "rcsb_nonpolymer_instance_annotation.comp_id";
                }];
            }, {
                "context_value": "HAS_NO_COVALENT_LINKAGE";
                "attributes": [{
                    "examples": ["J5C", "DID"];
                    "path": "rcsb_nonpolymer_instance_annotation.comp_id";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_nonpolymer_instance_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "CompId": {
            "path": "rcsb_nonpolymer_instance_annotation.comp_id";
            "type": "string";
            "description": "Non-polymer (ligand) chemical component identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Non-polymer (ligand) chemical component identifier.";
                "context": "dictionary";
            }, {
                "text": "Component Identifier";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Nonpolymer Molecular Features";
                "priority_order": 15;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_nonpolymer_instance_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_nonpolymer_instance_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_nonpolymer_instance_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "HAS_COVALENT_LINKAGE";
                "detail": "Ligands with inter-molecular covalent interactions involving non-metal elements such as Carbon, Nitrogen, Oxygen, Phosphorus, and Sulfur";
                "name": "Has Covalent Linkage";
            }, {
                "value": "HAS_METAL_COORDINATION_LINKAGE";
                "detail": "Ligands involved in metal coordination";
                "name": "Has Metal Coordination";
            }, {
                "value": "HAS_NO_COVALENT_LINKAGE";
                "detail": "Ligands with no inter-molecular covalent interactions, but may be involved in metal coordination or other non-bonded interactions";
                "name": "Has No Covalent Linkage";
            }, {
                "value": "IS_RSCC_OUTLIER";
                "detail": "Non-polymer is a real space density correlation value outlier (< 0.65)";
                "name": "Real space density correlation value outlier";
            }, {
                "value": "IS_RSRZ_OUTLIER";
                "detail": "Non-polymer is a real space R-value Z score outlier (> 2)";
                "name": "Real space R-value Z score outlier";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "HAS_COVALENT_LINKAGE": "HAS_COVALENT_LINKAGE";
                "HAS_METAL_COORDINATION_LINKAGE": "HAS_METAL_COORDINATION_LINKAGE";
                "HAS_NO_COVALENT_LINKAGE": "HAS_NO_COVALENT_LINKAGE";
                "IS_RSCC_OUTLIER": "IS_RSCC_OUTLIER";
                "IS_RSRZ_OUTLIER": "IS_RSRZ_OUTLIER";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_nonpolymer_instance_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_nonpolymer_instance_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_nonpolymer_instance_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbNonpolymerInstanceValidationScore": {
        "Rscc": {
            "path": "rcsb_nonpolymer_instance_validation_score.RSCC";
            "type": "number";
            "description": "The real space correlation coefficient (RSCC) for the non-polymer entity instance.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The real space correlation coefficient (RSCC) for the non-polymer entity instance.";
                "context": "dictionary";
            }, {
                "text": "Real Space Correlation Coefficient";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": -0.931;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Rsr": {
            "path": "rcsb_nonpolymer_instance_validation_score.RSR";
            "type": "number";
            "description": "The real space R-value (RSR) for the non-polymer entity instance.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The real space R-value (RSR) for the non-polymer entity instance.";
                "context": "dictionary";
            }, {
                "text": "Real Space R-value (RSR)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 7.726;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "IntermolecularClashes": {
            "path": "rcsb_nonpolymer_instance_validation_score.intermolecular_clashes";
            "type": "integer";
            "description": "The number of intermolecular MolProbity clashes cacluated for reported atomic coordinate records.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The number of intermolecular MolProbity clashes cacluated for reported atomic coordinate records.";
                "context": "dictionary";
            }, {
                "text": "Number of Intermolecular Vlashes";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 140;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "IsBestInstance": {
            "path": "rcsb_nonpolymer_instance_validation_score.is_best_instance";
            "type": "string";
            "description": "This molecular instance is ranked as the best quality instance of this nonpolymer entity.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "The molecular instance is not ranked as best instance of the molecule";
            }, {
                "value": "Y";
                "detail": "The molecular instance is ranked as the best instance of the molecule";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This molecular instance is ranked as the best quality instance of this nonpolymer entity.";
                "context": "dictionary";
            }, {
                "text": "Highest Ranking Ligand Instance in Structure";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "IsSubjectOfInvestigation": {
            "path": "rcsb_nonpolymer_instance_validation_score.is_subject_of_investigation";
            "type": "string";
            "description": "This molecular entity is identified as the subject of the current study.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "Molecule instance is not the subject of the current investigation";
            }, {
                "value": "Y";
                "detail": "Molecule instance is the subject of the current investigation";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This molecular entity is identified as the subject of the current study.";
                "context": "dictionary";
            }, {
                "text": "Ligand Identified as Subject of Investigation";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "MogulAngleOutliers": {
            "path": "rcsb_nonpolymer_instance_validation_score.mogul_angle_outliers";
            "type": "integer";
            "description": "Number of bond angle outliers obtained from a CCDC Mogul survey of bond angles  in the CSD small\n   molecule crystal structure database. Outliers are defined as bond angles that have a Z-score\n   less than -2 or greater than 2.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of bond angle outliers obtained from a CCDC Mogul survey of bond angles  in the CSD small\n   molecule crystal structure database. Outliers are defined as bond angles that have a Z-score\n   less than -2 or greater than 2.";
                "context": "dictionary";
            }, {
                "text": "Number of Bond Angle Outliers (|Z|>2)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 72;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MogulAnglesRmsz": {
            "path": "rcsb_nonpolymer_instance_validation_score.mogul_angles_RMSZ";
            "type": "number";
            "description": "The root-mean-square value of the Z-scores of bond angles for the non-polymer instance in degrees\nobtained from a CCDC Mogul survey of bond angles in the CSD small molecule crystal structure database.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The root-mean-square value of the Z-scores of bond angles for the non-polymer instance in degrees\nobtained from a CCDC Mogul survey of bond angles in the CSD small molecule crystal structure database.";
                "context": "dictionary";
            }, {
                "text": "Root-Mean-Aquare Value of the Z-scores for Bond Angles";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 43.78;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MogulBondOutliers": {
            "path": "rcsb_nonpolymer_instance_validation_score.mogul_bond_outliers";
            "type": "integer";
            "description": "Number of bond distance outliers obtained from a CCDC Mogul survey of bond lengths in the CSD small\n   molecule crystal structure database.  Outliers are defined as bond distances that have a Z-score\n   less than -2 or greater than 2.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of bond distance outliers obtained from a CCDC Mogul survey of bond lengths in the CSD small\n   molecule crystal structure database.  Outliers are defined as bond distances that have a Z-score\n   less than -2 or greater than 2.";
                "context": "dictionary";
            }, {
                "text": "Number of Bond Distance Outliers (|Z|>2)";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 75;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "MogulBondsRmsz": {
            "path": "rcsb_nonpolymer_instance_validation_score.mogul_bonds_RMSZ";
            "type": "number";
            "description": "The root-mean-square value of the Z-scores of bond lengths for the nonpolymer instance in Angstroms\nobtained from a CCDC Mogul survey of bond lengths in the CSD small molecule crystal structure database.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The root-mean-square value of the Z-scores of bond lengths for the nonpolymer instance in Angstroms\nobtained from a CCDC Mogul survey of bond lengths in the CSD small molecule crystal structure database.";
                "context": "dictionary";
            }, {
                "text": "Root-Mean-Aquare Value of the Z-scores for Bond Distances";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1108.53;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RankingModelFit": {
            "path": "rcsb_nonpolymer_instance_validation_score.ranking_model_fit";
            "type": "number";
            "description": "The ranking of the model fit score component.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The ranking of the model fit score component.";
                "context": "dictionary";
            }, {
                "text": "Experimental Model Fit Ranking";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "RankingModelGeometry": {
            "path": "rcsb_nonpolymer_instance_validation_score.ranking_model_geometry";
            "type": "number";
            "description": "The ranking of the model geometry score component.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The ranking of the model geometry score component.";
                "context": "dictionary";
            }, {
                "text": "Model Geometry Ranking";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "StereoOutliers": {
            "path": "rcsb_nonpolymer_instance_validation_score.stereo_outliers";
            "type": "integer";
            "description": "Number of stereochemical/chirality errors.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Number of stereochemical/chirality errors.";
                "context": "dictionary";
            }, {
                "text": "Number of Chirality Errors";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 34;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbTargetNeighbors": {
        "Distance": {
            "path": "rcsb_target_neighbors.distance";
            "type": "number";
            "description": "Distance value for this target interaction.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Distance value for this target interaction.";
                "context": "dictionary";
            }, {
                "text": "Target Neighbor Distance";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 5;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "TargetAsymId": {
            "path": "rcsb_target_neighbors.target_asym_id";
            "type": "string";
            "description": "The entity instance identifier for the target of interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The entity instance identifier for the target of interaction.";
                "context": "dictionary";
            }, {
                "text": "Target Entity Instance Identifer";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "TargetCompId": {
            "path": "rcsb_target_neighbors.target_comp_id";
            "type": "string";
            "description": "The chemical component identifier for the target of interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The chemical component identifier for the target of interaction.";
                "context": "dictionary";
            }, {
                "text": "Target Residue Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "TargetEntityId": {
            "path": "rcsb_target_neighbors.target_entity_id";
            "type": "string";
            "description": "The entity identifier for the target of interaction.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The entity identifier for the target of interaction.";
                "context": "dictionary";
            }, {
                "text": "Target Entity Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "TargetIsBound": {
            "path": "rcsb_target_neighbors.target_is_bound";
            "type": "string";
            "description": "A flag to indicate the nature of the target interaction is covalent or metal-coordination.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "N";
                "detail": "The target is not bound";
            }, {
                "value": "Y";
                "detail": "The target is bound through a covalent or metal-coordination interaction";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A flag to indicate the nature of the target interaction is covalent or metal-coordination.";
                "context": "dictionary";
            }, {
                "text": "Target is Bound to Ligand";
                "context": "brief";
            }];
            "enum": {
                "N": "N";
                "Y": "Y";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbUniprotContainerIdentifiers": {
        "ReferenceSequenceIdentifiers": {
            "rcsb_nested_indexing_context": [{
                "category_name": "reference_sequence_identifiers";
                "category_path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name";
                "context_attributes": [{
                    "context_value": "UniProt";
                    "attributes": [{
                        "examples": ["P01308", "P0CX43"];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }, {
                        "examples": [0.25, 0.75];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.reference_sequence_coverage";
                        "rcsb_current_minimum_value": 0.00026200873362445414;
                        "rcsb_current_maximum_value": 1;
                    }, {
                        "examples": [0.25, 0.75];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.entity_sequence_coverage";
                        "rcsb_current_minimum_value": 0.001098901098901099;
                        "rcsb_current_maximum_value": 1;
                    }];
                }, {
                    "context_value": "GenBank";
                    "attributes": [{
                        "examples": [12057205, 1329886537];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }];
                }, {
                    "context_value": "NORINE";
                    "attributes": [{
                        "examples": ["NOR00033", "NOR00972"];
                        "path": "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession";
                    }];
                }];
            }];
            "DatabaseAccession": {
                "path": "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_accession";
                "type": "string";
                "description": "Reference database accession code";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 20;
                "rcsb_description": [{
                    "text": "Reference database accession code";
                    "context": "dictionary";
                }, {
                    "text": "Database Accession (Reference Sequence Identifiers)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "DatabaseIsoform": {
                "path": "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_isoform";
                "type": "string";
                "description": "Reference database identifier for the sequence isoform";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference database identifier for the sequence isoform";
                    "context": "dictionary";
                }, {
                    "text": "Database Isoform (Reference Sequence Identifiers)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "DatabaseName": {
                "path": "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_name";
                "type": "string";
                "description": "Reference database name";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Reference database name";
                    "context": "dictionary";
                }, {
                    "text": "Database Name (Reference Sequence Identifiers)";
                    "context": "brief";
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
        };
    };
    "RcsbUniprotProtein": {
        "Name": {
            "Value": {
                "path": "rcsb_uniprot_protein.name.value";
                "type": "string";
                "description": "Name that allows to unambiguously identify a protein.";
                "rcsb_search_context": ["exact-match", "full-text", "suggest"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "UniProt Molecule Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "ID(s) and Keywords";
                    "priority_order": 35;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbUniprotAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_uniprot_annotation.type";
            "context_attributes": [{
                "context_value": "disease";
                "attributes": [{
                    "examples": ["MONDO:0100118", "MONDO:0002051"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.id";
                }, {
                    "examples": ["hepatocellular carcinoma", "tuberculosis"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "phenotype";
                "attributes": [{
                    "examples": ["immune system phenotype", "mortality/aging"];
                    "path": "rcsb_uniprot_annotation.name";
                }];
            }, {
                "context_value": "GO";
                "attributes": [{
                    "examples": ["GO:0005575", "GO:0005622"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.id";
                }, {
                    "examples": ["cellular_component", "intracellular"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "InterPro";
                "attributes": [{
                    "examples": ["IPR022352", "IPR004825"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.id";
                }, {
                    "examples": ["Insulin family", "Insulin"];
                    "path": "rcsb_uniprot_annotation.annotation_lineage.name";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_uniprot_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_uniprot_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_uniprot_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Polymer Molecular Features";
                "priority_order": 108;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_uniprot_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "disease";
                "detail": "Disease data from OMIM and Disease Ontology represented in Pharos";
                "name": "Pharos Disease";
            }, {
                "value": "phenotype";
                "detail": "Phenotypic data including mouse phenotypes, mouse/human orthologs and GWAS results represented in IMPC";
                "name": "IMPC Phenotype";
            }, {
                "value": "InterPro";
                "detail": "InterPro Protein Family";
                "name": "InterPro Protein Family";
            }, {
                "value": "GO";
                "detail": "Gene Ontology";
                "name": "Gene Ontology";
            }];
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "disease": "disease";
                "phenotype": "phenotype";
                "GO": "GO";
                "InterPro": "InterPro";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_uniprot_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 5;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_uniprot_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 111;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_uniprot_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Polymer Molecular Features";
                    "priority_order": 116;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbUniprotExternalReference": {
        "ReferenceName": {
            "path": "rcsb_uniprot_external_reference.reference_name";
            "type": "string";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "IMPC";
                "name": "IMPC";
                "detail": "Knockout Mouse Phenotyping Program (IMPC)";
            }, {
                "value": "GTEX";
                "name": "GTEx";
                "detail": "Genotype-Tissue Expression (GTEx) Project Portal";
            }, {
                "value": "PHAROS";
                "name": "Pharos";
                "detail": "PHAROS Portal to the Illuminating the Druggable Genome";
            }];
            "rcsb_description": [{
                "text": "UniProt-mapped Resource";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Linked External Resources";
                "priority_order": 10;
            }];
            "enum": {
                "IMPC": "IMPC";
                "GTEX": "GTEX";
                "PHAROS": "PHAROS";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "ChemComp": {
        "FormulaWeight": {
            "path": "chem_comp.formula_weight";
            "type": "number";
            "description": "Formula mass of the chemical component.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Formula mass of the chemical component.";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Molecular Weight";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 70;
            }];
            "rcsb_current_maximum_value": 12016;
            "rcsb_current_minimum_value": 2.014;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "Name": {
            "path": "chem_comp.name";
            "type": "string";
            "description": "The full name of the component.";
            "rcsb_search_context": ["exact-match", "full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The full name of the component.";
                "context": "dictionary";
            }, {
                "text": "Chemical Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 10;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "chem_comp.type";
            "type": "string";
            "description": "For standard polymer components, the type of the monomer.\n Note that monomers that will form polymers are of three types:\n linking monomers, monomers with some type of N-terminal (or 5')\n cap and monomers with some type of C-terminal (or 3') cap.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "D-beta-peptide, C-gamma linking";
                "detail": "Iso-peptide linking D-beta peptide";
            }, {
                "value": "D-gamma-peptide, C-delta linking";
                "detail": "Iso-peptide linking D-gamma peptide";
            }, {
                "value": "D-peptide COOH carboxy terminus";
            }, {
                "value": "D-peptide NH3 amino terminus";
            }, {
                "value": "D-peptide linking";
            }, {
                "value": "D-saccharide";
            }, {
                "value": "D-saccharide, alpha linking";
            }, {
                "value": "D-saccharide, beta linking";
            }, {
                "value": "DNA OH 3 prime terminus";
            }, {
                "value": "DNA OH 5 prime terminus";
            }, {
                "value": "DNA linking";
            }, {
                "value": "L-DNA linking";
            }, {
                "value": "L-RNA linking";
            }, {
                "value": "L-beta-peptide, C-gamma linking";
                "detail": "Iso-peptide linking L-beta peptide";
            }, {
                "value": "L-gamma-peptide, C-delta linking";
                "detail": "Iso-peptide linking L-gamma peptide";
            }, {
                "value": "L-peptide COOH carboxy terminus";
            }, {
                "value": "L-peptide NH3 amino terminus";
            }, {
                "value": "L-peptide linking";
            }, {
                "value": "L-saccharide";
            }, {
                "value": "L-saccharide, alpha linking";
            }, {
                "value": "L-saccharide, beta linking";
            }, {
                "value": "RNA OH 3 prime terminus";
            }, {
                "value": "RNA OH 5 prime terminus";
            }, {
                "value": "RNA linking";
            }, {
                "value": "non-polymer";
            }, {
                "value": "other";
            }, {
                "value": "peptide linking";
            }, {
                "value": "peptide-like";
            }, {
                "value": "saccharide";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "For standard polymer components, the type of the monomer.\n Note that monomers that will form polymers are of three types:\n linking monomers, monomers with some type of N-terminal (or 5')\n cap and monomers with some type of C-terminal (or 3') cap.";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 25;
            }];
            "enum": {
                "D-beta-peptide, C-gamma linking": "D-beta-peptide, C-gamma linking";
                "D-gamma-peptide, C-delta linking": "D-gamma-peptide, C-delta linking";
                "D-peptide COOH carboxy terminus": "D-peptide COOH carboxy terminus";
                "D-peptide NH3 amino terminus": "D-peptide NH3 amino terminus";
                "D-peptide linking": "D-peptide linking";
                "D-saccharide": "D-saccharide";
                "D-saccharide, alpha linking": "D-saccharide, alpha linking";
                "D-saccharide, beta linking": "D-saccharide, beta linking";
                "DNA OH 3 prime terminus": "DNA OH 3 prime terminus";
                "DNA OH 5 prime terminus": "DNA OH 5 prime terminus";
                "DNA linking": "DNA linking";
                "L-DNA linking": "L-DNA linking";
                "L-RNA linking": "L-RNA linking";
                "L-beta-peptide, C-gamma linking": "L-beta-peptide, C-gamma linking";
                "L-gamma-peptide, C-delta linking": "L-gamma-peptide, C-delta linking";
                "L-peptide COOH carboxy terminus": "L-peptide COOH carboxy terminus";
                "L-peptide NH3 amino terminus": "L-peptide NH3 amino terminus";
                "L-peptide linking": "L-peptide linking";
                "L-saccharide": "L-saccharide";
                "L-saccharide, alpha linking": "L-saccharide, alpha linking";
                "L-saccharide, beta linking": "L-saccharide, beta linking";
                "RNA OH 3 prime terminus": "RNA OH 3 prime terminus";
                "RNA OH 5 prime terminus": "RNA OH 5 prime terminus";
                "RNA linking": "RNA linking";
                "non-polymer": "non-polymer";
                "other": "other";
                "peptide linking": "peptide linking";
                "peptide-like": "peptide-like";
                "saccharide": "saccharide";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxReferenceMolecule": {
        "Class": {
            "path": "pdbx_reference_molecule.class";
            "type": "string";
            "description": "Broadly defines the function of the entity.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Broadly defines the function of the entity.";
                "context": "dictionary";
            }, {
                "text": "BIRD Class";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Biologically Interesting Molecules (BIRD)";
                "priority_order": 20;
            }];
            "enum": {
                "Antagonist": "Antagonist";
                "Anthelmintic": "Anthelmintic";
                "Antibiotic": "Antibiotic";
                "Antibiotic, Anthelmintic": "Antibiotic, Anthelmintic";
                "Antibiotic, Antimicrobial": "Antibiotic, Antimicrobial";
                "Antibiotic, Antineoplastic": "Antibiotic, Antineoplastic";
                "Anticancer": "Anticancer";
                "Anticoagulant": "Anticoagulant";
                "Anticoagulant, Antithrombotic": "Anticoagulant, Antithrombotic";
                "Antifungal": "Antifungal";
                "Antigen": "Antigen";
                "Antiinflammatory": "Antiinflammatory";
                "Antimicrobial": "Antimicrobial";
                "Antimicrobial, Antiparasitic, Antibiotic": "Antimicrobial, Antiparasitic, Antibiotic";
                "Antimicrobial, Antiretroviral": "Antimicrobial, Antiretroviral";
                "Antimicrobial, Antitumor": "Antimicrobial, Antitumor";
                "Antineoplastic": "Antineoplastic";
                "Antiparasitic": "Antiparasitic";
                "Antiretroviral": "Antiretroviral";
                "Antithrombotic": "Antithrombotic";
                "Antitumor": "Antitumor";
                "Antiviral": "Antiviral";
                "CASPASE inhibitor": "CASPASE inhibitor";
                "Chaperone binding": "Chaperone binding";
                "Drug delivery": "Drug delivery";
                "Enzyme inhibitor": "Enzyme inhibitor";
                "Glycan component": "Glycan component";
                "Growth factor": "Growth factor";
                "Immunosuppressant": "Immunosuppressant";
                "Inducer": "Inducer";
                "Inhibitor": "Inhibitor";
                "Lantibiotic": "Lantibiotic";
                "Metabolism": "Metabolism";
                "Metal transport": "Metal transport";
                "Nutrient": "Nutrient";
                "Oxidation-reduction": "Oxidation-reduction";
                "Protein binding": "Protein binding";
                "Receptor": "Receptor";
                "Substrate analog": "Substrate analog";
                "Synthetic opioid": "Synthetic opioid";
                "Thrombin inhibitor": "Thrombin inhibitor";
                "Thrombin inhibitor, Trypsin inhibitor": "Thrombin inhibitor, Trypsin inhibitor";
                "Toxin": "Toxin";
                "Transition state mimetic": "Transition state mimetic";
                "Transport activator": "Transport activator";
                "Trypsin inhibitor": "Trypsin inhibitor";
                "Unknown": "Unknown";
                "Water retention": "Water retention";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Description": {
            "path": "pdbx_reference_molecule.description";
            "type": "string";
            "description": "Description of this molecule.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "Description of this molecule.";
                "context": "dictionary";
            }, {
                "text": "Description (Reference Molecule)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "pdbx_reference_molecule.name";
            "type": "string";
            "description": "A name of the entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A name of the entity.";
                "context": "dictionary";
            }, {
                "text": "BIRD Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Biologically Interesting Molecules (BIRD)";
                "priority_order": 10;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "PrdId": {
            "path": "pdbx_reference_molecule.prd_id";
            "type": "string";
            "description": "The value of _pdbx_reference_molecule.prd_id is the unique identifier\n for the reference molecule in this family.\n\n By convention this ID uniquely identifies the reference molecule in\n in the PDB reference dictionary.\n\n The ID has the template form PRD_dddddd (e.g. PRD_000001)";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The value of _pdbx_reference_molecule.prd_id is the unique identifier\n for the reference molecule in this family.\n\n By convention this ID uniquely identifies the reference molecule in\n in the PDB reference dictionary.\n\n The ID has the template form PRD_dddddd (e.g. PRD_000001)";
                "context": "dictionary";
            }, {
                "text": "BIRD ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Biologically Interesting Molecules (BIRD)";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Type": {
            "path": "pdbx_reference_molecule.type";
            "type": "string";
            "description": "Defines the structural classification of the entity.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Defines the structural classification of the entity.";
                "context": "dictionary";
            }, {
                "text": "BIRD Type";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Biologically Interesting Molecules (BIRD)";
                "priority_order": 15;
            }];
            "enum": {
                "Amino acid": "Amino acid";
                "Aminoglycoside": "Aminoglycoside";
                "Ansamycin": "Ansamycin";
                "Anthracycline": "Anthracycline";
                "Anthraquinone": "Anthraquinone";
                "Chalkophore": "Chalkophore";
                "Chalkophore, Polypeptide": "Chalkophore, Polypeptide";
                "Chromophore": "Chromophore";
                "Cyclic depsipeptide": "Cyclic depsipeptide";
                "Cyclic lipopeptide": "Cyclic lipopeptide";
                "Cyclic peptide": "Cyclic peptide";
                "Glycopeptide": "Glycopeptide";
                "Heterocyclic": "Heterocyclic";
                "Imino sugar": "Imino sugar";
                "Keto acid": "Keto acid";
                "Lipoglycopeptide": "Lipoglycopeptide";
                "Lipopeptide": "Lipopeptide";
                "Macrolide": "Macrolide";
                "Non-polymer": "Non-polymer";
                "Nucleoside": "Nucleoside";
                "Oligopeptide": "Oligopeptide";
                "Oligosaccharide": "Oligosaccharide";
                "Peptaibol": "Peptaibol";
                "Peptide-like": "Peptide-like";
                "Polycyclic": "Polycyclic";
                "Polypeptide": "Polypeptide";
                "Polysaccharide": "Polysaccharide";
                "Quinolone": "Quinolone";
                "Siderophore": "Siderophore";
                "Thiolactone": "Thiolactone";
                "Thiopeptide": "Thiopeptide";
                "Unknown": "Unknown";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "PdbxReferenceMoleculeFamily": {
        "Name": {
            "path": "pdbx_reference_molecule_family.name";
            "type": "string";
            "description": "The entity family name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The entity family name.";
                "context": "dictionary";
            }, {
                "text": "Name (Reference Molecule Family)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxReferenceMoleculeRelatedStructures": {
        "DbCode": {
            "path": "pdbx_reference_molecule_related_structures.db_code";
            "type": "string";
            "description": "The database identifier code for the related structure reference.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The database identifier code for the related structure reference.";
                "context": "dictionary";
            }, {
                "text": "Db Code (Reference Molecule Related Structures)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "PdbxReferenceMoleculeSynonyms": {
        "Name": {
            "path": "pdbx_reference_molecule_synonyms.name";
            "type": "string";
            "description": "A synonym name for the entity.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "A synonym name for the entity.";
                "context": "dictionary";
            }, {
                "text": "Name (Reference Molecule Synonyms)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "RcsbChemCompAnnotation": {
        "rcsb_nested_indexing_context": [{
            "category_name": "annotation_type";
            "category_path": "rcsb_chem_comp_annotation.type";
            "context_attributes": [{
                "context_value": "ATC";
                "attributes": [{
                    "examples": ["G02CB02", "C03CC01"];
                    "path": "rcsb_chem_comp_annotation.annotation_lineage.id";
                }, {
                    "examples": ["lisuride", "etacrynic acid"];
                    "path": "rcsb_chem_comp_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "PSI-MOD";
                "attributes": [{
                    "examples": ["MOD:00599", "MOD:01680"];
                    "path": "rcsb_chem_comp_annotation.annotation_lineage.id";
                }, {
                    "examples": ["monomethylated residue", "alpha-amino monomethylated residue"];
                    "path": "rcsb_chem_comp_annotation.annotation_lineage.name";
                }];
            }, {
                "context_value": "Generating Enzyme";
                "attributes": [{
                    "examples": ["protein N-terminal methyltransferase (EC 2.1.1.-)", "autocatalytic"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }, {
                "context_value": "Modification Type";
                "attributes": [{
                    "examples": ["Thyroxine", "N4-methylasparagine"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }, {
                "context_value": "Carbohydrate Anomer";
                "attributes": [{
                    "examples": ["alpha", "beta"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }, {
                "context_value": "Carbohydrate Isomer";
                "attributes": [{
                    "examples": ["D", "L"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }, {
                "context_value": "Carbohydrate Ring";
                "attributes": [{
                    "examples": ["pyranose", "furanose"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }, {
                "context_value": "Carbohydrate Primary Carbonyl Group";
                "attributes": [{
                    "examples": ["aldose", "ketose"];
                    "path": "rcsb_chem_comp_annotation.name";
                }];
            }];
        }];
        "AnnotationId": {
            "path": "rcsb_chem_comp_annotation.annotation_id";
            "type": "string";
            "description": "An identifier for the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "An identifier for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Identifier";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "rcsb_chem_comp_annotation.description";
            "type": "string";
            "description": "A description for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A description for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Description";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "rcsb_chem_comp_annotation.name";
            "type": "string";
            "description": "A name for the annotation.";
            "rcsb_search_context": ["exact-match", "full-text"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A name for the annotation.";
                "context": "dictionary";
            }, {
                "text": "Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 100;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Type": {
            "path": "rcsb_chem_comp_annotation.type";
            "type": "string";
            "description": "A type or category of the annotation.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "ATC";
                "detail": "Anatomical Therapeutic Chemical Classification System (ATC) from the World Health Organization (WHO)";
                "name": "ATC (WHO)";
            }, {
                "value": "Carbohydrate Anomer";
                "detail": "Carbohydrate Anomeric Form";
                "name": "Carbohydrate Anomer";
            }, {
                "value": "Carbohydrate Isomer";
                "detail": "Carbohydrate Isomeric Form";
                "name": "Carbohydrate Isomer";
            }, {
                "value": "Carbohydrate Primary Carbonyl Group";
                "detail": "Carbohydrate Primary Carbonyl Group";
                "name": "Carbohydrate Primary Carbonyl Group";
            }, {
                "value": "Carbohydrate Ring";
                "detail": "Carbohydrate Ring Type";
                "name": "Carbohydrate Ring";
            }, {
                "value": "Generating Enzyme";
                "detail": "Enzyme generating residue modification (RESID)";
                "name": "RESID Generating Enzyme";
            }, {
                "value": "Modification Type";
                "detail": "Modified residue classification (RESID)";
                "name": "RESID Modification";
            }, {
                "value": "PSI-MOD";
                "detail": "Protein Modification Ontology";
                "name": "PSI-MOD";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A type or category of the annotation.";
                "context": "dictionary";
            }, {
                "text": "Annotation Type";
                "context": "brief";
            }];
            "enum": {
                "ATC": "ATC";
                "Carbohydrate Anomer": "Carbohydrate Anomer";
                "Carbohydrate Isomer": "Carbohydrate Isomer";
                "Carbohydrate Primary Carbonyl Group": "Carbohydrate Primary Carbonyl Group";
                "Carbohydrate Ring": "Carbohydrate Ring";
                "Generating Enzyme": "Generating Enzyme";
                "Modification Type": "Modification Type";
                "PSI-MOD": "PSI-MOD";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "AnnotationLineage": {
            "Depth": {
                "path": "rcsb_chem_comp_annotation.annotation_lineage.depth";
                "type": "integer";
                "description": "Members of the annotation lineage as parent lineage depth (1-N)";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent lineage depth (1-N)";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Depth";
                    "context": "brief";
                }];
                "rcsb_current_maximum_value": 18;
                "rcsb_current_minimum_value": 1;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "Id": {
                "path": "rcsb_chem_comp_annotation.annotation_lineage.id";
                "type": "string";
                "description": "Members of the annotation lineage as parent class identifiers.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class identifiers.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Identifier";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 110;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Name": {
                "path": "rcsb_chem_comp_annotation.annotation_lineage.name";
                "type": "string";
                "description": "Members of the annotation lineage as parent class names.";
                "rcsb_search_context": ["exact-match", "full-text"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Members of the annotation lineage as parent class names.";
                    "context": "dictionary";
                }, {
                    "text": "Lineage Name";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 105;
                }];
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                    "ContainsPhrase": "contains_phrase";
                    "ContainsWords": "contains_words";
                };
            };
        };
    };
    "RcsbChemCompContainerIdentifiers": {
        "CompId": {
            "path": "rcsb_chem_comp_container_identifiers.comp_id";
            "type": "string";
            "description": "The chemical component identifier.";
            "rcsb_search_context": ["exact-match", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The chemical component identifier.";
                "context": "dictionary";
            }, {
                "text": "Chemical ID(s)";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 5;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "DrugbankId": {
            "path": "rcsb_chem_comp_container_identifiers.drugbank_id";
            "type": "string";
            "description": "The DrugBank identifier corresponding to the chemical component.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The DrugBank identifier corresponding to the chemical component.";
                "context": "dictionary";
            }, {
                "text": "DrugBank ID(s)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "PrdId": {
            "path": "rcsb_chem_comp_container_identifiers.prd_id";
            "type": "string";
            "description": "The BIRD definition identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The BIRD definition identifier.";
                "context": "dictionary";
            }, {
                "text": "BIRD ID(s)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "RcsbId": {
            "path": "rcsb_chem_comp_container_identifiers.rcsb_id";
            "type": "string";
            "description": "A unique identifier for the chemical definition in this container.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "A unique identifier for the chemical definition in this container.";
                "context": "dictionary";
            }, {
                "text": "Id (Chem Comp Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbChemCompDescriptor": {
        "InChIKey": {
            "path": "rcsb_chem_comp_descriptor.InChIKey";
            "type": "string";
            "description": "Standard IUPAC International Chemical Identifier (InChI) descriptor key\n for the chemical component\n\n InChI, the IUPAC International Chemical Identifier,\n by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi,\n Journal of Cheminformatics, 2015, 7:23";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "Standard IUPAC International Chemical Identifier (InChI) descriptor key\n for the chemical component\n\n InChI, the IUPAC International Chemical Identifier,\n by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi,\n Journal of Cheminformatics, 2015, 7:23";
                "context": "dictionary";
            }, {
                "text": "InChiKey";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 65;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbChemCompInfo": {
        "AtomCountChiral": {
            "path": "rcsb_chem_comp_info.atom_count_chiral";
            "type": "integer";
            "description": "Chemical component chiral atom count";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Chemical component chiral atom count";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Chiral Atom Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 80;
            }];
            "rcsb_current_maximum_value": 52;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "AtomCountHeavy": {
            "path": "rcsb_chem_comp_info.atom_count_heavy";
            "type": "integer";
            "description": "Chemical component heavy atom count";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Chemical component heavy atom count";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Nonhydrogen Atom Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 75;
            }];
            "rcsb_current_maximum_value": 352;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BondCount": {
            "path": "rcsb_chem_comp_info.bond_count";
            "type": "integer";
            "description": "Chemical component total bond count";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Chemical component total bond count";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Bond Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 85;
            }];
            "rcsb_current_maximum_value": 727;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "BondCountAromatic": {
            "path": "rcsb_chem_comp_info.bond_count_aromatic";
            "type": "integer";
            "description": "Chemical component aromatic bond count";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "Chemical component aromatic bond count";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Aromatic Bond Count";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 90;
            }];
            "rcsb_current_maximum_value": 116;
            "rcsb_current_minimum_value": 0;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "InitialDepositionDate": {
            "path": "rcsb_chem_comp_info.initial_deposition_date";
            "type": "string";
            "format": "date";
            "description": "The date the chemical definition was first deposited in the PDB repository.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The date the chemical definition was first deposited in the PDB repository.";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Deposition Date";
                "context": "brief";
            }];
            "rcsb_current_maximum_value": 1742947200000;
            "rcsb_current_minimum_value": 711158400000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
        "InitialReleaseDate": {
            "path": "rcsb_chem_comp_info.initial_release_date";
            "type": "string";
            "format": "date";
            "description": "The initial date the chemical definition was released in the PDB repository.";
            "rcsb_search_context": ["default-match"];
            "rcsb_description": [{
                "text": "The initial date the chemical definition was released in the PDB repository.";
                "context": "dictionary";
            }, {
                "text": "Chemical Component Release Date";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 20;
            }];
            "rcsb_current_maximum_value": 1744156800000;
            "rcsb_current_minimum_value": 105235200000;
            "operator": {
                "Equals": "equals";
                "Greater": "greater";
                "Less": "less";
                "GreaterOrEqual": "greater_or_equal";
                "LessOrEqual": "less_or_equal";
                "Range": "range";
                "RangeClosed": "range_closed";
            };
        };
    };
    "RcsbChemCompRelated": {
        "rcsb_nested_indexing_context": [{
            "category_name": "related_resource";
            "category_path": "rcsb_chem_comp_related.resource_name";
            "context_attributes": [{
                "context_value": "DrugBank";
                "attributes": [{
                    "examples": ["DB06830", "DB07255"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "CCDC/CSD";
                "attributes": [{
                    "examples": ["QAXDEZ", "XEGJEA"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "COD";
                "attributes": [{
                    "examples": [2236573, 7229993];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "RESID";
                "attributes": [{
                    "examples": ["AA0078", "AA0034"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "PubChem";
                "attributes": [{
                    "examples": [3082729, 5289380];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "ChEBI";
                "attributes": [{
                    "examples": ["CHEBI:151557", "CHEBI:6198"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "ChEMBL";
                "attributes": [{
                    "examples": ["CHEMBL1165239", "CHEMBL3330255"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "CAS";
                "attributes": [{
                    "examples": ["2133-34-8", "30565-25-4"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }, {
                "context_value": "Pharos";
                "attributes": [{
                    "examples": ["CHEMBL1165239", "CHEMBL3330255"];
                    "path": "rcsb_chem_comp_related.resource_accession_code";
                }];
            }];
        }];
        "ResourceAccessionCode": {
            "path": "rcsb_chem_comp_related.resource_accession_code";
            "type": "string";
            "description": "The resource identifier code for the related chemical reference.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The resource identifier code for the related chemical reference.";
                "context": "dictionary";
            }, {
                "text": "Identifier Codes";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 95;
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "ResourceName": {
            "path": "rcsb_chem_comp_related.resource_name";
            "type": "string";
            "description": "The resource name for the related chemical reference.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "CAS";
                "detail": "Chemical Abstracts Service (CAS) Registry Number";
                "name": "CAS Registry Number";
            }, {
                "value": "CCDC/CSD";
                "detail": "Cambridge Crystallographic Data Center";
                "name": "CCDC/CSD";
            }, {
                "value": "COD";
                "detail": "Crystallography Open Database";
                "name": "COD";
            }, {
                "value": "ChEBI";
                "detail": "Chemical Entities of Biological Interest (ChEBI)";
                "name": "ChEBI";
            }, {
                "value": "ChEMBL";
                "detail": "ChEMBL, manually curated database of bioactive molecules with drug-like properties";
                "name": "ChEMBL";
            }, {
                "value": "DrugBank";
                "detail": "DrugBank, database containing information on drugs and drug targets";
                "name": "DrugBank";
            }, {
                "value": "Pharos";
                "detail": "User interface to the Knowledge Management Center (KMC) for the Illuminating the Druggable Genome (IDG)";
                "name": "Pharos";
            }, {
                "value": "PubChem";
                "detail": "NCBI PubChem Resource";
                "name": "PubChem";
            }, {
                "value": "RESID";
                "detail": "RESID Database of Protein Modifications";
                "name": "RESID";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The resource name for the related chemical reference.";
                "context": "dictionary";
            }, {
                "text": "Resource Name";
                "context": "brief";
            }];
            "enum": {
                "CAS": "CAS";
                "CCDC/CSD": "CCDC/CSD";
                "COD": "COD";
                "ChEBI": "ChEBI";
                "ChEMBL": "ChEMBL";
                "DrugBank": "DrugBank";
                "Pharos": "Pharos";
                "PubChem": "PubChem";
                "RESID": "RESID";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbChemCompSynonyms": {
        "Name": {
            "path": "rcsb_chem_comp_synonyms.name";
            "type": "string";
            "description": "The synonym of this particular chemical component.";
            "rcsb_search_context": ["full-text", "suggest"];
            "rcsb_full_text_priority": 20;
            "rcsb_description": [{
                "text": "The synonym of this particular chemical component.";
                "context": "dictionary";
            }, {
                "text": "Chemical Synonyms";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 15;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "ProvenanceSource": {
            "path": "rcsb_chem_comp_synonyms.provenance_source";
            "type": "string";
            "description": "The provenance of this synonym.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The provenance of this synonym.";
                "context": "dictionary";
            }, {
                "text": "Chemical Synonym Provenance Source";
                "context": "brief";
            }];
            "enum": {
                "ACDLabs": "ACDLabs";
                "Author": "Author";
                "ChEBI": "ChEBI";
                "ChEMBL": "ChEMBL";
                "DrugBank": "DrugBank";
                "GMML": "GMML";
                "Lexichem": "Lexichem";
                "OpenEye OEToolkits": "OpenEye OEToolkits";
                "OpenEye/Lexichem": "OpenEye/Lexichem";
                "PDB Reference Data": "PDB Reference Data";
                "PDB Reference Data (Preferred)": "PDB Reference Data (Preferred)";
                "PDB-CARE": "PDB-CARE";
                "PubChem": "PubChem";
                "RESID": "RESID";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Type": {
            "path": "rcsb_chem_comp_synonyms.type";
            "type": "string";
            "description": "This data item contains the synonym type.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_enum_annotated": [{
                "value": "Brand Name";
                "detail": "Product chemical name";
            }, {
                "value": "Common Name";
                "detail": "Common chemical name";
            }, {
                "value": "Condensed IUPAC Carbohydrate Symbol";
                "detail": "Condensed IUPAC carbohydrate symbol";
            }, {
                "value": "IUPAC Carbohydrate Symbol";
                "detail": "IUPAC carbohydrate symbol";
            }, {
                "value": "Preferred Common Name";
                "detail": "Preferred common chemical name";
            }, {
                "value": "Preferred Name";
                "detail": "Preferred chemical name";
            }, {
                "value": "Preferred Synonym";
                "detail": "Preferred synonym chemical name";
            }, {
                "value": "SNFG Carbohydrate Symbol";
                "detail": "3D-SNFG carbohydrate symbol";
            }, {
                "value": "Synonym";
                "detail": "Synonym chemical name";
            }, {
                "value": "Systematic Name";
                "detail": "Systematic chemical name";
            }];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "This data item contains the synonym type.";
                "context": "dictionary";
            }, {
                "text": "Chemical Synonym Type";
                "context": "brief";
            }];
            "enum": {
                "Brand Name": "Brand Name";
                "Common Name": "Common Name";
                "Condensed IUPAC Carbohydrate Symbol": "Condensed IUPAC Carbohydrate Symbol";
                "IUPAC Carbohydrate Symbol": "IUPAC Carbohydrate Symbol";
                "Preferred Common Name": "Preferred Common Name";
                "Preferred Name": "Preferred Name";
                "Preferred Synonym": "Preferred Synonym";
                "SNFG Carbohydrate Symbol": "SNFG Carbohydrate Symbol";
                "Synonym": "Synonym";
                "Systematic Name": "Systematic Name";
            };
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "RcsbChemCompTarget": {
        "Name": {
            "path": "rcsb_chem_comp_target.name";
            "type": "string";
            "description": "The chemical component target name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The chemical component target name.";
                "context": "dictionary";
            }, {
                "text": "Drug Target Name";
                "context": "brief";
            }];
            "rcsb_search_group": [{
                "group_name": "Chemical Components";
                "priority_order": 30;
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
    "DrugbankContainerIdentifiers": {
        "DrugbankId": {
            "path": "drugbank_container_identifiers.drugbank_id";
            "type": "string";
            "description": "The DrugBank accession code";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The DrugBank accession code";
                "context": "dictionary";
            }, {
                "text": "Drugbank Id (Drugbank Container Identifiers)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
    };
    "DrugbankInfo": {
        "AffectedOrganisms": {
            "path": "drugbank_info.affected_organisms";
            "type": "array";
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "AtcCodes": {
            "path": "drugbank_info.atc_codes";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "BrandNames": {
            "path": "drugbank_info.brand_names";
            "type": "array";
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "CasNumber": {
            "path": "drugbank_info.cas_number";
            "type": "string";
            "description": "The DrugBank assigned Chemical Abstracts Service identifier.";
            "rcsb_search_context": ["exact-match"];
            "rcsb_full_text_priority": 10;
            "rcsb_description": [{
                "text": "The DrugBank assigned Chemical Abstracts Service identifier.";
                "context": "dictionary";
            }, {
                "text": "Cas Number (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Description": {
            "path": "drugbank_info.description";
            "type": "string";
            "description": "The DrugBank drug description.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The DrugBank drug description.";
                "context": "dictionary";
            }, {
                "text": "Description (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DrugCategories": {
            "path": "drugbank_info.drug_categories";
            "type": "array";
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DrugGroups": {
            "path": "drugbank_info.drug_groups";
            "type": "array";
            "operator": {
                "In": "in";
                "ExactMatch": "exact_match";
            };
        };
        "Indication": {
            "path": "drugbank_info.indication";
            "type": "string";
            "description": "The DrugBank drug indication.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The DrugBank drug indication.";
                "context": "dictionary";
            }, {
                "text": "Indication (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "MechanismOfAction": {
            "path": "drugbank_info.mechanism_of_action";
            "type": "string";
            "description": "The DrugBank drug mechanism of actions.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The DrugBank drug mechanism of actions.";
                "context": "dictionary";
            }, {
                "text": "Mechanism Of Action (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "drugbank_info.name";
            "type": "string";
            "description": "The DrugBank drug name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The DrugBank drug name.";
                "context": "dictionary";
            }, {
                "text": "Name (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Pharmacology": {
            "path": "drugbank_info.pharmacology";
            "type": "string";
            "description": "The DrugBank drug pharmacology.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The DrugBank drug pharmacology.";
                "context": "dictionary";
            }, {
                "text": "Pharmacology (Drugbank Info)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Synonyms": {
            "path": "drugbank_info.synonyms";
            "type": "array";
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "DrugProducts": {
            "Approved": {
                "path": "drugbank_info.drug_products.approved";
                "type": "string";
                "description": "Indicates whether this drug has been approved by the regulating government.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "Indicates whether this drug has been approved by the regulating government.";
                    "context": "dictionary";
                }, {
                    "text": "Drug Is Approved";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 45;
                }];
                "enum": {
                    "N": "N";
                    "Y": "Y";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "Country": {
                "path": "drugbank_info.drug_products.country";
                "type": "string";
                "description": "The country where this commercially available drug has been approved.";
                "rcsb_search_context": ["exact-match"];
                "rcsb_full_text_priority": 10;
                "rcsb_description": [{
                    "text": "The country where this commercially available drug has been approved.";
                    "context": "dictionary";
                }, {
                    "text": "Drug Market Availability";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 60;
                }];
                "enum": {
                    "Canada": "Canada";
                    "EU": "EU";
                    "US": "US";
                };
                "operator": {
                    "In": "in";
                    "ExactMatch": "exact_match";
                };
            };
            "EndedMarketingOn": {
                "path": "drugbank_info.drug_products.ended_marketing_on";
                "type": "string";
                "format": "date";
                "description": "The ending date for market approval.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "The ending date for market approval.";
                    "context": "dictionary";
                }, {
                    "text": "Drug Marketing End";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 55;
                }];
                "rcsb_current_maximum_value": 2543011200000;
                "rcsb_current_minimum_value": -1072915200000;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
            "StartedMarketingOn": {
                "path": "drugbank_info.drug_products.started_marketing_on";
                "type": "string";
                "format": "date";
                "description": "The starting date for market approval.";
                "rcsb_search_context": ["default-match"];
                "rcsb_description": [{
                    "text": "The starting date for market approval.";
                    "context": "dictionary";
                }, {
                    "text": "Drug Marketing Start";
                    "context": "brief";
                }];
                "rcsb_search_group": [{
                    "group_name": "Chemical Components";
                    "priority_order": 50;
                }];
                "rcsb_current_maximum_value": 3376684800000;
                "rcsb_current_minimum_value": -2840140800000;
                "operator": {
                    "Equals": "equals";
                    "Greater": "greater";
                    "Less": "less";
                    "GreaterOrEqual": "greater_or_equal";
                    "LessOrEqual": "less_or_equal";
                    "Range": "range";
                    "RangeClosed": "range_closed";
                };
            };
        };
    };
    "DrugbankTarget": {
        "InteractionType": {
            "path": "drugbank_target.interaction_type";
            "type": "string";
            "description": "The type of target interaction.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The type of target interaction.";
                "context": "dictionary";
            }, {
                "text": "Interaction Type (Drugbank Target)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "Name": {
            "path": "drugbank_target.name";
            "type": "string";
            "description": "The target name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The target name.";
                "context": "dictionary";
            }, {
                "text": "Name (Drugbank Target)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "OrganismCommonName": {
            "path": "drugbank_target.organism_common_name";
            "type": "string";
            "description": "The organism common name.";
            "rcsb_search_context": ["full-text"];
            "rcsb_full_text_priority": 1;
            "rcsb_description": [{
                "text": "The organism common name.";
                "context": "dictionary";
            }, {
                "text": "Organism Common Name (Drugbank Target)";
                "context": "brief";
            }];
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
        "TargetActions": {
            "path": "drugbank_target.target_actions";
            "type": "array";
            "operator": {
                "ContainsPhrase": "contains_phrase";
                "ContainsWords": "contains_words";
            };
        };
    };
};
export type RcsbSearchAttributeType = "rcsb_branched_entity_instance_container_identifiers.asym_id" | "rcsb_branched_entity_instance_container_identifiers.auth_asym_id" | "rcsb_branched_entity_instance_container_identifiers.entity_id" | "rcsb_branched_entity_instance_container_identifiers.entry_id" | "rcsb_branched_entity_instance_container_identifiers.rcsb_id" | "rcsb_branched_instance_annotation.annotation_id" | "rcsb_branched_instance_annotation.description" | "rcsb_branched_instance_annotation.name" | "rcsb_branched_instance_annotation.type" | "rcsb_branched_instance_annotation.annotation_lineage.depth" | "rcsb_branched_instance_annotation.annotation_lineage.id" | "rcsb_branched_instance_annotation.annotation_lineage.name" | "rcsb_branched_instance_feature_summary.count" | "rcsb_branched_instance_feature_summary.coverage" | "rcsb_branched_instance_feature_summary.maximum_length" | "rcsb_branched_instance_feature_summary.minimum_length" | "rcsb_branched_instance_feature_summary.type" | "rcsb_ligand_neighbors.distance" | "rcsb_ligand_neighbors.ligand_asym_id" | "rcsb_ligand_neighbors.ligand_comp_id" | "rcsb_ligand_neighbors.ligand_entity_id" | "rcsb_ligand_neighbors.ligand_is_bound" | "rcsb_id" | "pdbx_entity_branch.rcsb_branched_component_count" | "pdbx_entity_branch.type" | "pdbx_entity_branch_descriptor.descriptor" | "pdbx_entity_branch_descriptor.type" | "rcsb_branched_entity.details" | "rcsb_branched_entity.formula_weight" | "rcsb_branched_entity.pdbx_description" | "rcsb_branched_entity.pdbx_number_of_molecules" | "rcsb_branched_entity_annotation.annotation_id" | "rcsb_branched_entity_annotation.description" | "rcsb_branched_entity_annotation.name" | "rcsb_branched_entity_annotation.type" | "rcsb_branched_entity_annotation.annotation_lineage.depth" | "rcsb_branched_entity_annotation.annotation_lineage.id" | "rcsb_branched_entity_annotation.annotation_lineage.name" | "rcsb_branched_entity_container_identifiers.chem_comp_monomers" | "rcsb_branched_entity_container_identifiers.chem_ref_def_id" | "rcsb_branched_entity_container_identifiers.entity_id" | "rcsb_branched_entity_container_identifiers.entry_id" | "rcsb_branched_entity_container_identifiers.prd_id" | "rcsb_branched_entity_container_identifiers.rcsb_id" | "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_accession" | "rcsb_branched_entity_container_identifiers.reference_identifiers.resource_name" | "rcsb_branched_entity_feature_summary.count" | "rcsb_branched_entity_feature_summary.coverage" | "rcsb_branched_entity_feature_summary.maximum_length" | "rcsb_branched_entity_feature_summary.minimum_length" | "rcsb_branched_entity_feature_summary.type" | "rcsb_branched_entity_keywords.text" | "rcsb_branched_entity_name_com.name" | "rcsb_branched_entity_name_sys.name" | "audit_author.identifier_ORCID" | "audit_author.name" | "cell.angle_alpha" | "cell.angle_beta" | "cell.angle_gamma" | "cell.length_a" | "cell.length_b" | "cell.length_c" | "citation.book_title" | "citation.id" | "citation.journal_abbrev" | "citation.journal_id_ASTM" | "citation.journal_id_ISSN" | "citation.pdbx_database_id_DOI" | "citation.rcsb_authors" | "citation.rcsb_is_primary" | "citation.rcsb_journal_abbrev" | "citation.title" | "citation.unpublished_flag" | "citation.year" | "database_2.database_code" | "database_2.pdbx_database_accession" | "diffrn.ambient_pressure" | "diffrn.ambient_temp" | "diffrn.crystal_support" | "diffrn.details" | "diffrn.pdbx_serial_crystal_experiment" | "diffrn_detector.details" | "diffrn_detector.detector" | "diffrn_detector.pdbx_collection_date" | "diffrn_detector.type" | "diffrn_radiation.collimation" | "diffrn_radiation.monochromator" | "diffrn_radiation.pdbx_diffrn_protocol" | "diffrn_source.details" | "diffrn_source.pdbx_synchrotron_beamline" | "diffrn_source.pdbx_synchrotron_site" | "diffrn_source.source" | "diffrn_source.type" | "em_2d_crystal_entity.angle_gamma" | "em_2d_crystal_entity.c_sampling_length" | "em_2d_crystal_entity.length_a" | "em_2d_crystal_entity.length_b" | "em_2d_crystal_entity.length_c" | "em_3d_crystal_entity.angle_alpha" | "em_3d_crystal_entity.angle_beta" | "em_3d_crystal_entity.angle_gamma" | "em_3d_crystal_entity.length_a" | "em_3d_crystal_entity.length_b" | "em_3d_crystal_entity.length_c" | "em_3d_crystal_entity.space_group_name" | "em_3d_crystal_entity.space_group_num" | "em_3d_fitting.details" | "em_3d_fitting.method" | "em_3d_fitting.overall_b_value" | "em_3d_fitting.ref_protocol" | "em_3d_fitting.ref_space" | "em_3d_fitting.target_criteria" | "em_3d_fitting_list.details" | "em_3d_reconstruction.actual_pixel_size" | "em_3d_reconstruction.algorithm" | "em_3d_reconstruction.method" | "em_3d_reconstruction.nominal_pixel_size" | "em_3d_reconstruction.num_class_averages" | "em_3d_reconstruction.num_particles" | "em_3d_reconstruction.refinement_type" | "em_3d_reconstruction.resolution" | "em_3d_reconstruction.resolution_method" | "em_3d_reconstruction.symmetry_type" | "em_ctf_correction.details" | "em_ctf_correction.type" | "em_diffraction.camera_length" | "em_diffraction_shell.fourier_space_coverage" | "em_diffraction_shell.high_resolution" | "em_diffraction_shell.low_resolution" | "em_diffraction_shell.multiplicity" | "em_diffraction_shell.num_structure_factors" | "em_diffraction_shell.phase_residual" | "em_diffraction_stats.fourier_space_coverage" | "em_diffraction_stats.high_resolution" | "em_diffraction_stats.num_intensities_measured" | "em_diffraction_stats.num_structure_factors" | "em_diffraction_stats.overall_phase_error" | "em_diffraction_stats.overall_phase_residual" | "em_diffraction_stats.r_merge" | "em_diffraction_stats.r_sym" | "em_embedding.details" | "em_embedding.material" | "em_entity_assembly.parent_id" | "em_entity_assembly.source" | "em_experiment.aggregation_state" | "em_experiment.reconstruction_method" | "em_helical_entity.angular_rotation_per_subunit" | "em_helical_entity.axial_rise_per_subunit" | "em_helical_entity.axial_symmetry" | "em_image_recording.average_exposure_time" | "em_image_recording.avg_electron_dose_per_image" | "em_image_recording.detector_mode" | "em_image_recording.film_or_detector_model" | "em_image_recording.num_diffraction_images" | "em_image_recording.num_grids_imaged" | "em_image_recording.num_real_images" | "em_imaging.accelerating_voltage" | "em_imaging.alignment_procedure" | "em_imaging.c2_aperture_diameter" | "em_imaging.calibrated_defocus_max" | "em_imaging.calibrated_defocus_min" | "em_imaging.calibrated_magnification" | "em_imaging.cryogen" | "em_imaging.date" | "em_imaging.detector_distance" | "em_imaging.illumination_mode" | "em_imaging.microscope_model" | "em_imaging.mode" | "em_imaging.nominal_cs" | "em_imaging.nominal_defocus_max" | "em_imaging.nominal_defocus_min" | "em_imaging.nominal_magnification" | "em_imaging.recording_temperature_maximum" | "em_imaging.recording_temperature_minimum" | "em_imaging.residual_tilt" | "em_imaging.specimen_holder_model" | "em_imaging.temperature" | "em_imaging.tilt_angle_max" | "em_imaging.tilt_angle_min" | "em_particle_selection.num_particles_selected" | "em_single_particle_entity.point_symmetry" | "em_software.category" | "em_software.name" | "em_specimen.concentration" | "em_specimen.shadowing_applied" | "em_specimen.staining_applied" | "em_specimen.vitrification_applied" | "em_staining.details" | "em_staining.material" | "em_staining.type" | "em_vitrification.chamber_temperature" | "em_vitrification.cryogen_name" | "em_vitrification.humidity" | "em_vitrification.instrument" | "em_vitrification.method" | "em_vitrification.temp" | "exptl.crystals_number" | "exptl.details" | "exptl.method" | "exptl_crystal.density_Matthews" | "exptl_crystal.density_meas" | "exptl_crystal.density_percent_sol" | "exptl_crystal.pdbx_mosaicity" | "exptl_crystal.pdbx_mosaicity_esd" | "exptl_crystal_grow.method" | "exptl_crystal_grow.pH" | "exptl_crystal_grow.pdbx_details" | "exptl_crystal_grow.temp" | "pdbx_SG_project.full_name_of_center" | "pdbx_SG_project.initial_of_center" | "pdbx_SG_project.project_name" | "pdbx_audit_support.country" | "pdbx_audit_support.funding_organization" | "pdbx_audit_support.grant_number" | "pdbx_database_PDB_obs_spr.replace_pdb_id" | "pdbx_database_related.content_type" | "pdbx_database_related.db_id" | "pdbx_database_related.db_name" | "pdbx_database_status.pdb_format_compatible" | "pdbx_deposit_group.group_description" | "pdbx_deposit_group.group_id" | "pdbx_deposit_group.group_title" | "pdbx_deposit_group.group_type" | "pdbx_initial_refinement_model.accession_code" | "pdbx_initial_refinement_model.source_name" | "pdbx_initial_refinement_model.type" | "pdbx_molecule_features.class" | "pdbx_molecule_features.details" | "pdbx_molecule_features.name" | "pdbx_molecule_features.prd_id" | "pdbx_nmr_details.text" | "pdbx_nmr_refine.details" | "pdbx_nmr_refine.method" | "pdbx_nmr_sample_details.contents" | "pdbx_nmr_sample_details.details" | "pdbx_nmr_sample_details.label" | "pdbx_nmr_software.name" | "pdbx_nmr_spectrometer.field_strength" | "pdbx_nmr_spectrometer.manufacturer" | "pdbx_nmr_spectrometer.model" | "pdbx_reflns_twin.type" | "pdbx_serial_crystallography_measurement.collimation" | "pdbx_serial_crystallography_sample_delivery.description" | "pdbx_serial_crystallography_sample_delivery.method" | "pdbx_serial_crystallography_sample_delivery_fixed_target.description" | "pdbx_serial_crystallography_sample_delivery_fixed_target.details" | "pdbx_serial_crystallography_sample_delivery_injection.description" | "pdbx_serial_crystallography_sample_delivery_injection.injector_nozzle" | "pdbx_serial_crystallography_sample_delivery_injection.preparation" | "pdbx_soln_scatter.data_analysis_software_list" | "pdbx_soln_scatter.data_reduction_software_list" | "pdbx_soln_scatter.detector_specific" | "pdbx_soln_scatter.detector_type" | "pdbx_soln_scatter.source_beamline" | "pdbx_soln_scatter.source_beamline_instrument" | "pdbx_soln_scatter.source_class" | "pdbx_soln_scatter.source_type" | "pdbx_soln_scatter_model.conformer_selection_criteria" | "pdbx_soln_scatter_model.details" | "pdbx_soln_scatter_model.method" | "pdbx_soln_scatter_model.software_list" | "pdbx_vrpt_summary_geometry.angles_RMSZ" | "pdbx_vrpt_summary_geometry.bonds_RMSZ" | "pdbx_vrpt_summary_geometry.clashscore" | "pdbx_vrpt_summary_geometry.percent_ramachandran_outliers" | "pdbx_vrpt_summary_geometry.percent_rotamer_outliers" | "rcsb_accession_info.deposit_date" | "rcsb_accession_info.has_released_experimental_data" | "rcsb_accession_info.initial_release_date" | "rcsb_accession_info.revision_date" | "rcsb_comp_model_provenance.entry_id" | "rcsb_comp_model_provenance.source_db" | "rcsb_entry_container_identifiers.emdb_ids" | "rcsb_entry_container_identifiers.entry_id" | "rcsb_entry_container_identifiers.rcsb_id" | "rcsb_entry_container_identifiers.related_emdb_ids" | "rcsb_entry_info.assembly_count" | "rcsb_entry_info.branched_entity_count" | "rcsb_entry_info.cis_peptide_count" | "rcsb_entry_info.deposited_atom_count" | "rcsb_entry_info.deposited_deuterated_water_count" | "rcsb_entry_info.deposited_hydrogen_atom_count" | "rcsb_entry_info.deposited_model_count" | "rcsb_entry_info.deposited_modeled_polymer_monomer_count" | "rcsb_entry_info.deposited_nonpolymer_entity_instance_count" | "rcsb_entry_info.deposited_polymer_entity_instance_count" | "rcsb_entry_info.deposited_polymer_monomer_count" | "rcsb_entry_info.deposited_solvent_atom_count" | "rcsb_entry_info.deposited_unmodeled_polymer_monomer_count" | "rcsb_entry_info.diffrn_radiation_wavelength_maximum" | "rcsb_entry_info.diffrn_radiation_wavelength_minimum" | "rcsb_entry_info.disulfide_bond_count" | "rcsb_entry_info.entity_count" | "rcsb_entry_info.experimental_method" | "rcsb_entry_info.experimental_method_count" | "rcsb_entry_info.inter_mol_covalent_bond_count" | "rcsb_entry_info.inter_mol_metalic_bond_count" | "rcsb_entry_info.molecular_weight" | "rcsb_entry_info.na_polymer_entity_types" | "rcsb_entry_info.nonpolymer_entity_count" | "rcsb_entry_info.nonpolymer_molecular_weight_maximum" | "rcsb_entry_info.nonpolymer_molecular_weight_minimum" | "rcsb_entry_info.polymer_composition" | "rcsb_entry_info.polymer_entity_count" | "rcsb_entry_info.polymer_entity_count_DNA" | "rcsb_entry_info.polymer_entity_count_RNA" | "rcsb_entry_info.polymer_entity_count_nucleic_acid" | "rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid" | "rcsb_entry_info.polymer_entity_count_protein" | "rcsb_entry_info.polymer_entity_taxonomy_count" | "rcsb_entry_info.polymer_molecular_weight_maximum" | "rcsb_entry_info.polymer_molecular_weight_minimum" | "rcsb_entry_info.polymer_monomer_count_maximum" | "rcsb_entry_info.polymer_monomer_count_minimum" | "rcsb_entry_info.resolution_combined" | "rcsb_entry_info.selected_polymer_entity_types" | "rcsb_entry_info.software_programs_combined" | "rcsb_entry_info.solvent_entity_count" | "rcsb_entry_info.structure_determination_methodology" | "rcsb_entry_info.structure_determination_methodology_priority" | "rcsb_entry_info.diffrn_resolution_high.value" | "rcsb_ma_qa_metric_global.ma_qa_metric_global.type" | "rcsb_ma_qa_metric_global.ma_qa_metric_global.value" | "rcsb_primary_citation.book_title" | "rcsb_primary_citation.id" | "rcsb_primary_citation.journal_abbrev" | "rcsb_primary_citation.journal_id_ASTM" | "rcsb_primary_citation.journal_id_ISSN" | "rcsb_primary_citation.pdbx_database_id_DOI" | "rcsb_primary_citation.rcsb_ORCID_identifiers" | "rcsb_primary_citation.rcsb_authors" | "rcsb_primary_citation.rcsb_journal_abbrev" | "rcsb_primary_citation.title" | "rcsb_primary_citation.year" | "refine.B_iso_mean" | "refine.details" | "refine.ls_R_factor_R_free" | "refine.ls_R_factor_R_work" | "refine.ls_R_factor_all" | "refine.ls_R_factor_obs" | "refine.pdbx_method_to_determine_struct" | "reflns.B_iso_Wilson_estimate" | "reflns.R_free_details" | "reflns.d_resolution_high" | "reflns.data_reduction_details" | "reflns.data_reduction_method" | "reflns.pdbx_Rmerge_I_obs" | "reflns.pdbx_redundancy" | "reflns.percent_possible_obs" | "software.classification" | "software.language" | "software.name" | "software.type" | "struct.pdbx_CASP_flag" | "struct.pdbx_model_details" | "struct.pdbx_model_type_details" | "struct.title" | "struct_keywords.pdbx_keywords" | "struct_keywords.text" | "symmetry.cell_setting" | "symmetry.pdbx_full_space_group_name_H_M" | "symmetry.space_group_name_H_M" | "symmetry.space_group_name_Hall" | "rcsb_entry_group_membership.group_id" | "rcsb_entry_group_membership.aggregation_method" | "rcsb_external_references.type" | "rcsb_binding_affinity.comp_id" | "rcsb_binding_affinity.type" | "rcsb_binding_affinity.value" | "rcsb_polymer_entity_instance_container_identifiers.asym_id" | "rcsb_polymer_entity_instance_container_identifiers.auth_asym_id" | "rcsb_polymer_entity_instance_container_identifiers.entity_id" | "rcsb_polymer_entity_instance_container_identifiers.entry_id" | "rcsb_polymer_entity_instance_container_identifiers.rcsb_id" | "rcsb_polymer_instance_annotation.annotation_id" | "rcsb_polymer_instance_annotation.description" | "rcsb_polymer_instance_annotation.name" | "rcsb_polymer_instance_annotation.type" | "rcsb_polymer_instance_annotation.annotation_lineage.depth" | "rcsb_polymer_instance_annotation.annotation_lineage.id" | "rcsb_polymer_instance_annotation.annotation_lineage.name" | "rcsb_polymer_instance_feature_summary.count" | "rcsb_polymer_instance_feature_summary.coverage" | "rcsb_polymer_instance_feature_summary.maximum_length" | "rcsb_polymer_instance_feature_summary.minimum_length" | "rcsb_polymer_instance_feature_summary.type" | "rcsb_polymer_struct_conn.connect_type" | "rcsb_polymer_struct_conn.role" | "rcsb_polymer_struct_conn.value_order" | "pdbx_entity_nonpoly.name" | "rcsb_nonpolymer_entity.details" | "rcsb_nonpolymer_entity.formula_weight" | "rcsb_nonpolymer_entity.pdbx_description" | "rcsb_nonpolymer_entity.pdbx_number_of_molecules" | "rcsb_nonpolymer_entity_annotation.annotation_id" | "rcsb_nonpolymer_entity_annotation.comp_id" | "rcsb_nonpolymer_entity_annotation.description" | "rcsb_nonpolymer_entity_annotation.name" | "rcsb_nonpolymer_entity_annotation.type" | "rcsb_nonpolymer_entity_annotation.annotation_lineage.depth" | "rcsb_nonpolymer_entity_annotation.annotation_lineage.id" | "rcsb_nonpolymer_entity_annotation.annotation_lineage.name" | "rcsb_nonpolymer_entity_container_identifiers.chem_ref_def_id" | "rcsb_nonpolymer_entity_container_identifiers.nonpolymer_comp_id" | "rcsb_nonpolymer_entity_container_identifiers.prd_id" | "rcsb_nonpolymer_entity_container_identifiers.rcsb_id" | "rcsb_nonpolymer_entity_feature.type" | "rcsb_nonpolymer_entity_feature_summary.count" | "rcsb_nonpolymer_entity_feature_summary.type" | "rcsb_nonpolymer_entity_keywords.text" | "rcsb_nonpolymer_entity_name_com.name" | "rcsb_pubmed_container_identifiers.pubmed_id" | "rcsb_pubmed_abstract_text" | "rcsb_pubmed_mesh_descriptors_lineage.id" | "rcsb_pubmed_mesh_descriptors_lineage.name" | "rcsb_pubmed_mesh_descriptors_lineage.depth" | "rcsb_cluster_membership.cluster_id" | "rcsb_cluster_membership.identity" | "entity_poly.rcsb_entity_polymer_type" | "entity_poly.rcsb_mutation_count" | "entity_poly.rcsb_sample_sequence_length" | "entity_src_gen.gene_src_tissue" | "entity_src_gen.pdbx_description" | "entity_src_gen.pdbx_gene_src_atcc" | "entity_src_gen.pdbx_gene_src_cell" | "entity_src_gen.pdbx_gene_src_cell_line" | "entity_src_gen.pdbx_gene_src_cellular_location" | "entity_src_gen.pdbx_gene_src_organ" | "entity_src_gen.pdbx_gene_src_organelle" | "entity_src_gen.pdbx_host_org_atcc" | "entity_src_gen.pdbx_host_org_cell" | "entity_src_gen.pdbx_host_org_cell_line" | "entity_src_gen.pdbx_host_org_cellular_location" | "entity_src_gen.pdbx_host_org_culture_collection" | "entity_src_gen.pdbx_host_org_organ" | "entity_src_gen.pdbx_host_org_organelle" | "entity_src_gen.pdbx_host_org_tissue" | "entity_src_gen.pdbx_host_org_tissue_fraction" | "entity_src_gen.pdbx_host_org_vector" | "entity_src_gen.pdbx_host_org_vector_type" | "entity_src_gen.plasmid_name" | "entity_src_nat.details" | "entity_src_nat.pdbx_atcc" | "entity_src_nat.pdbx_cell" | "entity_src_nat.pdbx_cell_line" | "entity_src_nat.pdbx_cellular_location" | "entity_src_nat.pdbx_organ" | "entity_src_nat.pdbx_organelle" | "entity_src_nat.pdbx_plasmid_details" | "entity_src_nat.pdbx_plasmid_name" | "entity_src_nat.tissue" | "entity_src_nat.tissue_fraction" | "rcsb_entity_host_organism.common_name" | "rcsb_entity_host_organism.ncbi_common_names" | "rcsb_entity_host_organism.ncbi_parent_scientific_name" | "rcsb_entity_host_organism.ncbi_scientific_name" | "rcsb_entity_host_organism.scientific_name" | "rcsb_entity_host_organism.taxonomy_lineage.depth" | "rcsb_entity_host_organism.taxonomy_lineage.id" | "rcsb_entity_host_organism.taxonomy_lineage.name" | "rcsb_entity_source_organism.common_name" | "rcsb_entity_source_organism.ncbi_common_names" | "rcsb_entity_source_organism.ncbi_parent_scientific_name" | "rcsb_entity_source_organism.ncbi_scientific_name" | "rcsb_entity_source_organism.scientific_name" | "rcsb_entity_source_organism.source_type" | "rcsb_entity_source_organism.taxonomy_lineage.depth" | "rcsb_entity_source_organism.taxonomy_lineage.id" | "rcsb_entity_source_organism.taxonomy_lineage.name" | "rcsb_entity_source_organism.rcsb_gene_name.value" | "rcsb_polymer_entity.formula_weight" | "rcsb_polymer_entity.pdbx_description" | "rcsb_polymer_entity.pdbx_number_of_molecules" | "rcsb_polymer_entity.rcsb_source_part_count" | "rcsb_polymer_entity.rcsb_source_taxonomy_count" | "rcsb_polymer_entity.rcsb_ec_lineage.depth" | "rcsb_polymer_entity.rcsb_ec_lineage.id" | "rcsb_polymer_entity.rcsb_ec_lineage.name" | "rcsb_polymer_entity.rcsb_macromolecular_names_combined.name" | "rcsb_polymer_entity.rcsb_enzyme_class_combined.depth" | "rcsb_polymer_entity.rcsb_enzyme_class_combined.ec" | "rcsb_polymer_entity.rcsb_enzyme_class_combined.provenance_source" | "rcsb_polymer_entity.rcsb_polymer_name_combined.names" | "rcsb_polymer_entity_annotation.annotation_id" | "rcsb_polymer_entity_annotation.description" | "rcsb_polymer_entity_annotation.name" | "rcsb_polymer_entity_annotation.type" | "rcsb_polymer_entity_annotation.annotation_lineage.depth" | "rcsb_polymer_entity_annotation.annotation_lineage.id" | "rcsb_polymer_entity_annotation.annotation_lineage.name" | "rcsb_polymer_entity_container_identifiers.chem_comp_monomers" | "rcsb_polymer_entity_container_identifiers.chem_ref_def_id" | "rcsb_polymer_entity_container_identifiers.entry_id" | "rcsb_polymer_entity_container_identifiers.prd_id" | "rcsb_polymer_entity_container_identifiers.rcsb_id" | "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession" | "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_isoform" | "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name" | "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.entity_sequence_coverage" | "rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.reference_sequence_coverage" | "rcsb_polymer_entity_feature_summary.count" | "rcsb_polymer_entity_feature_summary.coverage" | "rcsb_polymer_entity_feature_summary.maximum_length" | "rcsb_polymer_entity_feature_summary.minimum_length" | "rcsb_polymer_entity_feature_summary.type" | "rcsb_polymer_entity_keywords.text" | "rcsb_polymer_entity_name_com.name" | "rcsb_polymer_entity_name_sys.name" | "rcsb_polymer_entity_group_membership.group_id" | "rcsb_polymer_entity_group_membership.aggregation_method" | "rcsb_polymer_entity_group_membership.similarity_cutoff" | "rcsb_genomic_lineage.id" | "rcsb_membrane_lineage.id" | "rcsb_membrane_lineage.name" | "rcsb_membrane_lineage.depth" | "pdbx_struct_assembly.details" | "pdbx_struct_assembly.oligomeric_details" | "pdbx_struct_assembly.rcsb_details" | "pdbx_struct_assembly_auth_evidence.details" | "pdbx_struct_assembly_auth_evidence.experimental_support" | "rcsb_assembly_container_identifiers.assembly_id" | "rcsb_assembly_container_identifiers.entry_id" | "rcsb_assembly_container_identifiers.rcsb_id" | "rcsb_assembly_info.atom_count" | "rcsb_assembly_info.branched_atom_count" | "rcsb_assembly_info.branched_entity_count" | "rcsb_assembly_info.branched_entity_instance_count" | "rcsb_assembly_info.deuterated_water_count" | "rcsb_assembly_info.hydrogen_atom_count" | "rcsb_assembly_info.modeled_polymer_monomer_count" | "rcsb_assembly_info.na_polymer_entity_types" | "rcsb_assembly_info.nonpolymer_atom_count" | "rcsb_assembly_info.nonpolymer_entity_count" | "rcsb_assembly_info.nonpolymer_entity_instance_count" | "rcsb_assembly_info.polymer_atom_count" | "rcsb_assembly_info.polymer_composition" | "rcsb_assembly_info.polymer_entity_count" | "rcsb_assembly_info.polymer_entity_count_DNA" | "rcsb_assembly_info.polymer_entity_count_RNA" | "rcsb_assembly_info.polymer_entity_count_nucleic_acid" | "rcsb_assembly_info.polymer_entity_count_nucleic_acid_hybrid" | "rcsb_assembly_info.polymer_entity_count_protein" | "rcsb_assembly_info.polymer_entity_instance_count" | "rcsb_assembly_info.polymer_entity_instance_count_DNA" | "rcsb_assembly_info.polymer_entity_instance_count_RNA" | "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid" | "rcsb_assembly_info.polymer_entity_instance_count_nucleic_acid_hybrid" | "rcsb_assembly_info.polymer_entity_instance_count_protein" | "rcsb_assembly_info.polymer_monomer_count" | "rcsb_assembly_info.selected_polymer_entity_types" | "rcsb_assembly_info.solvent_atom_count" | "rcsb_assembly_info.solvent_entity_count" | "rcsb_assembly_info.solvent_entity_instance_count" | "rcsb_assembly_info.unmodeled_polymer_monomer_count" | "rcsb_struct_symmetry.symbol" | "rcsb_struct_symmetry.type" | "rcsb_struct_symmetry.oligomeric_state" | "rcsb_struct_symmetry.clusters.avg_rmsd" | "rcsb_struct_symmetry.kind" | "rcsb_struct_symmetry_lineage.id" | "rcsb_struct_symmetry_lineage.name" | "rcsb_struct_symmetry_lineage.depth" | "rcsb_assembly_annotation.annotation_id" | "rcsb_assembly_annotation.name" | "rcsb_assembly_annotation.type" | "rcsb_repository_holdings_current.repository_content_types" | "rcsb_nonpolymer_entity_instance_container_identifiers.asym_id" | "rcsb_nonpolymer_entity_instance_container_identifiers.auth_asym_id" | "rcsb_nonpolymer_entity_instance_container_identifiers.comp_id" | "rcsb_nonpolymer_entity_instance_container_identifiers.entity_id" | "rcsb_nonpolymer_entity_instance_container_identifiers.entry_id" | "rcsb_nonpolymer_entity_instance_container_identifiers.rcsb_id" | "rcsb_nonpolymer_instance_annotation.annotation_id" | "rcsb_nonpolymer_instance_annotation.comp_id" | "rcsb_nonpolymer_instance_annotation.description" | "rcsb_nonpolymer_instance_annotation.name" | "rcsb_nonpolymer_instance_annotation.type" | "rcsb_nonpolymer_instance_annotation.annotation_lineage.depth" | "rcsb_nonpolymer_instance_annotation.annotation_lineage.id" | "rcsb_nonpolymer_instance_annotation.annotation_lineage.name" | "rcsb_nonpolymer_instance_validation_score.RSCC" | "rcsb_nonpolymer_instance_validation_score.RSR" | "rcsb_nonpolymer_instance_validation_score.intermolecular_clashes" | "rcsb_nonpolymer_instance_validation_score.is_best_instance" | "rcsb_nonpolymer_instance_validation_score.is_subject_of_investigation" | "rcsb_nonpolymer_instance_validation_score.mogul_angle_outliers" | "rcsb_nonpolymer_instance_validation_score.mogul_angles_RMSZ" | "rcsb_nonpolymer_instance_validation_score.mogul_bond_outliers" | "rcsb_nonpolymer_instance_validation_score.mogul_bonds_RMSZ" | "rcsb_nonpolymer_instance_validation_score.ranking_model_fit" | "rcsb_nonpolymer_instance_validation_score.ranking_model_geometry" | "rcsb_nonpolymer_instance_validation_score.stereo_outliers" | "rcsb_target_neighbors.distance" | "rcsb_target_neighbors.target_asym_id" | "rcsb_target_neighbors.target_comp_id" | "rcsb_target_neighbors.target_entity_id" | "rcsb_target_neighbors.target_is_bound" | "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_accession" | "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_isoform" | "rcsb_uniprot_container_identifiers.reference_sequence_identifiers.database_name" | "rcsb_uniprot_protein.name.value" | "rcsb_uniprot_annotation.annotation_id" | "rcsb_uniprot_annotation.description" | "rcsb_uniprot_annotation.name" | "rcsb_uniprot_annotation.type" | "rcsb_uniprot_annotation.annotation_lineage.depth" | "rcsb_uniprot_annotation.annotation_lineage.id" | "rcsb_uniprot_annotation.annotation_lineage.name" | "rcsb_uniprot_external_reference.reference_name" | "chem_comp.formula_weight" | "chem_comp.name" | "chem_comp.type" | "pdbx_reference_molecule.class" | "pdbx_reference_molecule.description" | "pdbx_reference_molecule.name" | "pdbx_reference_molecule.prd_id" | "pdbx_reference_molecule.type" | "pdbx_reference_molecule_family.name" | "pdbx_reference_molecule_related_structures.db_code" | "pdbx_reference_molecule_synonyms.name" | "rcsb_chem_comp_annotation.annotation_id" | "rcsb_chem_comp_annotation.description" | "rcsb_chem_comp_annotation.name" | "rcsb_chem_comp_annotation.type" | "rcsb_chem_comp_annotation.annotation_lineage.depth" | "rcsb_chem_comp_annotation.annotation_lineage.id" | "rcsb_chem_comp_annotation.annotation_lineage.name" | "rcsb_chem_comp_container_identifiers.comp_id" | "rcsb_chem_comp_container_identifiers.drugbank_id" | "rcsb_chem_comp_container_identifiers.prd_id" | "rcsb_chem_comp_container_identifiers.rcsb_id" | "rcsb_chem_comp_descriptor.InChIKey" | "rcsb_chem_comp_info.atom_count_chiral" | "rcsb_chem_comp_info.atom_count_heavy" | "rcsb_chem_comp_info.bond_count" | "rcsb_chem_comp_info.bond_count_aromatic" | "rcsb_chem_comp_info.initial_deposition_date" | "rcsb_chem_comp_info.initial_release_date" | "rcsb_chem_comp_related.resource_accession_code" | "rcsb_chem_comp_related.resource_name" | "rcsb_chem_comp_synonyms.name" | "rcsb_chem_comp_synonyms.provenance_source" | "rcsb_chem_comp_synonyms.type" | "rcsb_chem_comp_target.name" | "rcsb_id" | "drugbank_container_identifiers.drugbank_id" | "drugbank_info.affected_organisms" | "drugbank_info.atc_codes" | "drugbank_info.brand_names" | "drugbank_info.cas_number" | "drugbank_info.description" | "drugbank_info.drug_categories" | "drugbank_info.drug_groups" | "drugbank_info.indication" | "drugbank_info.mechanism_of_action" | "drugbank_info.name" | "drugbank_info.pharmacology" | "drugbank_info.synonyms" | "drugbank_info.drug_products.approved" | "drugbank_info.drug_products.country" | "drugbank_info.drug_products.ended_marketing_on" | "drugbank_info.drug_products.started_marketing_on" | "drugbank_target.interaction_type" | "drugbank_target.name" | "drugbank_target.organism_common_name" | "drugbank_target.target_actions";
